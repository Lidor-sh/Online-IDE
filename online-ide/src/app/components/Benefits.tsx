import Image from "next/image";
import { benefits } from "../constants/Benefits";
import Heading from "./Heading";
import Section from "./Section";
import Wave from "./Wave";
import Arrow from "./Arrow";
import { GradientLight } from "./design/Benefits";
import ClipPath from "./ClipPath";
import { useRouter } from "next/navigation";

const Benefits = () => {
  const router = useRouter();

  return (
    <Section className="bg-blacktheme" id="features">
      <Wave className="z-3" />
      <div className="container-benefits mt-[6rem] relative z-2 bg-blacktheme">
        <Heading
          className="text-whitetheme font-mono md:max-w-md lg:max-w-2xl justify-center text-center"
          title="Experience the Future of Coding Together"
        />
        <div className="flex flex-wrap justify-center gap-10 mb-10">
          {benefits.map((item) => (
            <div
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
              style={{
                backgroundImage: `url(${item.backgroundUrl.src})`,
              }}
              key={item.id}
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                <h5 className="h5 mb-5 font-mono text-whitetheme">
                  {item.title}
                </h5>
                <p className="body-2 font-mono mb-6 text-gray-400">
                  {item.text}
                </p>
                <div className="flex items-center mt-auto">
                  <Image
                    src={item.iconUrl}
                    width={48}
                    height={48}
                    alt={item.title}
                  />
                  <div
                    className="flex justify-center items-center text-whitetheme ml-auto font-mono text-xs font-bold tracking-wider cursor-pointer pointer-events-auto"
                    onClick={() => router.push("Login?msg=login")}
                  >
                    <p>Explore more</p>
                    <Arrow />
                  </div>
                </div>
              </div>
              {item.light && <GradientLight />}

              <div
                className="absolute inset-0.5 bg-blacktheme"
                style={{ clipPath: "url(#benefits)" }}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                  {item.imageUrl && (
                    <Image
                      src={item.imageUrl}
                      width={380}
                      height={362}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>
              <ClipPath />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Benefits;
