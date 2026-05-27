import { createConfigForNuxt } from "@nuxt/eslint-config/flat";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

export default createConfigForNuxt({}).append(eslintPluginPrettierRecommended);
