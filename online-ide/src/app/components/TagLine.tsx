import { ReactNode } from "react";
import brackets from "./Brackets";

interface tagLinePromps {
  className?: string;
  children?: ReactNode;
}

const TagLine = ({ className, children }: tagLinePromps) => {
  return (
    <div className={`tagline flex items-center ${className || ""}`}>
      {brackets("left")}
      <div className="mx-3 text-slate-400">{children}</div>
      {brackets("right")}
    </div>
  );
};

export default TagLine;
