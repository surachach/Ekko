import useSWR from "swr";
import axios from "axios";

const Youtube = () => {
  // const fetcher = (key) => fetch(key).then((res) => res.json());
  const fetcher = (...args) => axios(...args).then((res) => res.data);
  const url = "/api/delay/search_api";
  const { data, error, mutate } = useSWR(url, fetcher);
  console.log(data);
  return (
    <div>
      <h1 style={{ margin: 20 }}>Client-side</h1>
      <button
        style={{ margin: 20 }}
        onClick={() => {
          // request to update server
          mutate({
            ...data,
            results: [...data.results, { title: "xxx" }],
          });
        }}
      >
        Mutate
      </button>
      {/* <span>{JSON.stringify(data)}</span> */}
      <ul>
        {data &&
          data.results.map((result, index) => {
            return (
              <li key={`${index}`}>
                <img
                  src={result.image_url}
                  height={50}
                  style={{ marginRight: 16 }}
                />
                {`${index + 1}. ${result.title}`}
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Youtube;
