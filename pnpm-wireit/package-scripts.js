/**
 * We're only using `nps` as a proxy for scripts in root `package.json` to
 * make them available within a workspace.
 */
const { scripts } = require("./package.json");

module.exports = { scripts };
