import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { closeSidebar } from '../utils/userSlice';
import axios from 'axios';
import Comment from './Comment';
import Videocard from './Videocard';

const Playingvideo = () => {
  const morevideos = useSelector((store) => store.app.morevideos);
  const dispatch = useDispatch();
  const { id } = useParams();
  const [videoInfo, setVideoInfo] = useState([]);
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  const [showComments, setShowComments] = useState(false); 
  const [comments, setComments] = useState([]);

  useEffect(() => {
    dispatch(closeSidebar());
    videoDetails();
    
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setShowComments(true);
      } else {
        setShowComments(false);
      }
    };
   
    handleResize();
   
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const videoDetails = async () => {
    try {
      const response = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=${import.meta.env.VITE_YOUTUBE_API_KEY}`
      );
      setVideoInfo(response?.data?.items);
      const commentsresponse = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${id}&key=${import.meta.env.VITE_YOUTUBE_API_KEY}`
      );
      setComments(commentsresponse?.data?.items);
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

          <div className="border p-4 rounded-xl">
            <div className="flex justify-between">
              <h1 className="font-bold text-xl">Comments</h1>
              <button onClick={() => setShowComments(!showComments)}>
                {showComments ? 'Hide' : 'Show'}
              </button>
            </div>
            {showComments && (
              <div className="px-4">
                {comments.map((comment) => (
                  <Comment key={comment.id} singleComment={comment} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="flex flex-col w-[300px]">
        <h2 className="text-xl font-bold mb-4">More Videos</h2>
        <div className="flex flex-col gap-4">
          {morevideos.map((video) => (
            <div key={video.id} className="w-full">
              <Videocard videodetails={video} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Playingvideo;