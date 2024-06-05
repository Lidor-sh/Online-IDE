import Image from "next/image";
import { pricing } from "../constants/Pricing";
import checkIcon from "../images/check.svg";

const PricingList = () => {
  return (
    <div className="flex gap-[1rem] max-lg:flex-wrap">
      {pricing.map((item, index) => (
        <div
          key={index}
          className="w-[19rem] max-lg:w-full h-auto px-6 bg-blacktheme border border-slate-600 rounded-[2rem] lg:w-full py-8"
        >
          <h4 className={`h4 mb-4 text-bold font-mono ${item.titleColor}`}>
            {item.title}
          </h4>
          <p className="body-2 min-h-[4rem] text-slate-400 font-mono">
            {item.description}
          </p>
          <div
            className={`flex items-center h-[5.5rem] font-mono ${
              item.price ? "" : "justify-center"
            }`}
          >
            {item.price ? (
              <>
                <div className="h5 text-whitetheme">$</div>
                <div className="text-[3rem] leading-none font-bold text-whitetheme">
                  {item.price}
                </div>
              </>
            ) : (
              <div className="text-[1.5rem] leading-none font-bold text-whitetheme">
                Contact Our Sales Team
              </div>
            )}
          </div>
          <button className="bg-middletheme p-4 rounded-xl text-whitetheme font-mono font-bold w-full mb-6">
            {/* TODO: add href for this button: price ? pricing : contact us*/}
            {item.price ? "Get Started" : "Contact Us"}
          </button>

          <ul>
            {item.features.map((feature, index) => (
              <li
                key={index}
                className="flex items-start py-5 border-t border-slate-600"
              >
                <Image src={checkIcon} width={24} height={24} alt="check" />
                <p className="body-2 ml-4">{feature}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default PricingList;
