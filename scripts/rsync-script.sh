#!/bin/bash

# ANSI Colors
RED="\e[31m"
YELLOW="\e[33m"
BLUE="\e[34m"
CYAN="\e[36m"
RESET="\e[0m"

# Log file path
log_file="/home/spencer/logs/rsync-backup.log"

# Define backup directories
HOME="/media/backups/home"
ETC="/media/backups/etc"
BOOT="/media/backups/boot"

# Function to log to file
log_to_file() {
    echo -e $CYAN"[$(date +'%I:%M:%S %p')] $BLUE$1$RESET" >> "$log_file"
}

# Capture start time
start_time=$(date +%s)

# Initialize log file with date and "start" indicator
echo -e $CYAN"[$(date +'%a %b %d %Y %I:%M %p')]$BLUE Backup script started$RESET\n" > "$log_file"

# Create backup directories if they don't exist
sudo mkdir -p "$HOME"
sudo mkdir -p "$ETC"
sudo mkdir -p "$BOOT"

# Run rsync to backup home directory excluding specified folders
log_to_file "Starting backup for $YELLOW/home"
sudo rsync -avh --delete --update \
    --exclude=.cache \
    --exclude=downloads \
    --exclude=desktop \
    --exclude=.mozilla \
    --exclude=.npm \
    --exclude=.pki \
    --exclude=node_modules \
    --exclude=lost+found \
    --exclude=.steam \
    --exclude=.steampath \
    --exclude=.steampid \
    --exclude=.wine \
    --exclude=.factorio \
    --exclude=games \
    --exclude=.local/share/Steam \
    --exclude=.local/share/vulkan \
    /home/ "$HOME" &>> "$log_file"

if [ $? -eq 0 ]; then
    log_to_file $YELLOW"/home$BLUE backup completed."
else
    log_to_file $YELLOW"/home$RED backup failed."
fi

# Add a blank line before starting the etc directory backup
echo "" >> "$log_file"

# Run rsync to backup etc directory including only specified folders
log_to_file "Starting backup for $YELLOW/etc"
sudo rsync -avh --delete --update \
    /etc/systemd/system \
    /etc/ly \
    /etc/fstab \
    "$ETC" &>> "$log_file"

if [ $? -eq 0 ]; then
    log_to_file $YELLOW"/etc$BLUE backup completed."
else
    log_to_file $YELLOW"/etc$RED backup failed."
fi

# Add a blank line before starting the boot directory backup
echo "" >> "$log_file"

# Run rsync to backup etc directory including only specified folders
log_to_file "Starting backup for $YELLOW/boot"
sudo rsync -avh --delete --update \
    /boot/loader \
    /boot/EFI \
    "$BOOT" &>> "$log_file"

if [ $? -eq 0 ]; then
    log_to_file $YELLOW"/boot$BLUE backup completed."
else
    log_to_file $YELLOW"/boot$RED backup failed."
fi

# Capture end time and calculate duration
end_time=$(date +%s)
execution_time=$((end_time - start_time))
formatted_time=$(date -u -d @"$execution_time" +%H:%M:%S)

# Log script finish with date and execution time
echo -e "\n$CYAN[$(date +'%a %b %d %Y %I:%M %p')]$BLUE Backup script finished" >> "$log_file"
echo -e "\n$CYAN[Duration] $BLUE$formatted_time$RESET" >> "$log_file"

# Inform user
echo "rsync-script finished successfully, check $log_file for more info."
