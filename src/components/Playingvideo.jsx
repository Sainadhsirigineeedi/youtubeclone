import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom'
import { closeSidebar } from '../utils/userSlice';
import axios from 'axios';

const Playingvideo = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [videoInfo, setVideoInfo] = useState([]);
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);

  useEffect(() => {
    dispatch(closeSidebar());
    videoDetails();
  }, []);

  const videoDetails = async () => {
    try {
      const response = await axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=${import.meta.env.VITE_YOUTUBE_API_KEY}`);
      setVideoInfo(response?.data?.items);
    } catch (error) {
      console.log(error);
    }
  };

  if (videoInfo?.length < 1) {
    return null;
  }

  const { title, channelTitle, description } = videoInfo[0]?.snippet;
  const { commentCount, favoriteCount, likeCount, viewCount } = videoInfo[0]?.statistics;

  const truncatedDescription = description?.length > 150 ? description.substring(0, 100) + '...' : description;

  return (
    <div className="flex flex-wrap gap-6 p-6">
      <div className="flex flex-col gap-4 flex-1 max-w-[850px]">
        <iframe
          width="100%"
          height="440"
          src={`https://www.youtube.com/embed/${id}?autoplay=1`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>

        <div className="flex flex-col p-1">
          <h1 className="text-2xl font-bold">{title}</h1>
          <div className="flex items-center gap-2 p-1">
            <span className="text-gray-500">{channelTitle}</span>
            <button className="border border-gray-500 px-2 py-1 rounded-2xl bg-black text-white text-sm">
              Subscribe
            </button>
          </div>
          <div className="text-sm text-gray-500">
            <p>{viewCount} views | {likeCount} Likes | {favoriteCount} Favorites</p>
            <p>{commentCount} comments</p>
          </div>

          <div className="mt-4">
            <p>
              {isDescriptionExpanded ? description : truncatedDescription}
              <button
                className="text-blue-500 ml-2"
                onClick={() => setIsDescriptionExpanded(!isDescriptionExpanded)}
              >
                {isDescriptionExpanded ? 'Show less' : 'Read more'}
              </button>
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-[300px]">
        <h2 className="text-xl font-bold mb-4">More Videos</h2>
        <div className="flex flex-col gap-4">
          <div className="flex gap-2">
            <img src="https://via.placeholder.com/100" alt="Thumbnail" className="w-24 h-14 object-cover" />
            <div>
              <h3 className="text-md font-semibold">Video Title</h3>
              <p className="text-sm text-gray-500">Channel Name</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Playingvideo;
