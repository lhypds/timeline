#!/bin/bash
# Pull this repo, then check out the submodule at the commit the updated HEAD
# records, cloning it if it is not there yet. Extra arguments go to the
# submodule update, so `./update.sh --remote` moves it to the tip of its
# tracked branch instead of the recorded commit.
# Then pull public/__timeline__ to the tip of its branch (checking out the remote
# default branch first if HEAD is detached) and hand over to ./setup.sh, which
# refreshes the generated index.html and langs.js in every timeline folder.
set -e

cd "$(dirname "$0")"

APP=public/__timeline__

git pull
git submodule update --init --recursive "$@"

if [ -e "$APP/.git" ]; then
  branch="$(git -C "$APP" branch --show-current)"
  if [ -z "$branch" ]; then
    # Detached HEAD (e.g. right after submodule update): switch to the
    # remote default branch so pull has a branch to update.
    branch="$(git -C "$APP" symbolic-ref --short refs/remotes/origin/HEAD | sed 's|^origin/||')"
    git -C "$APP" checkout "$branch"
  fi
  echo "Pull: $APP($branch)"
  git -C "$APP" pull
else
  # Nothing to pull yet — ./setup.sh clones it below.
  echo "$APP is not checked out yet."
fi

./setup.sh
