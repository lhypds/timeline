#!/bin/bash
# Pull the latest changes in every timeline repo by running gift's
# recursively-pull-repos function over this folder. Extra arguments
# (e.g. -n/--dry-run) are forwarded to it.
set -e

ROOT="$(cd "$(dirname "$0")" && pwd)"

if ! command -v gift >/dev/null 2>&1; then
  echo "Error: gift is not installed (see code/gift install.sh)." >&2
  exit 1
fi

exec gift recursively-pull-repos --dir="$ROOT" "$@"
