import { welcome } from "@formidable/monorepo-tools-pnpm-dogs-core";
import dogs from "@formidable/dogs";

const BEAU = dogs.find(({ name }) => name === "Beau");

welcome(BEAU);
