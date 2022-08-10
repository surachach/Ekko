import React from "react";
import "antd/dist/antd.css";
import { Dropdown, Menu } from "antd";
const menu = (
  <Menu
    items={[
      {
        label: "1st menu item",
        key: "1",
      },
      {
        label: "2nd menu item",
        key: "2",
      },
      {
        label: "3rd menu item",
        key: "3",
      },
      {
        label: "4rd",
        key: "4",
      },
    ]}
  />
);

const ContextMenu = () => (
  <Dropdown overlay={menu} trigger={["contextMenu"]}>
    <div
      className="site-dropdown-context-menu"
      style={{
        textAlign: "center",
        height: 200,
        lineHeight: "200px",
      }}
    >
      Right Click on here
    </div>
  </Dropdown>
);

export default ContextMenu;
