#!/usr/bin/env bash
# Loads nvm when the terminal is non-login (common in Cursor), then starts Vite.
set -euo pipefail
ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT"

export NVM_DIR="${NVM_DIR:-$HOME/.nvm}"
if [[ -s "$NVM_DIR/nvm.sh" ]]; then
  # shellcheck source=/dev/null
  source "$NVM_DIR/nvm.sh"
fi
export PATH="/opt/homebrew/bin:/usr/local/bin:$PATH"

if ! command -v node &>/dev/null; then
  echo "Node.js not found in PATH."
  echo "Install Node from https://nodejs.org or load nvm (https://github.com/nvm-sh/nvm)."
  exit 1
fi

exec node "$ROOT/scripts/dev.mjs" "$@"
