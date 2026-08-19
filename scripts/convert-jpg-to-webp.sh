#!/usr/bin/env zsh
set -euo pipefail

QUALITY="${1:-82}"
ROOT_DIR="${2:-src/img}"

if ! command -v cwebp >/dev/null 2>&1; then
  echo "cwebp is required. Install it with: brew install webp" >&2
  exit 1
fi

converted=0
skipped=0

while IFS= read -r image_path; do
  webp_path="${image_path%.*}.webp"

  if [[ -f "$webp_path" && "$webp_path" -nt "$image_path" ]]; then
    skipped=$((skipped + 1))
    continue
  fi

  cwebp -quiet -q "$QUALITY" "$image_path" -o "$webp_path"
  converted=$((converted + 1))
done < <(find "$ROOT_DIR" -type f \( -iname '*.jpg' -o -iname '*.jpeg' -o -iname '*.png' \) | sort)

echo "Converted: $converted"
echo "Skipped: $skipped"
