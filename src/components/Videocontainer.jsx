import React, { useEffect, useState } from 'react'

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
  
    <div>
     
      <div className='flex p-2 flex-wrap'>
        {videos.map((v, index) => {
          return <Videocard key={v.id} videodetails={v} />;
        })}
      </div>
    </div>
  
  )
}

export default Videocontainer