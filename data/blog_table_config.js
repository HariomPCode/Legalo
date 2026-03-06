const BLOG_TABLE_CONFIG = {
  api: "/blog",

  title: "Blog Posts",

  route: "blog",

  columns: [
    {
      label: "Title",
      field: "title",
      type: "text",
      filter: true,
    },

    {
      label: "Slug",
      field: "slug",
      type: "text",
      filter: true,
    },

    {
      label: "Category",
      field: "category",
      type: "text",
      filter: true,
    },

    {
      label: "Author",
      field: "author.name",
      type: "text",
      filter: true,
    },

    {
      label: "Published Date",
      field: "publishedAt",
      type: "Date",
      filter: true,
    },

    {
      label: "Reading Time",
      field: "readingTime",
      type: "text",
      filter: false,
    },

    {
      label: "Featured",
      field: "featured",
      type: "boolean",
      filter: true,
    },

    {
      label: "Status",
      field: "status",
      type: "dropdown",
      options: ["draft", "published"],
      filter: true,
    },
  ],

  actions: {
    create: true,
    edit: true,
    delete: true,
  },
};

export default BLOG_TABLE_CONFIG;
