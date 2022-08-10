import { useEffect, useState } from "react";
import { useRouter } from "next/router";
function Protect() {
  const [me, setMe] = useState<any>(null);

  const router = useRouter();

  useEffect(() => {
    let IsMounted = true;

    const getUser = async () => {
      const response = await fetch(`http://localhost:3000/api/users/2`);
      if (!response.ok) {
        router.push("/");
      } else {
        const data = await response.json();
        console.log(`data --- >`, data);

        if (data) {
          if (IsMounted) {
            setMe(data);
          }
        } else {
          router.push("/");
        }
      }
    };

    getUser();

    return () => {
      IsMounted = false;
    };
  }, []);

  return (
    <div>
      {!me ? (
        <p>Loadind ...</p>
      ) : (
        <p>
          {me.name} is dashboard is {me.id}
        </p>
      )}
    </div>
  );
}

export default Protect;
