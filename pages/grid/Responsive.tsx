import { Col, Row, Divider } from "antd";
import React from "react";

export default function Responsive() {
  return (
    <Row>
      <Divider orientation="left"></Divider>
      <Col
        xs={{ span: 5, offset: 1 }}
        lg={{ span: 6, offset: 2 }}
        style={{ backgroundColor: "green" }}
      >
        Col
      </Col>
      <Col
        xs={{ span: 11, offset: 1 }}
        lg={{ span: 6, offset: 2 }}
        style={{ backgroundColor: "green" }}
      >
        Col
      </Col>
      <Col
        xs={{ span: 5, offset: 1 }}
        lg={{ span: 6, offset: 2 }}
        style={{ backgroundColor: "green" }}
      >
        Col
      </Col>
    </Row>
  );
}
