import { welcome } from "@formidable/monorepo-tools-pnpm-nx-dogs-core";
import dogs from "@formidable/dogs";

const RUSTY = dogs.find(({ name }) => name === "Rusty");

welcome(RUSTY);
