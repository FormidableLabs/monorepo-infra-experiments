/**
 * We only use `nps` for scripts that we:
 * 1. define at the root of the monorepo
 * 2. that are meant to execute _within_ a workspace
 *
 * If you have an actual root task, define it in root `package.json:scripts`.
 */

// For publishing, use the core package's version.
const coreVersion = require("./packages/core/package.json").version;
if (!coreVersion) {
  throw new Error("Unable to read core version");
}

module.exports = {
  scripts: {
    "build:esm": "babel src --out-dir es --config-file ../../.babelrc.js --copy-files --extensions .tsx,.ts,.jsx,.js",
    "build:cjs": "BABEL_ENV=commonjs babel src --out-dir lib --config-file ../../.babelrc.js --copy-files --extensions .tsx,.ts,.jsx,.js",
    "clean": "rm -rf es lib",
    "publish:dry-run": `git tag -a v${coreVersion} -m \"Version ${coreVersion}\" && pnpm -r publish --access public`,
    "publish:dry-run": `echo git tag -a v${coreVersion} -m \"Version ${coreVersion}\" && pnpm -r publish --access public --dry-run`
  }
};
