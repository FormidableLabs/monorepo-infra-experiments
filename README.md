[![Monorepo Infrastructure Experiments — Formidable, We build the modern web](https://raw.githubusercontent.com/FormidableLabs/monorepo-infra-experiments/main/monorepo-infra-experiments-Hero.png)](https://formidable.com/open-source/)

This project aims to try various monorepo tools with an eye towards:

- Dependency management
- Shared task execution across packages
- Publishing

## Experiments

- [PNPM](./pnpm)
- [PNPM + Wireit](./pnpm-wireit)

## Analysis

You can generate lots of extra source files to give the compilations more to work on with:

```sh
$ pnpm generate
```

... or use the Node.js script used by those commands.
