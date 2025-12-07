import type { CollectionConfig } from "payload";

export const Articles: CollectionConfig = {
  slug: "articles",
  fields: [
    {
      name: "title",
      type: "text",
    },
    {
      name: "description",
      type: "text",
    },
    {
      name: "content",
      type: "richText",
    },
    {
      name: "publishedAt",
      type: "date",
    },
    {
      name: "updatedAt",
      type: "date",
    },
    {
      name: "cover",
      type: "upload",
      relationTo: "media",
    },
  ],
};
