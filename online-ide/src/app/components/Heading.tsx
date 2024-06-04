import TagLine from "./TagLine";

interface headingPromps {
  className?: string;
  title?: string;
  tag?: string;
}

const Heading = ({ className, title, tag }: headingPromps) => {
  return (
    <div className={`${className} max-w-[50rem] mx-auto mb-12 lg:mb-20`}>
      {tag && <TagLine className="mb-4 justify-center">{tag}</TagLine>}
      {title && <h2 className="h2">{title}</h2>}
    </div>
  );
};

export default Heading;
