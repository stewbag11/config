#!/bin/bash

# ANSI Colors
RED="\e[31m"
YELLOW="\e[33m"
BLUE="\e[34m"
CYAN="\e[36m"
RESET="\e[0m"

# Log file path
log_file="/home/spencer/logs/git-auto.log"

# Change to repository directories
repos=("/home/spencer/.config")

# Function to log to file
log_to_file() {
  echo -e "$CYAN[$(date +'%I:%M:%S %p')] $RESET$1" >> "$log_file"
}

# Initialize log file with date and "start" indicator
echo -e "$CYAN[$(date +'%a %b %d %Y %I:%M %p')]$BLUE Auto Git script started$RESET\n" > "$log_file"

# Start time for calculating duration
start_time=$(date +%s)

# Loop through each repository
for repo in "${repos[@]}"; do
  log_to_file "$BLUE Processing repository: $YELLOW$repo$RESET"
  cd "$repo" || {
    log_to_file "$RED Error: Cannot change to directory $YELLOW$repo$RESET"
    continue
  }

  # Capture status of changes
  git_status=$(git status --porcelain)

  # Log git status output only if there are changes
  if [ -n "$git_status" ]; then
    log_to_file "$BLUE Git status output:$RESET"
    log_to_file "$git_status"
  fi

  # Commit changes if there are any
  if [ -n "$git_status" ]; then
    commit_message="Automatic commit on: $(date +'%a %b %d %Y %I:%M %p')"
    log_to_file "$BLUE Commit message: $YELLOW$commit_message$RESET"

    # Stage all changes
    git add -A

    # Commit changes
    commit_output=$(git commit -m "$commit_message" 2>&1)
    log_to_file "$BLUE Commit output:$RESET"
    log_to_file "$commit_output"

    # Detect the current branch dynamically
    current_branch=$(git rev-parse --abbrev-ref HEAD)
    push_output=$(git push origin "$current_branch" 2>&1)
    log_to_file "$BLUE Push output:$RESET"
    log_to_file "$push_output"

    log_to_file "$YELLOW Changes committed and pushed to remote.$RESET"
  else
    log_to_file "$YELLOW No changes to commit in $RESET$repo"
  fi

done

# Capture end time and calculate duration
end_time=$(date +%s)
execution_time=$((end_time - start_time))

# Handle time formatting for macOS compatibility
if [[ "$OSTYPE" == "darwin"* ]]; then
  formatted_time=$(date -u -r "$execution_time" +%H:%M:%S)
else
  formatted_time=$(date -u -d @"$execution_time" +%H:%M:%S)
fi

# Log script finish with date and execution time
echo -e "$CYAN[$(date +'%a %b %d %Y %I:%M %p')]$BLUE Auto Git script finished$RESET" >> "$log_file"
echo -e "\n$CYAN[Duration] $BLUE$formatted_time$RESET" >> "$log_file"

# Inform user
echo "git-script finished successfully, check $log_file for more info."
