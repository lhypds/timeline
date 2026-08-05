#!/bin/bash
# Run every public/ subfolder's setup.sh, if it has one, from inside that folder.
set -e

ROOT="$(cd "$(dirname "$0")" && pwd)"

found=0
failures=0

for dir in "$ROOT"/public/*/; do
  dir="${dir%/}"
  [ -f "$dir/setup.sh" ] || continue
  found=1

  printf "\n----\nSetup: %s\n" "$dir"
  if (cd "$dir" && bash setup.sh); then
    echo "OK: $dir"
  else
    echo "ERROR: setup.sh failed in $dir" >&2
    failures=$((failures + 1))
  fi
done

if [ "$found" -eq 0 ]; then
  echo "No setup.sh found in any subfolder."
  exit 0
fi

if [ $failures -gt 0 ]; then
  printf "\nFinished with %d failures.\n" "$failures" >&2
  exit 2
fi

printf "\nAll setups completed successfully.\n"
