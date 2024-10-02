import mongoose, { model, models } from "mongoose";

const ProjectSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide Project details"],
    },
    image: {
      type: String,
    },
    description: {
      type: String,
    },
    preview_link: {
      type: String,
    },
    github_link: {
      type: String,
    }
  },
  { timestamps: true }
);

const Project = models.Project || model("Project", ProjectSchema);
export default Project;
