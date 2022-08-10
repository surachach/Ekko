import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";

import { Layout, Menu, Breadcrumb } from "antd";

import { ReactNode } from "react";
import Navbar from "./Navbar";
import styled from "styled-components";
import BreadCrumbLayout from "./Breadcrumb";
import FooterComponent from "./footer";

const { Header, Sider, Content } = Layout;
type Props = {
  children?: ReactNode;
};

const MainLayout = ({ children }: Props) => {
  return (
    <Layout>
      <Sider style={{ backgroundColor: "white" }}>
        {/* text-align: center;
  padding: 8px;
  background-color: #ffffff;
  img {
    width: 100%;
    max-width: 160px;
  } */}

        <LogoWrapper>
          <img src="/Pokemon_logo.png" alt="logo" />
        </LogoWrapper>

        <Menu
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <UserOutlined />,
              label: "nav 1",
            },
            {
              key: "2",
              icon: <VideoCameraOutlined />,
              label: "nav 2",
            },
            {
              key: "3",
              icon: <UploadOutlined />,
              label: "nav 3",
            },
          ]}
        />
      </Sider>
      <Layout>
        <Navbar />

        <Layout style={{ padding: "0 24px 24px" }}>
          <BreadCrumbLayout />
          <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
            }}
          >
            {children}
          </Content>
        </Layout>
        <FooterComponent />
      </Layout>
    </Layout>
  );
};

export default MainLayout;
const LogoWrapper = styled.div`
  text-align: left;
  padding: 10px;
  background-color: #ffffff;
  img {
    width: 100%;
    max-width: 60px;
  }
`;
