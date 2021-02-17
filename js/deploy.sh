#!/bin/sh

# set web application in production mode
export NODE_ENV=production

# change working directory to the script directory
cd "$(dirname "$0")"

# go to client source
cd client

# transpile client source with babel
npm run build

# copy built source to server static source
cp -r dist ../server/src/views

# go to server source
cd ../server

# run server
npm run serve
