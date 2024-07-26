import Image, { StaticImageData } from "next/image";
import playImage from "../images/play.png";
import pauseImage from "../images/pause.png";
import rewindImage from "../images/rewind.png";
import volumeUpImage from "../images/volume-up.png";
import volumeMuteImage from "../images/volume-mute.png";

interface spotifyProps {
  image: string | StaticImageData;
  songName: string;
  songArtist: string;
  className?: string;
}

const SpotifyCard = ({
  image,
  songName,
  songArtist,
  className,
}: spotifyProps) => {
  return (
    <>
      <div
        className={`relative flex items-center ${
          className || ""
        } bg-black/70 w-[460px] h-[102px] rounded-[20px]`}
      >
        <Image
          src={image}
          className="size-[4.4rem] rounded-lg ml-6"
          width={40}
          height={40}
          alt="spotify image"
        />
        <div className="ml-4 -mt-8">
          <p className="text-whitetheme font-bold font-mono text-xl">
            {songName}
          </p>
          <p className="-mt-1 font-bold font-mono">{songArtist}</p>
        </div>
        <div className="absolute bottom-5 right-8 flex space-x-2">
          <Image
            src={rewindImage}
            className="size-8"
            width={20}
            height={20}
            alt="back"
          />
          <Image
            src={pauseImage}
            className="size-8"
            width={20}
            height={20}
            alt="back"
          />
          <Image
            src={rewindImage}
            className="size-8 rotate-180"
            width={20}
            height={20}
            alt="back"
          />
          <Image
            src={volumeUpImage}
            className="size-8"
            width={20}
            height={20}
            alt="back"
          />
        </div>
      </div>
    </>
  );
};

export default SpotifyCard;
