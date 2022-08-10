import React from "react";
import "antd/dist/antd.css";

import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Menu, Space } from "antd";
const menu = (
  <Menu
    items={[
      {
        label: <a href="https://www.antgroup.com">1st menu item</a>,
        key: "0",
      },
      {
        label: <a href="https://www.aliyun.com">2nd menu item</a>,
        key: "1",
      },
      {
        type: "divider",
      },
      {
        label: "3rd menu item",
        key: "3",
      },
    ]}
  />
);

export default function Trigger() {
  return (
    <Dropdown overlay={menu} trigger={["click"]}>
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          Click me
          <DownOutlined />
        </Space>
      </a>
    </Dropdown>
  );
}
