pnpm + wireit
=============

Experiment with pnpm + Wireit

## Development

Install:

```sh
$ npm install -g pnpm
$ pnpm install
```

Build:

```sh
# Run build across all packages.
$ pnpm run build

# Watch build in all packages
$ pnpm run build:watch
```

See some doggo info:

```sh
$ pnpm -r exec node lib/index.js
```

## Releases

We use [changesets](https://github.com/changesets/changesets) to create changes, add to workspace CHANGELOG.md files, and publish. We automate the actual release of this package, but here are some manual steps in case you need to out-of-band do this:

### Add a changeset

When you would like to add a changeset (which creates a file indicating the type of change), in your branch/PR issue this command:

```sh
$ pnpm changeset add
```

to produce an interactive menu. Navigate the packages with arrow keys and hit `<space>` to select 1+ packages. Hit `<return>` when done. Select semver versions for packages and add appropriate messages. From there, you'll get a summary to approve. After this, you'll see a new uncommitted file in `.changesets` like:

```sh
$ git status
# ....
Untracked files:
  (use "git add <file>..." to include in what will be committed)
	.changeset/flimsy-pandas-marry.md
```

Review the file, make any necessary adjustments, and commit it to source. When we eventually do a package release, the changeset notes and version will be incorporated!

### Make a version

When all of the changes and changesets are ready for a new version, issue the following wrapper command:

```sh
$ pnpm version
```

which should bump versions and write workspace CHANGELOG.md files ass appropriate.

### Publish

TODO HERE

```sh
# Test out
$ pnpm -r publish --dry-run

# Initial publish
$ pnpm -r publish --access=public --otp=<INSERT_OTP>

# Normal publish
$ pnpm -r publish --otp=<INSERT_OTP>
```
