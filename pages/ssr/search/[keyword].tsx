import { Input, Button } from "antd";
import { useRouter } from "next/router";
import { useState } from "react";
export default function Movies({ posts, keyword }: any) {
  console.log(posts);
  const router = useRouter();
  const [keyword2, setKeyword] = useState<string>("");
  return (
    <div style={{ margin: 30 }}>
      <span style={{ textAlign: "center" }}>
        <p style={{ fontSize: "20px" }}>
          Search :
          <Input
            value={keyword2}
            onChange={(e) => {
              setKeyword(e.target.value);
            }}
            onPressEnter={() => {
              router.push(`/ssr/search/${keyword2}`);
            }}
            style={{ width: "30%", marginLeft: "20px" }}
          />
        </p>
        <Button
          onClick={() => {
            router.push("/manga/");
          }}
          type="link"
          style={{ alignItems: "end" }}
        >
          Back
        </Button>
      </span>
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

  const res = await fetch(url);
  const data = await res.json();

  return {
    props: {
      posts: data.results,
      keyword,
    },
  };
}
