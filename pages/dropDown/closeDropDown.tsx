import React from "react";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Menu, Space } from "antd";
import { useState } from "react";

const App = () => {
  const [visible, setVisible] = useState(false);

  const handleMenuClick = (e: any) => {
    if (e.key === "2") {
      setVisible(false);
    }
  };

  const handleVisibleChange = (flag: any) => {
    setVisible(flag);
  };

  const menu = (
    <Menu
      onClick={handleMenuClick}
      items={[
        {
          label: "Clicking me will not close the menu.",
          key: "1",
        },
        {
          label: "Clicking me will not close the menu also.",
          key: "2",
        },
        {
          label: "Clicking me will close the menu.",
          key: "3",
        },
      ]}
    />
  );
  return (
    <Dropdown
      overlay={menu}
      onVisibleChange={handleVisibleChange}
      visible={visible}
    >
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          Hover me
          <DownOutlined />
        </Space>
      </a>
    </Dropdown>
  );
};

export default App;
