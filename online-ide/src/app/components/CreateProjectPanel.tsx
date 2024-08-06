import { createProject } from "@/lib/actions/project.action";
import { useSession } from "next-auth/react";
import { useState } from "react";

interface promps {
  setisBlur: React.Dispatch<React.SetStateAction<boolean>>;
  setIsCreatingProject: React.Dispatch<React.SetStateAction<boolean>>;
}

const langs = ["javascript", "python"];

function CreateProjectPanel({ setisBlur, setIsCreatingProject }: promps) {
  const { data: session } = useSession();
  const [image, setImage] = useState<string>("");
  const [projectName, setProjectName] = useState<string>("");
  const [desc, setDesc] = useState<string>("");
  const [lang, setLang] = useState<string>("Choose a language");
  const [imageError, setImageError] = useState<boolean>(false);
  const [projectNameError, setProjectNameError] = useState<boolean>(false);
  const [descError, setDescError] = useState<boolean>(false);
  const [langError, setLangError] = useState<boolean>(false);

  const handleExit = () => {
    setisBlur(false);
    setIsCreatingProject(false);
    setImage("");
    setProjectName("");
    setDesc("");
    setLang("Choose a language");
  };

  const handleCreate = async () => {
    console.log(image, projectName, desc, lang);
    const error1 =
      image === "" ||
      (!image.endsWith(".jpg") &&
        !image.endsWith(".jpeg") &&
        !image.endsWith(".png"));
    const error2 = projectName === "";
    const error3 = lang === "Choose a language";
    const error4 = desc === "";
    setImageError(error1);
    setProjectNameError(error2);
    setLangError(error3);
    setDescError(error4);
    console.log(error1, error2, error3, error4);
    if (!error1 && !error2 && !error3 && !error4 && session?.user?.email) {
      //create project
      try {
        const response = await fetch('/api/projects', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: projectName,
            desc: desc,
            lang: lang,
            owner: session.user.email,
            users: [session.user.email],
            image: image,
          }),
        });
        if (!response.ok) throw new Error('Failed to create project');
        handleExit();
      } catch (error) {
        console.error('Error creating project:', error);
      }
    }
  };
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
            className={`file-input file-input-bordered ${
              imageError ? "file-input-error" : ""
            } w-full font-mono font-bold text-whitetheme`}
            accept="image/*"
          />
        </label>
        <input
          type="text"
          placeholder="Project Name"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
          className={`input input-bordered w-[60%] ${
            projectNameError ? "input-error" : ""
          } font-mono font-bold`}
        />
        <select
          className={`select select-bordered ${
            langError ? "select-error" : ""
          } w-[60%]`}
          value={lang}
          onChange={(e) => setLang(e.target.value)}
        >
          <option disabled selected>
            Choose a language
          </option>
          {langs.map((lang) => (
            <option key={lang} value={lang}>
              {lang}
            </option>
          ))}
        </select>
        <textarea
          className={`textarea textarea-bordered flex-1 w-[60%] ${
            descError ? "textarea-error" : ""
          } resize-none font-mono font-bold`}
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
