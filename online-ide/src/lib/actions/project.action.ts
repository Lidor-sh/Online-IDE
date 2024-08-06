"use server"

import { StaticImageData } from "next/image"
import Project from "../models/project.model"
import { connectToDB } from "../mogoose"

export interface projectParams {
    id?: string,
    data: {
        name: string,
        desc: string,
        lang: string,
        owner: string,
        users: string[],
        image: string | StaticImageData
    }
}

export async function createProject({
    data
}: projectParams) : Promise<void> {
    console.log(data);
    connectToDB();
    console.log("Connected to MongoDB");
    try {
        const newProject = new Project({
            name: data.name,
            desc: data.desc,
            lang: data.lang,
            owner: data.owner,
            users: data.users,
            image: data.image
          });
        console.log("New project:", newProject);
        await newProject.save();
        console.log("Project created with ID:", newProject._id);
        return newProject;
    } catch (err : any) {
        console.error("Error in creating project:", err);
        throw err;
    }
}

export async function updateProjectById({
    id,
    data
}: projectParams) : Promise<void> {
    connectToDB();
    try {
       const updatedProject = await Project.findByIdAndUpdate(id, data, { new: true });
       if (!updatedProject) {
            throw new Error("Project not found");
       }
       console.log("Updated project", updatedProject);
       return updatedProject;
    } catch (err: any) {
        console.error("Error in updating project:" , err);
        throw err;
    }
}

export async function getProjectById(id:string){
    connectToDB()
    try {
        const project = await Project.findById(id);
        if (!project){
            throw new Error("Project not found");
        }
        return project;
    } catch (err: any) {
        console.error("Error in fetching project by id:", err);
        throw err;
    }
}

export async function getProjectsByOwner(owner : string) {
    connectToDB();
    try {
        const projects = await Project.find({owner});
        return projects;
    } catch (err) {
        console.error("Error in fetching projects by id:", err);
        throw err;
    }
}

export async function getProjectsByUser(user : string){
    connectToDB();
    try {
        const projects = await Project.find({users: user, owner: { $ne: user}});
        return projects;
    } catch (err) {
        console.error("Error in fetching projects by user:", err);
        throw err;
    }
}