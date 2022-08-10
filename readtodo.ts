import axios from "axios";

// const url = "https://api.jikan.moe/v3/anime/1/episodes/1";

const url = "https:jsonplaceholder.typicode.com/todos";
axios.get(url).then((response) => {
  console.log(response.data);
});
