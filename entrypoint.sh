#!/bin/bash

# ============ Colors ============
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

USER='pos'

# ============ Helpers ============
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

validate_ip() {
    local ip=$1
    [[ $ip =~ ^[0-9]+\.[0-9]+\.[0-9]+\.[0-9]+$ ]]
}

get_server_ip() {
    local ip
    declare -a methods=(
        "hostname -I | awk '{print \$1}'"
        "ip route get 1 | awk '{print \$7}' | head -1"
        "curl -s ifconfig.me"
        "dig +short myip.opendns.com @resolver1.opendns.com"
    )
    for method in "${methods[@]}"; do
        ip=$(eval "$method" 2>/dev/null)
        if [ -n "$ip" ] && validate_ip "$ip"; then
            echo "$ip"
            return 0
        fi
    done
    echo "127.0.0.1"
    return 1
}

# ============ Check if running as root ============
check_root() {
    if [ "$EUID" -ne 0 ]; then 
        echo -e "${RED}This script must be run as root (use sudo)!${NC}"
        exit 1
    fi
}

# ============ User Permission Setup ============
setup_permissions() {
    echo -e "${CYAN}Setting up user permissions...${NC}"
    
    # Check if user exists, create if not
    if ! id "$USER" &>/dev/null; then
        echo -e "${YELLOW}Creating user '$USER'...${NC}"
        useradd -m -s /bin/bash "$USER"
        echo -e "${GREEN}User '$USER' created successfully!${NC}"
    else
        echo -e "${YELLOW}User '$USER' already exists.${NC}"
    fi
    
    # Set up proper home directory permissions
    echo -e "${CYAN}Setting up home directory permissions...${NC}"
    mkdir -p /home/$USER
    chown -R $USER:$USER /home/$USER
    chmod 755 /home/$USER
    
    # Create website directory if it doesn't exist
    echo -e "${CYAN}Setting up website directory permissions...${NC}"
    mkdir -p /home/$USER/det-fsmm-web
    chown -R $USER:$USER /home/$USER/det-fsmm-web
    chmod -R 755 /home/$USER/det-fsmm-web
    
    # Add current user to pos group if needed
    if ! groups $USER | grep -q "\b$USER\b"; then
        usermod -aG $USER $USER
    fi
    
    # Set up sudo permissions without password for pos user
    echo -e "${YELLOW}Setting up passwordless sudo for '$USER'...${NC}"
    echo "$USER ALL=(ALL) NOPASSWD:ALL" | tee /etc/sudoers.d/$USER > /dev/null
    chmod 440 /etc/sudoers.d/$USER
    
    echo -e "${GREEN}User permissions setup completed!${NC}"
}

# ============ Install System Dependencies ============
install_system_deps() {
    echo -e "${CYAN}Installing system dependencies...${NC}"
    apt-get update
    apt-get install -y curl wget git build-essential
    echo -e "${GREEN}System dependencies installed!${NC}"
}

# ============ Install Node.js and NVM ============
install_nodejs() {
    echo -e "${CYAN}Installing Node.js...${NC}"
    
    # Install NVM (Node Version Manager) for the pos user
    echo -e "${YELLOW}Installing NVM for user '$USER'...${NC}"
    sudo -u $USER bash -c 'curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash'
    
    # Source nvm for pos user
    echo -e "${YELLOW}Setting up NVM environment...${NC}"
    export NVM_DIR="/home/$USER/.nvm"
    [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
    
    # Install Node.js as pos user
    echo -e "${YELLOW}Installing Node.js v22...${NC}"
    sudo -u $USER bash -c 'source ~/.nvm/nvm.sh && nvm install 22 && nvm use 22'
    
    # Enable pnpm
    echo -e "${YELLOW}Setting up pnpm...${NC}"
    sudo -u $USER bash -c 'source ~/.nvm/nvm.sh && corepack enable pnpm'
    
    echo -e "${GREEN}Node.js installed!${NC}"
}

# ============ Main setup (run as pos user) ============
setup_application() {
    echo -e "${CYAN}Starting application setup...${NC}"
    
    # Switch to pos user for application setup
    echo -e "${YELLOW}Switching to user '$USER' for application setup...${NC}"
    
    # Run the rest as pos user
    sudo -u $USER bash <<EOF
    # Set up environment
    export NVM_DIR="/home/$USER/.nvm"
    [ -s "\$NVM_DIR/nvm.sh" ] && \. "\$NVM_DIR/nvm.sh"
    
    # Navigate to website directory
    cd /home/$USER/det-fsmm-web || exit 1
    
    echo -e "${GREEN}Installing pm2 globally...${NC}"
    # Install pm2 globally for pos user
    npm install -g pm2
    
    echo -e "${GREEN}Installing project dependencies...${NC}"
    pnpm install
    
    # Build the static website
    echo -e "${CYAN}Building the website...${NC}"
    pnpm build
    
    # Start the website with pm2 on port 3000
    echo -e "${CYAN}Starting the website on port 3000...${NC}"
    PORT=3000 pm2 start pnpm --name "det-fsmm-web" -- run start
    
    # Save pm2 process list
    pm2 save
    
    echo -e "${GREEN}Website setup completed!${NC}"
EOF
    
    # Setup PM2 startup script (needs root)
    echo -e "${CYAN}Setting up PM2 startup script...${NC}"
    # Get the startup command from pm2 as pos user
    PM2_STARTUP_CMD=$(sudo -u $USER bash -c 'source ~/.nvm/nvm.sh && pm2 startup systemd -u $USER --hp /home/$USER 2>&1 | grep "sudo" | head -1')
    
    if [ -n "$PM2_STARTUP_CMD" ]; then
        echo -e "${YELLOW}Running: $PM2_STARTUP_CMD${NC}"
        eval "$PM2_STARTUP_CMD"
    else
        echo -e "${YELLOW}PM2 startup already configured or failed to generate command${NC}"
    fi
    
    # Save pm2 processes again to ensure they're persisted
    sudo -u $USER bash -c 'source ~/.nvm/nvm.sh && pm2 save'
}

# ============ Main execution ============

# Check if running as root
check_root

echo -e "${GREEN}Starting setup process...${NC}"

# Setup permissions first (requires root)
setup_permissions

# Install system dependencies (requires root)
install_system_deps

# Install Node.js (runs as pos user)
install_nodejs

# Run the main setup
setup_application

# Get server IP for final output
SERVER_IP=$(get_server_ip)

# --- Final Output ---
echo -e "\n${GREEN}=== Setup Complete ===${NC}"
echo -e "${GREEN}Application Services:${NC}"
echo -e " - Website: http://${SERVER_IP}:3000"
echo -e " - Website: http://localhost:3000"

# Restart server to apply all changes
echo -e "${YELLOW}Rebooting the server to apply all changes...${NC} Rebooting in 5 seconds."
sleep 5
reboot
