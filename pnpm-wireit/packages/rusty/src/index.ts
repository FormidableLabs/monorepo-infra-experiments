import { welcome } from "@formidable/monorepo-tools-pnpm-wireit-dogs-core";
import dogs from "@formidable/dogs";

const RUSTY = dogs.find(({ name }) => name === "Rusty");

welcome(RUSTY);
// TODO: REMOVE extra comment