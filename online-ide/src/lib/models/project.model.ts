import mongoose from "mongoose";

const projectScheme = new mongoose.Schema({
    name: { type: String, require: true},
    desc: { type: String, require: true},
    lang: { type: String, require: true},
    owner: { type: String },
    users: [{ type: String }],
    image: { type: String }
});

const Project = mongoose.models.Project || mongoose.model("Project", projectScheme);

export default Project