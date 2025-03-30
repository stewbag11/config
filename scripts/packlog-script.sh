#!/bin/bash

# ANSI Colors
RED="\e[37m"
YELLOW="\e[33m"
BLUE="\e[34m"
CYAN="\e[36m"
RESET="\e[0m"

# Output file path
output_file="/home/spencer/logs/package-list.log"

# Function to colorize output
colorize_packages() {
    while read -r line; do
        # Split package name and version
        package_name=$(echo "$line" | awk '{print $1}')
        package_version=$(echo "$line" | awk '{print $2}')

        # Apply colors and append to the output file
        echo -e "${YELLOW}${package_name}${RESET} ${RED}${package_version}${RESET}" >> "$output_file"
    done
}

# Get list of user installed packages from pacman
echo -e "$CYAN[$(date +'%a %b %d %Y %I:%M %p')]$BLUE\n\nPacman packages:$RESET" > "$output_file"
sudo pacman -Qet | colorize_packages

# Add a separator
echo -e $BLUE"\nYay AUR packages:$RESET" >> "$output_file"

# Get the list of AUR packages installed with yay
yay -Qm | colorize_packages

# Inform user
echo "packlog-script finished successfully, check $output_file for more info."
