import React from 'react';
import { useNavigate } from 'react-router-dom';

const Videocard = ({ videodetails, searchlistvideodetails }) => {
  const { snippet, statistics } = videodetails || searchlistvideodetails;
  const thumbnailUrl = snippet?.thumbnails?.maxres?.url || snippet?.thumbnails?.high?.url;
  const navigate = useNavigate();

  const formatViewCount = (count) => {
    if (!count) return '0 views';
    if (count >= 1000000) {
      return `${(count / 1000000).toFixed(1)}M views`;
    }
    if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}K views`;
    }
    return `${count} views`;
  };

  if (!thumbnailUrl) return null;

  return (
    <div
      className="w-full cursor-pointer group"
      onClick={() => navigate(`/palyvideo/${videodetails?.id || searchlistvideodetails?.id?.videoId}`)}
    >
      <div className="relative aspect-video w-full overflow-hidden rounded-xl">
        <img
          src={thumbnailUrl}
          alt={snippet?.title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-200"
        />
      </div>

     
      <div className="mt-3 flex gap-3">
       
        <div className="flex-shrink-0">
          <div className="h-9 w-9 rounded-full overflow-hidden">
            <img
              src={snippet?.thumbnails?.default?.url}
              alt={snippet?.channelTitle}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        
        <div className="flex flex-col flex-1">
          <h3 className="font-roboto font-medium text-sm sm:text-base line-clamp-2 text-gray-900">
            {snippet?.title}
          </h3>

          <div className="mt-1 flex flex-col text-sm text-gray-600">
            <span className="hover:text-gray-900">
              {snippet?.channelTitle}
            </span>
            <div className="flex items-center">
              {videodetails && <span>{formatViewCount(statistics?.viewCount)}</span>}
              {videodetails && <span className="mx-1">•</span>}
              <span>{new Date(snippet?.publishedAt).toLocaleDateString()}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Videocard;