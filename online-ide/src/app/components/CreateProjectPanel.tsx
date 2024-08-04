interface promps {
    setisBlur: React.Dispatch<React.SetStateAction<boolean>>
    setIsCreatingProject: React.Dispatch<React.SetStateAction<boolean>>
}

function CreateProjectPanel({setisBlur, setIsCreatingProject} : promps) {

    const handleExit = () => {
        setisBlur(false);
        setIsCreatingProject(false);
    }
  return (
    <div className="absolute w-full h-full">CreateProjectPanel
        <button onClick={handleExit}>Exit</button>
    </div>
  )
}

export default CreateProjectPanel