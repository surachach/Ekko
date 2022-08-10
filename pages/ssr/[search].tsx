import { Button } from "antd/lib/radio";
import { useRouter } from "next/router";
const Search = ({ posts }: any) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading ...</div>;
  }
  return (
    <div>
      <h1></h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "baseline",
          width: "60%",
          margin: 40,
        }}
      >
        <h1>Search </h1>
        <Button
          onClick={() => {
            router.push("/manga/");
          }}
          type="link"
        >
          Back{" "}
        </Button>
      </div>

      <ul>
        {posts.map((post: any, index: number) => {
          return (
            <li key={`${index}`}>
              <img
                src={post.image_url}
                height={60}
                style={{ marginRight: 16 }}
              />
              {` ${post.title}`}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Search;

export async function getStaticPaths() {
  return {
    paths: [{ params: { search: "pokemon" } }],
    fallback: true,
  };
}

export async function getStaticProps({ params }: any) {
  console.log("param --->", params);

  const url = `https://api.jikan.moe/v3/search/manga?q=${params.search}`;

  const res = await fetch(url);
  const data = await res.json();
  console.log(data);
  return {
    props: {
      posts: data.results,
    },
  };
}
