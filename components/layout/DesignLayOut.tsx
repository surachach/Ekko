import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";

import { Layout, Menu } from "antd";
import { useState } from "react";
import { ReactNode } from "react";
import Navbar from "./Navbar";
import styled from "styled-components";
import BreadCrumbLayout from "./Breadcrumb";

import FooterComponent from "./footer";
import React from "react";

const { Sider, Content, Footer } = Layout;
type Props = {
  children?: ReactNode;
};

const items1 = ["1", "2", "3"].map((key) => ({
  key,
  label: `nav ${key}`,
}));
const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
  (icon, index) => {
    const key = String(index + 1);
    return {
      key: `sub${key}`,
      icon: React.createElement(icon),
      label: `subnav ${key}`,
      children: new Array(4).fill(null).map((_, j) => {
        const subKey = index * 4 + j + 1;
        return {
          key: subKey,
          label: `option${subKey}`,
        };
      }),
    };
  }
);

const DesignLayout = ({ children }: Props) => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout>
      <Sider className="site-layout-background" width={200}>
        <Menu
          mode="inline"
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          style={{
            height: "100%",
          }}
          items={items2}
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

export default DesignLayout;
const LogoWrapper = styled.div`
  text-align: center;
  padding: 8px;
  background-color: #ffffff;
  img {
    width: 100%;
    max-width: 160px;
  }
`;
