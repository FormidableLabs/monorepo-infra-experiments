"use strict";

/**
 * Generate random files to make transpilation take longer.
 */
const fs = require("fs").promises;
const path = require("path");
const log = (...args) => console.log(...args); // eslint-disable-line no-console
const error = (...args) => console.error(...args); // eslint-disable-line no-console

// ============================================================================
// Generation
// ============================================================================

// Directory to place files
const GEN_DIR = "gen";
const fileName = ({ name, i }) => `${name}-${i}.tsx`;
const fileTmpl = ({ name, i }) => `
const NAME = "${name}";
const NUM = ${i};

const ${name}${i}Element = () => (<div>Hello, {NAME}! You're number {NUM}</div>);
export ${name}${i}Element;
`;

// ============================================================================
// Actions
// ============================================================================
const USAGE = `
Usage: node ./scripts/generate-files.js

Options:
  --pkgs, -p      Path to monorepo packages     [string]
  --num, -n       Number of files to generate   [number]
  --dry-run, -d   Show what would be generated  [boolean]
  --help, -h      Show help                     [boolean]

Examples:
  $ node ./scripts/generate-files.js --pkgs pnpm/packages --num 10
`.trim();

const help = async () => { log(USAGE); };
const generate = async ({ pkgsPath, pkgsDirs, numFiles, dryRun }) => {
  const files = [];
  for (const name of pkgsDirs) {
    for (let i = 0; i < numFiles; i++) {
      files.push({
        path: path.join(pkgsPath, name, "src", GEN_DIR, fileName({ name, i })),
        code: fileTmpl({ name, i })
      });
    }
  }

  log("TODO IMPLEMENT", { pkgsDirs, numFiles, dryRun, files });
};

// ============================================================================
// Configuration
// ============================================================================
// Get action or help / version name
const getAction = (args) => {
  // Return actions in priority order.
  if (args.includes("--help") || args.includes("-h")) { return help; }

  // Default.
  return generate;
};

// Get options for actions.
const getOptions = (args) => ({
  pkgsPath: (args.find((_, i) => ["--pkgs", "-p"].includes(args[i - 1])) || "").trim(),
  numFiles: parseInt(args.find((_, i) => ["--num", "-n"].includes(args[i - 1])) || 0),
  dryRun: args.includes("--dry-run") || args.includes("-d")
});

const validateOptions = async ({ pkgsPath, numFiles, dryRun }) => {
  if (!pkgsPath) {
    throw new Error("Must specify path to packages directory");
  }
  pkgsPath = path.resolve(pkgsPath);
  const pkgsDirs = await fs.readdir(pkgsPath);

  if (!numFiles || numFiles < 1) {
    throw new Error("Must specify positive number of files to generate");
  }

  return {
    pkgsPath,
    pkgsDirs,
    numFiles,
    dryRun
  };
};

// ============================================================================
// Script
// ============================================================================
const cli = async ({ args = [] } = {}) => {
  const opts = await validateOptions(getOptions(args));
  const action = getAction(args);

  await action(opts);
};

if (require.main === module) {
  cli({
    args: process.argv.slice(2) // eslint-disable-line no-magic-numbers
  }).catch((err) => {
    error(err);
    process.exit(1); // eslint-disable-line no-process-exit
  });
}
