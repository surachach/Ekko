import { Col, Row } from "antd";

export default function GridLayout() {
  return (
    <>
      <Row style={{ background: "red" }}>
        <Col span={24}>col</Col>
      </Row>
      <Row style={{ background: "green" }}>
        <Col span={12}>col-12</Col>
        <Col span={12}>col-12</Col>
      </Row>
      <Row style={{ background: "blue" }}>
        <Col span={8}>col-8</Col>
        <Col span={8}>col-8</Col>
        <Col span={8}>col-8</Col>
      </Row>
      <Row style={{ background: "yellow" }}>
        <Col span={6}>col-6</Col>
        <Col span={6}>col-6</Col>
        <Col span={6}>col-6</Col>
        <Col span={6}>col-6</Col>
      </Row>
      <Row>
        <Col span={4} style={{ backgroundColor: "salmon" }}>
          col-4
        </Col>
        <Col span={4} style={{ backgroundColor: "teal" }}>
          col-4
        </Col>
        <Col span={4} style={{ backgroundColor: "GrayText" }}>
          col-4
        </Col>
        <Col span={4} style={{ backgroundColor: "green" }}>
          col-4
        </Col>
        <Col span={8} style={{ backgroundColor: "red" }}>
          col-8
        </Col>
      </Row>
      <h3 style={{ marginTop: "20px", textAlign: "center" }}>
        จากตัวอย่างข้างต้น Layout ของgrid ทั้ง Box จะมีขนาดเท่ากับ 24{" "}
      </h3>
    </>
  );
}
