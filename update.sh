#!/bin/bash
# Pull this repo, then check out every submodule at the commit the updated HEAD
# records, cloning any that are not there yet. Extra arguments go to the
# submodule update, so `./update.sh --remote` moves the submodules to the tip of
# their tracked branch instead of the recorded commit.
# Then cd into every git repo under public/ and git pull it to the tip of its
# branch (checking out the remote default branch first if HEAD is detached).
# Finally, copy everything from timelines/<name>/ into public/<name>/, replacing files.
set -e

cd "$(dirname "$0")"

git pull
git submodule update --init --recursive "$@"

for dir in public/*/; do
  [ -e "$dir.git" ] || continue
  branch="$(git -C "$dir" branch --show-current)"
  if [ -z "$branch" ]; then
    # Detached HEAD (e.g. right after submodule update): switch to the
    # remote default branch so pull has a branch to update.
    branch="$(git -C "$dir" symbolic-ref --short refs/remotes/origin/HEAD | sed 's|^origin/||')"
    git -C "$dir" checkout "$branch"
  fi
  echo "Pull: $dir($branch)"
  git -C "$dir" pull
done

for src in timelines/*/; do
  [ -d "$src" ] || continue
  name="$(basename "$src")"
  echo "Overlay: $src -> public/$name/"
  mkdir -p "public/$name"
  cp -R "$src". "public/$name"/
done
