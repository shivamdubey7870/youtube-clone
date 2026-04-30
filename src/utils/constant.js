

const YOUTUBE_API_KEY = "AIzaSyCtmVc1yqo9PW1pxeQss80otVPW31pbouU";

const YOUTUBE_API =
  "https://youtube.googleapis.com/youtube/v3/videos" +
  "?part=snippet,contentDetails,statistics" +
  "&chart=mostPopular" +
  "&regionCode=IN" +
  "&maxResults=40" +
  "&key=" + YOUTUBE_API_KEY;

export { YOUTUBE_API_KEY, YOUTUBE_API };

export const YOUTUBE_SEARCH_API ="http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";


