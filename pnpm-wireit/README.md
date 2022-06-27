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

## Publishing

```sh
# Test out
$ pnpm -r publish --dry-run

# Initial publish
$ pnpm -r publish --access=public --otp=<INSERT_OTP>

# Normal publish
$ pnpm -r publish --otp=<INSERT_OTP>
```
