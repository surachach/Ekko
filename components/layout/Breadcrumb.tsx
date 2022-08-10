import { Breadcrumb } from "antd";
import { useRouter } from "next/router";
import Link from "next/link";

const BreadCrumbLayout = () => {
  const router = useRouter();

  return (
    <>
      <Breadcrumb style={{ margin: "16px 0" }}>
        <Breadcrumb.Item>
          <Link href={"/"}>Home</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link href={"/"}>List</Link>
        </Breadcrumb.Item>
      </Breadcrumb>
    </>
  );
};

export default BreadCrumbLayout;
