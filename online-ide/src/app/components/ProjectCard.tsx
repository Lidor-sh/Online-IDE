import Image, { StaticImageData } from "next/image";
import { notificationImages } from "../constants/Hero";

interface cardProps {
  image?: string | StaticImageData;
  lang?: string;
  projectName?: string;
  desc?: string;
  numOfContributors?: number;
}

const langBg: Record<string, string> = {
  python: "bg-langbg-python",
  javascript: "bg-langbg-javascript",
};

const langText: Record<string, string> = {
  python: "text-langtext-python",
  javascript: "text-langtext-javascript",
};

const ProjectCard = ({
  image,
  lang,
  projectName,
  desc,
  numOfContributors,
}: cardProps) => {
  if (image && lang && projectName && desc && numOfContributors) {
    return (
      <div className="flex flex-col bg-blacktheme w-[380px] h-[196px] rounded-[12px]">
        <div className="pt-[0.5rem] pl-5">
          <h5 className="h5 text-[25px] font-mono font-bold text-whitetheme">
            {projectName}
          </h5>
        </div>
        <p className="pl-5 pr-16 mt-1 font-mono text-[16px] font-bold text-desctext line-clamp-3">
          {desc}
        </p>
        <div className="flex justify-between mt-3 px-5 items-end">
          <div className="flex gap-x-4 items-end">
            <Image
              src={image}
              width={50}
              height={50}
              alt="Project image"
              className="rounded-[15px]"
            />
            <div
              className={`${langBg[lang]} w-[100px] h-[20px] text-center rounded-[20px] mb-2`}
            >
              <p
                className={`${langText[lang]} font-mono font-bold text-[12px] bottom-0 text-langtext`}
              >
                {lang}
              </p>
            </div>
          </div>
          <div>
            <ul className="flex mb-1">
              {notificationImages.map((item, index) => (
                <li
                  className={`relative w-8 h-8 border-2 border-blacktheme rounded-full overflow-hidden ${
                    index > 0 ? "-ml-4" : ""
                  }`}
                  key={index}
                >
                  <Image
                    src={item}
                    className="w-full"
                    width={40}
                    height={40}
                    alt={`icon-${index}`}
                  />
                </li>
              ))}
              {numOfContributors > 3 && (
                <li
                  className={`flex items-center justify-center relative w-8 h-8 border-2 border-blacktheme bg-contribbg text-center rounded-full overflow-hidden -ml-4`}
                >
                  <p className="text-contribtext font-bold font-mono text-[13px] ">
                    +{numOfContributors - 3}
                  </p>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex justify-center items-center shadow-md border-[3px] border-dotted border-contribtext bg-transparent w-[380px] h-[196px] rounded-[12px]">
        <div className="flex flex-col justify-center items-center">
          <div className="flex justify-center items-center rounded-full border-[3px] w-[66px] h-[66px] border-dotted border-contribtext ">
            <p className="text-contribtext font-mono text-[40px] text-center mb-1">
              +
            </p>
          </div>
          <p className="font-mono text-contribtext font-bold text-[16px] mt-1">
            Create new project
          </p>
        </div>
      </div>
    );
  }
};

export default ProjectCard;
