/**
 * We generally use `nps` for scripts that we:
 * 1. define at the root of the monorepo
 * 2. that are meant to execute _within_ a workspace
 *
 * ... or ...
 *
 * - That could use a little JS magic that we don't want to write a full
 *   node script for 😂
 *
 * For more cases, if you have an actual root task, define it in root
 * `package.json:scripts`.
 */

// For publishing, use the core package's version.
const coreVersion = require("./packages/core/package.json").version;
if (!coreVersion) {
  throw new Error("Unable to read core version");
}
const coreTag = `v${coreVersion}`;

module.exports = {
  scripts: {
    // Package tasks.
    "build:esm": "babel src --out-dir es --config-file ../../.babelrc.js --copy-files --extensions .tsx,.ts,.jsx,.js",
    "build:cjs": "BABEL_ENV=commonjs babel src --out-dir lib --config-file ../../.babelrc.js --copy-files --extensions .tsx,.ts,.jsx,.js",
    "clean": "rm -rf es lib",

    // Root tasks.
    // Try to find an existing tag (from previous attempts, etc.), and if not, create one.
    "git:tag": `git show-ref ${coreTag} || git tag -a ${coreTag} -m \"Version ${coreVersion}\"`
  }
};
