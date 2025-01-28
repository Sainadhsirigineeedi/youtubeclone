import React from 'react';
import { useNavigate } from 'react-router-dom';

const Videocard = (props) => {
  const videodetails = props.videodetails;
  const { snippet ,statistics} = videodetails;
  const thumbnailUrl = snippet?.thumbnails?.maxres?.url;
 
  const navigate=useNavigate();

  return thumbnailUrl? (
    <div className="m-2 border rounded-lg w-48 hover:cursor-pointer 
    overflow-hidden shadow-lg transform transition duration-300 ease-in-out hover:scale-105 
    hover:shadow-xl" 
    onClick={()=>navigate(`/palyvideo/${videodetails?.id}`)}
    >
  
  <img 
    src={thumbnailUrl} 
    alt="Video Thumbnail" 
    className="w-full h-32 object-cover rounded-t-lg" 
  />

 
  <ul className="p-3">
    <li className="text-sm font-semibold text-gray-800 line-clamp-2">
           {snippet?.title}
    </li>
    <li className="text-sm text-gray-600">{snippet?.channelTitle}</li>
    <li className="text-xs text-gray-400 mt-1">{statistics?.viewCount} views</li>
  </ul>
</div>

  ):(null)
};

export default Videocard;
