import { Dropdown, Menu, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";

export default function LoadingDropDown() {
  const menu = (
    <Menu
      items={[
        {
          label: "surachach",
          key: 0,
        },
      ]}
    />
  );
  return (
    <Space size="middle">
      <Dropdown.Button overlay={menu}>
        Click
        <DownOutlined />
      </Dropdown.Button>
      <Dropdown.Button type="primary" overlay={menu} icon={<DownOutlined />}>
        Click
      </Dropdown.Button>
      <Dropdown.Button
        type="link"
        overlay={menu}
        loading
        icon={<DownOutlined />}
      >
        click
      </Dropdown.Button>
    </Space>
  );
}
