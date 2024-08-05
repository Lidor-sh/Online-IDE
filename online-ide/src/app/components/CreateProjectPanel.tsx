import { log } from "console";
import { set } from "mongoose";
import { useState } from "react";

interface promps {
  setisBlur: React.Dispatch<React.SetStateAction<boolean>>;
  setIsCreatingProject: React.Dispatch<React.SetStateAction<boolean>>;
}

function CreateProjectPanel({ setisBlur, setIsCreatingProject }: promps) {
  const [image, setImage] = useState<string>("");
  const [projectName, setProjectName] = useState<string>("");
  const [desc, setDesc] = useState<string>("");
  const [lang, setLang] = useState<string>("");
  const [imageError, setImageError] = useState<boolean>(false);
  const [projectNameError, setProjectNameError] = useState<boolean>(false);
  const [descError, setDescError] = useState<boolean>(false);
  const [langError, setLangError] = useState<boolean>(false);

  const handleExit = () => {
    setisBlur(false);
    setIsCreatingProject(false);
  };

  const handleCreate = () => {
    console.log("Create");
    console.log(image === "", projectName, desc, lang);
    setImageError(image === "" || !image.endsWith(".jpg") || !image.endsWith(".jpeg") || !image.endsWith(".png"))
    setProjectNameError(projectName === "")
    setDescError(desc === "")
    setLangError(lang === "")
    console.log(imageError, projectNameError, descError, langError);
    if (!imageError && !projectNameError && !descError && !langError) {
      //create project
      handleExit();
    }
  }
  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-2xl shadow-2xl bg-blacktheme w-[35%] h-[90%] z-10">
      <div className="text-center text-whitetheme font-mono font-bold mt-10 text-4xl">
        Create New Project
      </div>
      <div className="flex flex-col gap-5 mt-10 h-[67%] items-center justify-center">
        <label className="w-[60%]">
          <div className="label w-full">
            <span className="label-text font-mono font-bold">
              Pick a project image
            </span>
          </div>
          <input
            type="file"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="file-input file-input-bordered w-full font-mono font-bold text-whitetheme"
            accept="image/*"
          />
        </label>
        <input
          type="text"
          placeholder="Project Name"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
          className="input input-bordered w-[60%] font-mono font-bold"
        />
        <input
          type="text"
          placeholder="Project Language"
          value={lang}
          onChange={(e) => setLang(e.target.value)}
          className="input input-bordered w-[60%] font-mono font-bold"
        />
        <textarea
          className="textarea textarea-bordered flex-1 w-[60%] resize-none font-mono font-bold"
          placeholder="Project Description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        ></textarea>
      </div>
      <div className="flex justify-center items-center gap-10 mt-10 ">
        <button
          onClick={handleCreate}
          className="bg-middletheme w-[27%] h-10 rounded-lg text-whitetheme font-mono font-bold"
        >
          Create
        </button>
        <button
          onClick={handleExit}
          className="bg-middletheme w-[27%] h-10 rounded-lg text-whitetheme font-mono font-bold"
        >
          Exit
        </button>
      </div>
    </div>
  );
}

export default CreateProjectPanel;
