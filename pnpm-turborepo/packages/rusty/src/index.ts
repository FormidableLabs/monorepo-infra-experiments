import { welcome } from "@formidable/monorepo-tools-pnpm-turborepo-dogs-core";
import dogs from "@formidable/dogs";

const RUSTY = dogs.find(({ name }) => name === "Rusty");

welcome(RUSTY);

// Sample comment change. Number 2.
