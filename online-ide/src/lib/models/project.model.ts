import mongoose from "mongoose";

const projectScheme = new mongoose.Schema({
    name: { type: String, required: true},
    desc: { type: String, required: true},
    lang: { type: String, required: true},
    owner: { type: String },
    users: [{ type: String }],
    image: { type: String }
});

const Project = mongoose.models.Project || mongoose.model("Project", projectScheme);

export default Project