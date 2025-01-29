import React, { useEffect, useState } from 'react';
import Videocard from './Videocard';
import axios from 'axios';
import { YOUTUBEAPI } from '../constants';

const Videocontainer = () => {
  const [videos, setVideos] = useState([]);

  const getVideosData = async () => {
    try {
      const response = await axios.get(YOUTUBEAPI);
      const data = response.data.items;
      setVideos(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getVideosData();
  }, []);

  return (
    <div className="max-w-[2000px] mx-auto px-4">
      <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-6">
        {videos.map((video) => (
          <div key={video.id} className="w-full">
            <Videocard videodetails={video} />
          </div>
        ))}
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
};

export default Videocontainer;