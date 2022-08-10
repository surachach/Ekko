import { Divider, Button } from "antd";
import { useRouter } from "next/router";
import { ReactNode } from "react";
type Props = {
  children?: ReactNode;
};
export default function NextPage({ children }: Props) {
  const router = useRouter();
  return (
    <Divider
      orientation="center"
      style={{ padding: "10px", marginLeft: "5px" }}
    >
      {children}
    </Divider>
  );
}
