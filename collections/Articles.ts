import type { CollectionConfig } from "payload";

export const Articles: CollectionConfig = {
  slug: "articles",
  auth: true,
  fields: [
    {
      name: "title",
      type: "text",
    },
  ],
};
