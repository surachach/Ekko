import fetch from "isomorphic-unfetch";
import Image from "next/image";

// import pokemon from "../../public/lindo.jpeg";

function Dashboard({ me }: any) {
  console.log(me);
  return (
    <div>
      {!me ? (
        <>Loadind ...</>
      ) : (
        <>
          <div>
            {me.name} is dashboard is {me.id} <br />
            <img src={"/lindo.jpeg"} width={200} height={200} /> <br />
            <Image src={"/lindo.jpeg"} width={200} height={200} />
          </div>
        </>
      )}
    </div>
  );
}

export const getServerSideProps = async ({ req, res }: any) => {
  let user;
  const response = await fetch(`http://localhost:3000/api/users/2`);
  if (!response.ok) {
    res.writeHead(302, { Location: "/" });
    res.end(); //res ตัวนี้มาจาก ตัว next js  getServer สร้างมาให้
  } else {
    const data = await response.json();
    console.log(`data --- >`, data);

    if (data) {
      user = data;
      console.log(`user ----> `, user);
    } else {
      res.writeHead(302, { Location: "/" });
      res.end();
    }
  }

  return {
    props: { me: user },
  };
};

export default Dashboard;
