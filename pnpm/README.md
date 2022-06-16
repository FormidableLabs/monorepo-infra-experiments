pnpm
====

Experiment with pure pnpm

## Development

Install:

```sh
$ npm install -g pnpm
$ pnpm install
```

Build:

```sh
$ pnpm run build
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
