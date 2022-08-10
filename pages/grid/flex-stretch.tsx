import React from "react";
import "antd/dist/antd.css";
import { Col, Divider, Row } from "antd";

export default function FlexStretch() {
  return (
    <>
      <Divider orientation="left">Percentage columns</Divider>
      <Row>
        <Col flex={2} style={{ backgroundColor: "darkseagreen" }}>
          2 / 5
        </Col>
        <Col flex={3} style={{ backgroundColor: "green" }}>
          3 / 5
        </Col>
      </Row>
      <Divider orientation="left">Fill rest</Divider>
      <Row style={{ backgroundColor: "black", height: "50px" }}>
        <Col flex="150px" style={{ backgroundColor: "red" }}>
          100px
        </Col>
        <Col flex="auto" style={{ backgroundColor: "yellow" }}>
          Fill Rest
        </Col>
      </Row>
      <Divider orientation="left">Raw flex style</Divider>
      <Row>
        <Col flex="1 1 200px">1 1 200px</Col>
        <Col flex="0 1 300px">0 1 300px</Col>
      </Row>

      <Row wrap={false}>
        <Col flex="none">
          <div
            style={{
              padding: "0 16px",
            }}
          >
            none
          </div>
        </Col>
        <Col flex="auto">auto with no-wrap</Col>
      </Row>
      <div style={{ marginTop: "30px", textAlign: "center", color: "black" }}>
        Flex-Stretch คือ การจัดตำแหน่ง ให้มีความยืดหยุดได้
        โดยสามารถกำหนดได้แบบทั้ง string | number
      </div>
    </>
  );
}
