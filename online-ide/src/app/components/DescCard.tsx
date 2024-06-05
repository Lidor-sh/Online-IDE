import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

interface cardProps {
  src: string | StaticImport;
  alt: string;
  title: string;
  text: string;
  className?: string;
}

const DescCard = ({ src, alt, title, text, className }: cardProps) => {
  return (
    <div
      className={`card card-compact w-[30rem] bg-base-300 shadow-xl ${
        className || ""
      }`}
    >
      <figure>
        <Image src={src} alt={alt} />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-whitetheme font-mono">{title}</h2>
        <p className="text-whitetheme font-mono">{text}</p>
      </div>
    </div>
  );
};

export default DescCard;
