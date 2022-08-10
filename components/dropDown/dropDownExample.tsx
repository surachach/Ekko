import React from "react";
import "antd/dist/antd.css";
import styled from "styled-components";

import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import { Dropdown, Menu, Space } from "antd";
const menu = (
  <Menu
    items={[
      {
        key: "1",
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.antgroup.com"
          >
            1st menu item
          </a>
        ),
      },
      {
        key: "2",
        label: (
          <a target="_blank" rel="noopener noreferrer" href="/">
            2nd menu item (disabled)
          </a>
        ),
        icon: <SmileOutlined />,
        disabled: true,
      },
      {
        key: "3",
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.luohanacademy.com"
          >
            3rd menu item (disabled)
          </a>
        ),
      },
      {
        key: "4",
        danger: true,
        label: "a danger item",
      },
    ]}
  />
);

export default function DropDown() {
  return (
    <Dropdown overlay={menu}>
      <a onClick={(e) => e.preventDefault()}>
        <SpaceText>
          <Space>
            DropDown
            <DownOutlined />
          </Space>
        </SpaceText>
      </a>
    </Dropdown>
  );
}
const SpaceText = styled.a`
  font-weight: bold;
  padding: 0 2rem;
  font-size: 20px;
  margin: 0 20px;
  width: auto;
`;
