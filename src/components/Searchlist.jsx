import React, { useEffect, useState } from 'react'
import { SEARCH_VIDEOS_API } from '../constants';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Videocard from './Videocard';




const Searchlist = () => {
    const [videos, setVideos] = useState([]);
    const {keyword}=useParams()

    const getVideosData = async () => {
      try {
        const response = await axios.get(SEARCH_VIDEOS_API + keyword + "&key=" + import.meta.env.VITE_YOUTUBE_API_KEY);
  
        setVideos(response?.data.items);
      } catch (error) {
        console.log(error);
      }
    };
  
    useEffect(() => {
      if (keyword) {
        getVideosData(); 
      }
    }, [keyword]);
  
    return (
      <div className="max-w-[2000px] mx-auto px-4">
        <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-6">
          {videos.filter((video) => video.id.kind == 'youtube#video').map((video)=>{
            return <Videocard searchlistvideodetails={video} />
          })}
        </div>
  
        {videos.length === 0 && (
          <div className="flex justify-center items-center min-h-[200px]">
            <div className="animate-pulse flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-gray-200 mb-4"></div>
              <div className="h-4 w-48 bg-gray-200 rounded"></div>
            </div>
          </div>
        )}
      </div>
  
    );
}

export default Searchlist