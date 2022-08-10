export default function SearchMangaSSR({ posts, randomData }: any) {
  return (
    <div style={{ margin: 20 }}>
      <h1>Manga</h1>
      <span>{randomData}</span>
      <ul>
        {posts.map((post: any, index: any) => {
          return (
            <li key={`${index}`}>
              <div style={{ display: "flex" }}>
                <img src={post.image_url} height={120} />
                <ul>
                  <li>
                    <h3>{`${index + 1}. ${post.title} `}</h3>
                    <p>{post.synopsis}</p>
                  </li>
                </ul>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

// This function gets called at build time
export async function getServerSideProps(context: any) {
  const { keyword } = context.query;

  const url = `https://api.jikan.moe/v3/search/manga?q=${keyword}`;
  const res = await (await fetch(url)).json();
  const data = await res;

  return {
    props: {
      posts: data.results,
      randomData: Math.random().toString(),
    },
  };
}
