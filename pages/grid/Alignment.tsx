import { Col, Divider, Row, Button } from "antd";
import { useRouter } from "next/router";
import React from "react";
import MainLayout from "../../components/layout/MainLayout";
import NextPage from "../../components/button/next-page";
import PushBack from "../../components/button/push-back";
import FlexStretch from "./flex-stretch";
import styled from "styled-components";
import Offset from "./offSet";

const DemoBox: React.FC<{ children: React.ReactNode; value: number }> = (
  props
) => <p className={`height-${props.value}`}>{props.children}</p>;

export default function AlignmentPage() {
  const router = useRouter();

  return (
    <MainLayout>
      <Divider orientation="left">Align Top</Divider>
      <Row
        justify="center"
        align="top"
        style={{ height: "200px", backgroundColor: "darkseagreen" }}
      >
        <Col span={4} style={{ backgroundColor: "green" }}>
          <DemoBox value={100}>col-4</DemoBox>
        </Col>
        <Col span={4} style={{ backgroundColor: "red" }}>
          <DemoBox value={50}>col-4</DemoBox>
        </Col>
        <Col span={4} style={{ backgroundColor: "green" }}>
          <DemoBox value={120}>col-4</DemoBox>
        </Col>
        <Col span={4} style={{ backgroundColor: "red" }}>
          <DemoBox value={80}>col-4</DemoBox>
        </Col>
      </Row>

      <Divider orientation="left">Align Middle</Divider>
      <Row
        justify="space-around"
        align="middle"
        style={{ height: "200px", backgroundColor: "darkseagreen" }}
      >
        <Col span={4} style={{ backgroundColor: "green" }}>
          <DemoBox value={100}>col-4</DemoBox>
        </Col>
        <Col span={4} style={{ backgroundColor: "red" }}>
          <DemoBox value={50}>col-4</DemoBox>
        </Col>
        <Col span={4} style={{ backgroundColor: "green" }}>
          <DemoBox value={120}>col-4</DemoBox>
        </Col>
        <Col span={4} style={{ backgroundColor: "red" }}>
          <DemoBox value={80}>col-4</DemoBox>
        </Col>
      </Row>

      <Divider orientation="left">Align Bottom</Divider>
      <Row
        justify="space-between"
        align="bottom"
        style={{ height: "200px", backgroundColor: "darkseagreen" }}
      >
        <Col span={4} style={{ backgroundColor: "green" }}>
          <DemoBox value={100}>col-4</DemoBox>
        </Col>
        <Col span={4} style={{ backgroundColor: "red" }}>
          <DemoBox value={50}>col-4</DemoBox>
        </Col>
        <Col span={4} style={{ backgroundColor: "green" }}>
          <DemoBox value={120}>col-4</DemoBox>
        </Col>
        <Col span={4} style={{ backgroundColor: "red" }}>
          <DemoBox value={80}>col-4</DemoBox>
        </Col>
      </Row>
      <div>
        <h3>
          Alignment คือ การจัดเรียงแนวตั้ง แนวสูง โดยจะสามารถระบุระยะของ
          สิ่งของที่เราอยากจะจัดได้
        </h3>
      </div>
      <br />
      {/* หน้าใหม่ flex-strtch */}
      <Divider />
      <TextH1>Flex Stretch</TextH1>

      <FlexStretch />
      {/* หน้าใหม่ off-set */}
      <Divider />
      <TextH1> Column offset</TextH1>
      <br />
      <Offset />
      <NextPage>
        <Button
          type="primary"
          onClick={() => {
            {
              router.push("/grid/Order");
            }
          }}
        >
          หน้าถัดไป
        </Button>
      </NextPage>
      <PushBack />
    </MainLayout>
  );
}
const TextH1 = styled.h1`
  font-size: 20px;
`;
