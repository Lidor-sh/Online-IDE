import { StaticImageData } from "next/image"

interface spotifyProps {
    image?: string | StaticImageData,
    songName?: string,
    songArtist?: string,
}


const spotify = ({image, songName, songArtist} : spotifyProps) => {
  return (
    <div>spotify</div>
  )
}

export default spotify