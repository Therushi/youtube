import { FaHome } from "react-icons/fa";
import { ImFire } from "react-icons/im";
import { MdLibraryMusic } from "react-icons/md";
import { BiSolidCameraMovie } from "react-icons/bi";

export const SIDEBAR = [
  {
    id: 1,
    name: "Home",
    icon: <FaHome />,
    link: "/",
  },
  {
    id: 3,
    name: "Music",
    icon: <MdLibraryMusic />,
    link: "/",
  },
  {
    id: 4,
    name: "Movies",
    icon: <BiSolidCameraMovie />,
    link: "/",
  },
  {
    id: 2,
    name: "Trending",
    icon: <ImFire />,
    link: "/",
  },
];
const GOOGLE_API_KEY = "AIzaSyApN0FlWWc3nw2pZhOJjoho1dKLqEgIBig";
export const YOUTUBE_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${GOOGLE_API_KEY}`;

export const YOUTUBE_SEARCH_API =
  "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
