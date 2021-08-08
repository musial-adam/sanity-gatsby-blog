import { MdAssignment as icon } from "react-icons/md";

export default {
  name: "project",
  type: "document",
  title: "Project",
  icon,
  fields: [
    {
      name: "project_title",
      type: "string",
      title: "Project Title",
      description: "Title should include technology used to build the project",
    },
    {
      name: "technology",
      type: "reference",
      title: "Technologies used for this project",
      to: [{ type: "technology" }],
    },
    {
      name: "tech",
      title: "Tech used",
      type: "array",
      of: [
        {
          type: "reference",
          to: { type: "technology" },
        },
      ],
    },
  ],
};
