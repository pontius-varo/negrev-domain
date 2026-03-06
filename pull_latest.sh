#!/usr/bin/env bash
set -euo pipefail

if ! git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
    echo "Error: this directory is not a git repository."
    exit 1
fi

if [[ -n "$(git status --porcelain)" ]]; then
    echo "Error: working tree has uncommitted changes. Commit or stash first."
    exit 1
fi

branch="$(git rev-parse --abbrev-ref HEAD)"
if [[ "$branch" == "HEAD" ]]; then
    echo "Error: detached HEAD state. Checkout a branch first."
    exit 1
fi

upstream="$(git rev-parse --abbrev-ref --symbolic-full-name '@{u}' 2>/dev/null || true)"

if [[ -n "$upstream" ]]; then
    remote="${upstream%%/*}"
    remote_branch="${upstream#*/}"
else
    remote="origin"
    remote_branch="$branch"
fi

echo "Fetching latest refs from '$remote'..."
git fetch --prune "$remote"

echo "Pulling latest changes for '$branch' from '$remote/$remote_branch'..."
git pull --ff-only "$remote" "$remote_branch"

echo "Done. Local branch '$branch' is up to date."
