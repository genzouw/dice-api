import { createConfigForNuxt } from "@nuxt/eslint-config/flat";
import prettierConfig from "eslint-config-prettier";
import prettierPlugin from "eslint-plugin-prettier";

export default createConfigForNuxt({}).append(
  {
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      "prettier/prettier": "error",
    },
  },
  prettierConfig,
);
