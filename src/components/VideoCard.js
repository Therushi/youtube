import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { thumbnails, title, channelTitle } = snippet;
  const { viewCount } = statistics;
  return (
    <div>
      <div className="w-80 cursor-pointer">
        <img
          className="rounded-xl aspect-video shadow-md"
          alt="thumbnail"
          src={thumbnails?.medium.url}
        />
        <h2 className="text-base font-medium line-clamp-2 mt-2">{title}</h2>
        <div className="flex gap-2 items-center text-sm font-medium text-gray-500">
          <p className="">{channelTitle}</p>
          <FaCheckCircle />
        </div>
        <p className="text-sm text-gray-500 font-medium">{viewCount} views</p>
      </div>
    </div>
  );
};

export default VideoCard;
