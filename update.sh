#!/bin/bash
# Pull this repo, then check out every submodule at the commit the updated HEAD
# records, cloning any that are not there yet. Extra arguments go to the
# submodule update, so `./update.sh --remote` moves the submodules to the tip of
# their tracked branch instead of the recorded commit.
set -e

cd "$(dirname "$0")"

git pull
exec git submodule update --init --recursive "$@"
