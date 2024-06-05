interface Promps {
  className?: string;
  id?: string;
  customPadding?: string;
  children?: React.ReactNode;
}

const Section = ({ className, id, customPadding, children }: Promps) => {
  return (
    <div
      id={id}
      className={`relative ${customPadding || `py-10 lg:py-16 xl:py-20 `} ${
        className || ""
      }`}
    >
      {children}
    </div>
  );
};

export default Section;
