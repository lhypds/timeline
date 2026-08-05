#!/bin/bash
# Pull this repo, then check out every submodule at the commit the updated HEAD
# records, cloning any that are not there yet. Extra arguments go to the
# submodule update, so `./update.sh --remote` moves the submodules to the tip of
# their tracked branch instead of the recorded commit.
# Finally, copy everything from timelines/<name>/ into <name>/, replacing files.
set -e

cd "$(dirname "$0")"

git pull
git submodule update --init --recursive "$@"

for src in timelines/*/; do
  [ -d "$src" ] || continue
  name="$(basename "$src")"
  echo "Overlay: $src -> $name/"
  mkdir -p "$name"
  cp -R "$src". "$name"/
done
