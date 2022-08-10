import { useRouter } from "next/router";
import { Button } from "antd";
export default function PushBack() {
  const router = useRouter();
  return (
    <div style={{ marginTop: "40px", textAlign: "center" }}>
      <Button
        style={{ marginLeft: "10px", backgroundColor: "blanchedalmond" }}
        onClick={() => {
          {
            router.push("/");
          }
        }}
      >
        หน้าแรก
      </Button>
      <Button
        style={{ marginLeft: "10px", backgroundColor: "blanchedalmond" }}
        onClick={() => {
          {
            router.back();
          }
        }}
      >
        ย้อนกลับ
      </Button>
    </div>
  );
}
