import React from "react";
import "antd/dist/antd.css";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Menu, Space } from "antd";
const menu = (
  <Menu
    items={[
      {
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.google.com/"
          >
            1st google
          </a>
        ),
        key: "0",
      },
      {
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.notion.so/Praneat-0a9311c3da384e01bb206d6cf85b7c28"
          >
            2nd go to Notion
          </a>
        ),
        key: "1",
      },
      {
        type: "divider",
      },
      {
        label: "3rd menu item（disabled）",
        key: "3",
        disabled: true,
      },
    ]}
  />
);

export default function Disabled() {
  return (
    <Dropdown overlay={menu}>
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          Hover me
          <DownOutlined />
        </Space>
      </a>
    </Dropdown>
  );
}
