import { defineConfig } from "orval";

export default defineConfig({
  pets: {
    output: {
      mode: "tags-split",
      target: "api/requests",
      schemas: "api/models",
      client: "fetch",
      mock: true,
      prettier: true,
      override: {
        mutator: {
          path: "./custom-fetch.ts",
          name: "customFetch",
        },
      },
    },
    input: {
      target: "https://pet-family-api.onrender.com/swagger/v1/swagger.json",
    },

  },
});
