import axios from "axios";
const fetchManga = async (keyword: string) => {
  const url =
    "https://api.jikan.moe/v3/search/anime?q=&order_by=members&sort=desc&page=1";
  const res = await axios.get(url);

  // {
  //   params: { q: keyword },
  // }

  return res.data;
};

export default fetchManga;
