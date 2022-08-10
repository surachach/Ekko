import { Col, Row } from "antd";
import React from "react";

export default function Offset() {
  return (
    <>
      <Row style={{ height: "30px" }}>
        <Col span={8} style={{ backgroundColor: "red" }}>
          col-8
        </Col>
        <Col span={6} offset={2} style={{ backgroundColor: "yellow" }}>
          col-8
        </Col>
        <Col span={6} offset={2} style={{ backgroundColor: "green" }}>
          col-8
        </Col>
      </Row>
      <Row>
        <Col
          span={6}
          offset={6}
          style={{
            backgroundColor: "blue",
            color: "white",
            textAlign: "center",
          }}
        >
          col-6 col-offset-6
        </Col>
        <Col span={6} offset={6} style={{ backgroundColor: "green" }}>
          col-6 col-offset-6
        </Col>
      </Row>
      <Row>
        <Col
          span={12}
          offset={6}
          style={{ backgroundColor: "ThreeDHighlight" }}
        >
          col-12 col-offset-6
        </Col>
      </Row>

      <h3 style={{ textAlign: "center", marginTop: "20px" }}>
        setOff คือ การกำหนดให้ คอลลัม ขยับไปทางขวามือ โดยกำหนด offsef= {"n"}
      </h3>
    </>
  );
}
