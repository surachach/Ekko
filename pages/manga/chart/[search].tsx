import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Column } from "@ant-design/plots";

const DemoChartManga = ({ posts }: any) => {
  const [data, setData] = useState([]);
  const router = useRouter();
  console.log(router);
  // console.log("data ----->", data);
  useEffect(() => {
    setData(posts);
  }, [posts]);

  const config = {
    data,
    xField: "title", //title
    yField: "score", //score
    xAxis: {
      label: {
        autoRotate: false,
      },
    },
    slider: {
      start: 0.1,
      end: 0.2,
    },
  };

  if (router.isFallback) {
    return <div>Loading ...</div>;
  }
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <h1>Chart Manga </h1>
        <div style={{ width: "600px", height: "400px" }}>
          <Column {...config} />
        </div>
      </div>
    </div>
  );
};

export default DemoChartManga;

export async function getStaticPaths() {
  return {
    paths: [
      { params: { search: "pokemon" } },
      { params: { search: "demon slayer" } },
    ],
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
