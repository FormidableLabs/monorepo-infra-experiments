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

We use [changesets](https://github.com/changesets/changesets) to create changes, add to our CHANGELOG.md, and publish. We automate the actual release of this package, but here are some manual steps in case you need to out-of-band do this:

### Add a changeset

When you would like to add a changeset (which creates a file indicating the type of change), in your branch/PR issue this command:

```sh
$ pnpm changeset add
```

to produce an interactive menu of which packages to include in the change and appropriate messages / semver version.

TODO: HERE
- [ ] Add changeset
- [ ] Version
- [ ] Publish with pnpm

```sh
# Test out
$ pnpm -r publish --dry-run

# Initial publish
$ pnpm -r publish --access=public --otp=<INSERT_OTP>

# Normal publish
$ pnpm -r publish --otp=<INSERT_OTP>
```
