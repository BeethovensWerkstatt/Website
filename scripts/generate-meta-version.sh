#!/bin/sh

set -eu

OUTPUT_PATH="${1:-_data/version.json}"

metadata_from_git() {
  git "$@" 2>/dev/null || true
}

DATE="${META_VERSION_DATE:-$(date -u '+%Y-%m-%dT%H:%M:%SZ')}"
COMMIT_HASH="${META_VERSION_COMMIT_HASH:-${GITHUB_SHA:-$(metadata_from_git rev-parse --verify HEAD)}}"
BRANCH="${META_VERSION_BRANCH:-${GITHUB_HEAD_REF:-${GITHUB_REF_NAME:-$(metadata_from_git branch --show-current)}}}"

if [ -z "$COMMIT_HASH" ]; then
  echo "Unable to determine the repository commit hash." >&2
  exit 1
fi

if [ -z "$BRANCH" ]; then
  echo "Unable to determine the repository branch." >&2
  exit 1
fi

mkdir -p "$(dirname "$OUTPUT_PATH")"
TEMP_PATH="${OUTPUT_PATH}.tmp"

ruby -rjson -e '
  output_path, date, commit_hash, branch = ARGV
  File.write(
    output_path,
    JSON.pretty_generate({
      "date" => date,
      "commit" => commit_hash,
      "branch" => branch
    }) + "\n"
  )
' "$TEMP_PATH" "$DATE" "$COMMIT_HASH" "$BRANCH"

mv "$TEMP_PATH" "$OUTPUT_PATH"
