#!/bin/bash
set -e

# Run command with node if the first argument contains a "-" or is not a system command. The last
# part inside the "{}" is a workaround for the following bug in ash/dash:
# https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=874264
if [ "${1#-}" != "${1}" ] || [ -z "$(command -v "${1}")" ] || { [ -f "${1}" ] && ! [ -x "${1}" ]; }; then
  set -- node "$@"
fi

exec "$@"
# Copy development environment file if not existing
if [[ ! -f /var/www/app/.env && -f /var/www/app/.env.example ]]; then
  cp /var/www/app/.env.example /var/www/app/.env
fi

vendorDir=/var/www/app/node_modules
# Install composer if it not existing
if [[ ! -d $vendorDir ]]; then
  yarn install
fi
