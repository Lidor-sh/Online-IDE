import Image from "next/image";
import { socials } from "../constants/Footer";
import Section from "./Section";

function Footer() {
  return (
    <Section className="!px-0 !py-3 bg-blacktheme">
      <hr />
      <div className="container-footer mb-10 lg:-mt-10 bg-blacktheme flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
        <p className="caption text-gray-400">
          © {new Date().getFullYear()}. All rights reserved.
        </p>

        <ul className="flex gap-5 flex-wrap">
          {socials.map((item) => (
            <a
              href={item.url}
              key={item.id}
              target="_black"
              className="flex items-center justify-center size-10 bg-gray-900 rounded-full transition-colors hover:bg-slate-700"
            >
              <Image
                src={item.iconUrl}
                alt={item.title}
                width={16}
                height={16}
              />
            </a>
          ))}
        </ul>
      </div>
    </Section>
  );
}

export default Footer;
