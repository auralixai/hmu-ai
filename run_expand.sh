#!/bin/bash
export GEMINI_API_KEY="AIzaSyC2Hyc_D8mAoNqwYzQ58zVEcZyfSHPbsQs"
cd /home/auralixai/.openclaw/workspace/hmu-ai

while true; do
  echo "Starting expand.js..."
  node expand.js
  EXIT_CODE=$?
  if [ $EXIT_CODE -eq 0 ]; then
    echo "Done!"
    break
  else
    echo "Script crashed. Sleeping for 5s then restarting..."
    sleep 5
  fi
done
