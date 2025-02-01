const API_KEY=import.meta.env.VITE_YOUTUBE_API_KEY
export const YOUTUBEAPI="https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" + API_KEY;


export const SEARCH_API="http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="

export const SEARCH_VIDEOS_API="https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=35&q="

// https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=surfing&key=[YOUR_API_KEY]

// https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=UC_x5XG1OV2P6uZZ5FSM9Ttw&maxResults=25&key=[YOUR_API_KEY]