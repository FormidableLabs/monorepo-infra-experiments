import { welcome } from "@formidable/monorepo-tools-pnpm-wireit-dogs-core";
import dogs from "@formidable/dogs";

const MILO = dogs.find(({ name }) => name === "Milo");

welcome(MILO);
