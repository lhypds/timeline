#!/bin/bash
# Write the two generated files into every timeline folder under public/: a copy
# of the app's stub.html as index.html, and a langs.js listing the languages that
# folder has data for. Everything else in those folders — config.js and data/ —
# is tracked in this repo and needs no build step.
#
# ./update.sh runs this after pulling. Run it on its own after adding a timeline
# or a language, or when the app's stub.html changes.
set -e

cd "$(dirname "$0")"

APP=public/__timeline__

if [ ! -f "$APP/stub.html" ]; then
  echo "error: $APP/stub.html is missing — check out https://github.com/gcc3/timeline there." >&2
  exit 1
fi

# A timeline is any folder under public/ with a data/ in it
dirs=""
for dir in public/*/; do
  dir="${dir%/}"
  [ "$dir" = "$APP" ] && continue
  if [ ! -d "$dir/data" ]; then
    echo "skip: $dir has no data/" >&2
    continue
  fi
  echo "Timeline: $dir"
  cp "$APP/stub.html" "$dir/index.html"
  dirs="$dirs $dir"
done

if [ -z "$dirs" ]; then
  echo "error: no timeline folders under public/." >&2
  exit 1
fi

# The app owns the langs.js format, so let its setup.sh write them. Given
# directories it works on those and does not cd, so these paths stay relative to
# this repo's root.
bash "$APP/setup.sh" $dirs
