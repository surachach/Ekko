/* eslint-disable jsx-a11y/alt-text */
import { Button, Divider } from "antd";
import { useRouter } from "next/router";

const MangaID = ({ data }: any) => {
  const router = useRouter();
  console.log(data);
  return (
    <div style={{ margin: 50, backgroundColor: "aliceblue" }}>
      <div style={{ display: "flex", justifyContent: "end" }}>
        <Button
          type="primary"
          onClick={() => {
            router.push("/manga/");
          }}
          style={{
            alignItems: "end",
            margin: "30px",
            borderRadius: "50px 50px",
          }}
        >
          Back
        </Button>
      </div>
      <div
        style={{
          width: "80vw",
          display: "flex",
          justifyContent: "center",
          placeContent: "space-evenly",
          padding: "50px",
          paddingBottom: "0",
        }}
      >
        <h1>
          ID : {data.mal_id} <br />
          Name : {data.title} <br />
          Score : {data.score ? data.score : "- -"}
        </h1>
        <img
          src={data.image_url}
          style={{
            width: "300px",
            margin: "20px 0 20px 0",
            alignItems: "center",
          }}
        />
      </div>
      <div style={{ padding: "0 40px 30px 40px" }}>
        <Divider orientation="left">Synopsis : {data.title}</Divider>
        <p>
          <h3>{data.synopsis}</h3>
        </p>
      </div>
    </div>
  );
};

export default MangaID;

export async function getServerSideProps(context: any) {
  const { id } = context.query;

  const url = `https://api.jikan.moe/v3/manga/${id}`;

  const res = await fetch(url);
  const data = await res.json();

  return {
    props: { data },
  };
}
