interface promps {
  setisBlur: React.Dispatch<React.SetStateAction<boolean>>;
  setIsCreatingProject: React.Dispatch<React.SetStateAction<boolean>>;
}

function CreateProjectPanel({ setisBlur, setIsCreatingProject }: promps) {
  const handleExit = () => {
    setisBlur(false);
    setIsCreatingProject(false);
  };
  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-2xl shadow-2xl bg-blacktheme w-[35%] h-[90%] z-10">
      <div className="text-center text-whitetheme font-mono font-bold mt-10 text-4xl">
        Create New Project
      </div>
      <div className="flex flex-col gap-5 mt-10 items-center justify-center">
        <label className="w-[60%]">
          <div className="label w-full">
            <span className="label-text font-mono font-bold">
              Pick a project image
            </span>
          </div>
          <input
            type="file"
            className="file-input file-input-bordered w-full font-mono font-bold text-whitetheme"
          />
        </label>
        <input
          type="text"
          placeholder="Project Name"
          className="input input-bordered w-[60%] font-mono font-bold"
        />
        <input
          type="text"
          placeholder="Project Language"
          className="input input-bordered w-[60%] font-mono font-bold"
        />
        <textarea
          className="textarea textarea-bordered w-[60%] min-h-[20rem] max-h-[20rem] font-mono font-bold"
          placeholder="Project Description"
        ></textarea>
      </div>
      <div className="flex justify-center items-center gap-10 mt-10 ">
        <button
          onClick={handleExit}
          className="bg-middletheme w-[27%] h-10 rounded-lg text-whitetheme font-mono font-bold"
        >
          Save
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
