import { FaReact } from "react-icons/fa";

export default {
  name: "technology",
  type: "document",
  title: "Technology",
  icon: FaReact,
  fields: [
    {
      name: "name",
      type: "string",
      title: "Technology name",
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "name",
        maxLength: 96,
      },
    },
    {
      name: "techLogo",
      type: "image",
      title: "Tech Logo",
    },
  ],
};

// import { MdAssignment as icon } from "react-icons/md";

// export default {
//   name: "project",
//   type: "document",
//   title: "Project",
//   icon,
//   fields: [
//     {
//       name: "project_title",
//       type: "string",
//       title: "Project Title",
//       description: "Title should include technology used to build the project",
//     },
//   ],
// };
