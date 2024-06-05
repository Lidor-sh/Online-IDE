import Image from "next/image";
import { notificationImages } from "../constants/Hero";
import notificationImage from "../images/notification-main.png";

interface notificationPromps {
  className: string;
  title: string;
}

const Notification = ({ className, title }: notificationPromps) => {
  return (
    <div
      className={`${
        className || ""
      } flex items-center p-4 pr-6 bg-slate-500/40 backdrop-blur border border-slate-700/10 rounded-2xl gap-5`}
    >
      <Image
        src={notificationImage}
        width={62}
        height={62}
        alt="image"
        className="rounded-xl"
      />
      <div className="flex-1 ">
        <h6 className="mb-1 font-semibold text-base text-whitetheme">
          {title}
        </h6>
        <div className="flex items-center justify-between">
          <ul className="flex -m-0.5">
            {notificationImages.map((item, index) => (
              <li
                className={`relative w-6 h-6 border-2 border-blacktheme rounded-full overflow-hidden ${
                  index > 0 ? "-ml-2" : ""
                }`}
                key={index}
              >
                <Image
                  src={item}
                  className="w-full"
                  width={20}
                  height={20}
                  alt={`icon-${index}`}
                />
              </li>
            ))}
          </ul>
          <div className="body-2 text-gray-800">1m ago</div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
