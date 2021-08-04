export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "610ad4734cdbe900cfbf27ed",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-omcp6w7z",
                  apiId: "be3f758b-60ce-49f2-a531-8d39e9abe9c7",
                },
                {
                  buildHookId: "610ad474ab1489009017408d",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-f1td4x6f",
                  apiId: "3e8bb37e-058c-4e10-98c2-c0abd3e92b3b",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/musial-adam/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-f1td4x6f.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
