import { Col, Divider, Row } from "antd";
import React from "react";

export default function Typesetting() {
  return (
    <>
      <Divider orientation="left">sub-element align left</Divider>
      <Row
        justify="start"
        style={{ backgroundColor: "rgba(128, 128, 128, 0.08)", height: "50px" }}
      >
        <Col span={4} style={{ backgroundColor: "rgba(0,146,255,.75)" }}>
          col-4
        </Col>
        <Col span={4} style={{ backgroundColor: "#096dd9" }}>
          col-4
        </Col>
        <Col span={4} style={{ backgroundColor: "rgba(0,146,255,.75)" }}>
          col-4
        </Col>
        <Col span={4} style={{ backgroundColor: "#096dd9" }}>
          col-4
        </Col>
      </Row>

      <Divider orientation="left">sub-element align center</Divider>
      <Row
        justify="center"
        style={{ backgroundColor: "rgba(128, 128, 128, 0.08)", height: "50px" }}
      >
        <Col span={4} style={{ backgroundColor: "#096dd9" }}>
          col-4
        </Col>
        <Col span={4} style={{ backgroundColor: "rgba(0,146,255,.75)" }}>
          col-4
        </Col>
        <Col span={4} style={{ backgroundColor: "#096dd9" }}>
          col-4
        </Col>
        <Col span={4} style={{ backgroundColor: "rgba(0,146,255,.75)" }}>
          col-4
        </Col>
      </Row>

      <Divider orientation="left">sub-element align right</Divider>
      <Row
        justify="end"
        style={{ backgroundColor: "rgba(128, 128, 128, 0.08)", height: "50px" }}
      >
        <Col span={4} style={{ backgroundColor: "rgba(0,146,255,.75)" }}>
          col-4
        </Col>
        <Col span={4} style={{ backgroundColor: "#096dd9" }}>
          col-4
        </Col>
        <Col span={4} style={{ backgroundColor: "rgba(0,146,255,.75)" }}>
          col-4
        </Col>
        <Col span={4} style={{ backgroundColor: "#096dd9" }}>
          col-4
        </Col>
      </Row>

      <Divider orientation="left">sub-element monospaced arrangement</Divider>
      <Row
        justify="space-between"
        style={{ backgroundColor: "rgba(128, 128, 128, 0.08)", height: "50px" }}
      >
        <Col span={4} style={{ backgroundColor: "#096dd9" }}>
          col-4
        </Col>
        <Col span={4} style={{ backgroundColor: "rgba(0,146,255,.75)" }}>
          col-4
        </Col>
        <Col span={4} style={{ backgroundColor: "#096dd9" }}>
          col-4
        </Col>
        <Col span={4} style={{ backgroundColor: "rgba(0,146,255,.75)" }}>
          col-4
        </Col>
      </Row>

      <Divider orientation="left">sub-element align full</Divider>
      <Row
        justify="space-around"
        style={{ backgroundColor: "rgba(128, 128, 128, 0.08)", height: "50px" }}
      >
        <Col span={4} style={{ backgroundColor: "rgba(0,146,255,.75)" }}>
          col-4
        </Col>
        <Col span={4} style={{ backgroundColor: "#096dd9" }}>
          col-4
        </Col>
        <Col span={4} style={{ backgroundColor: "rgba(0,146,255,.75)" }}>
          col-4
        </Col>
        <Col span={4} style={{ backgroundColor: "#096dd9" }}>
          col-4
        </Col>
      </Row>

      <Divider orientation="left">sub-element align evenly</Divider>
      <Row
        justify="space-evenly"
        style={{ backgroundColor: "rgba(128, 128, 128, 0.08)", height: "50px" }}
      >
        <Col span={4} style={{ backgroundColor: "rgba(0,146,255,.75)" }}>
          col-4
        </Col>
        <Col span={4} style={{ backgroundColor: "#096dd9" }}>
          col-4
        </Col>
        <Col span={4} style={{ backgroundColor: "rgba(0,146,255,.75)" }}>
          col-4
        </Col>
        <Col span={4} style={{ backgroundColor: "#096dd9" }}>
          col-4
        </Col>
      </Row>
      <br />
      <div>
        <Divider orientation="left">อธิบาย</Divider>
        <h3>
          โดย Typesetting คือการจัดองประกอบของข้างในกล่อง โดยสามารถกำหนดระยะของ
          สิ่งที่อยู่ข้างได้ ใช้คำสั่ง justify ตามด้วย ตำแหน่งที่ต้องการ start
          คือ เริ่มต้น ,center คือ ตำแหน่งกึ่งกลาง ,end คือ ตำแหน่ง
          ท้าย,space-between คือ ระหว่างกลาง โดยเต็มจอ ไม่ย่อ ,space-around คือ
          จัดองค์ประกอบย่อข้างในเต็ม ,space-evenly คือ
          จัดเต็มโดยมีระยะห่างเท่ากัน
        </h3>
      </div>
    </>
  );
}
