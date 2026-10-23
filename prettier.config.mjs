import * as astro from "prettier-plugin-astro";

/** @type {import("prettier").Config} */
export default {
  plugins: [astro],
  overrides: [
    {
      files: "*.astro",
      options: { parser: "astro" },
    },
  ],
};
