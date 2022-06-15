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
$ pnpm -r --filter='./packages/**' publish --dry-run

# Initial publish
$ pnpm -r --filter='./packages/**' publish --access=public

# Normal publish
$ pnpm -r --filter='./packages/**' publish
```
