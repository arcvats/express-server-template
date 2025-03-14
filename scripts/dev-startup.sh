#!/bin/bash

# check if the DEBUG_MODE is set to true
if [ "$DEBUG_MODE" = "true" ]; then
  echo "STARTING SERVER WITH DEBUG MODE ENABLED"
  exec npm run debug
else
  exec npm run dev
fi