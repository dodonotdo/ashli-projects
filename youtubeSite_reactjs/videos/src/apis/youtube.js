import axios from "axios";

const KEY = "AIzaSyCIDXEpFiCfE9vFpZNDFp3GbOwJxuCvK64";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
