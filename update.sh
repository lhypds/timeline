#!/bin/bash
# Check out every submodule at the commit this repo records, cloning any that
# are not there yet. Extra arguments are forwarded, so `./update.sh --remote`
# fetches and moves the submodules to the tip of their tracked branch instead.
set -e

cd "$(dirname "$0")"

exec git submodule update --init --recursive "$@"
