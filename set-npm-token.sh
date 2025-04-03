#!/bin/bash

# Define your .npmrc path (you can change this if you want a specific location)
NPMRC_PATH="$HOME/.npmrc"

# Fetch GitHub Token from 1Password (replace with your 1Password path to token)
GITHUB_TOKEN=$(op read "op://Personal/GitHub Token for AxUI/credential")

# Check if the token is retrieved successfully
if [ -z "$GITHUB_TOKEN" ]; then
  echo "Error: GitHub token not found in 1Password."
  exit 1
fi

# Update .npmrc file with the GitHub token
echo "//npm.pkg.github.com/:_authToken=$GITHUB_TOKEN" > $NPMRC_PATH
echo "@axlabs:registry=https://npm.pkg.github.com" >> $NPMRC_PATH

echo ".npmrc file updated with GitHub token."

# Note: Make sure you have the 1Password CLI installed and authenticated.

# Run using the commands:
# chmod +x set-npm-token.sh
# ./set-npm-token.sh