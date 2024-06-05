import TagLine from "./TagLine";

interface headingPromps {
  className?: string;
  title?: string;
  tag?: string;
  big?: boolean;
  underline?: boolean;
}

const Heading = ({ className, title, tag, big, underline }: headingPromps) => {
  return (
    <div className={`${className} max-w-[50rem] mx-auto mb-12 lg:mb-20`}>
      {tag && <TagLine className="mb-4 justify-center">{tag}</TagLine>}
      {title && (
        <h2
          className={`${big ? "h1" : "h2"} ${
            underline ? "border-b-8 border-blacktheme" : ""
          }`}
        >
          {title}
        </h2>
      )}
    </div>
  );
};

export default Heading;
