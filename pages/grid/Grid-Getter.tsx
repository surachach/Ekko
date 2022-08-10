import { Col, Divider, Row } from "antd";
import React from "react";
import MainLayout from "../../components/layout/MainLayout";
import { Button } from "antd";
import { useRouter } from "next/router";
import NextPage from "../../components/button/next-page";
import PushBack from "../../components/button/push-back";
import styled from "styled-components";
import GridLayout from "./BasicGrid";

const style: React.CSSProperties = { background: "#0092ff", padding: "8px 0" };

export default function GridGetter() {
  const router = useRouter();
  return (
    <MainLayout>
      <TextH1>Basic Grid</TextH1>
      <Divider />
      <GridLayout />
      <TextH1>Grid-Getter</TextH1>
      <Divider orientation="left">Horizontal</Divider>
      <Row gutter={16}>
        <Col span={6}>
          <div style={style}>col-6</div>
        </Col>
        <Col span={6}>
          <div style={style}>col-6</div>
        </Col>
        <Col span={6}>
          <div style={style}>col-6</div>
        </Col>
        <Col span={6}>
          <div style={style}>col-6</div>
        </Col>
      </Row>
      <Divider orientation="center">Responsive</Divider>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col span={6}>
          <div style={style}>col-6</div>
        </Col>
        <Col span={6}>
          <div style={style}>col-6</div>
        </Col>
        <Col span={6}>
          <div style={style}>col-6</div>
        </Col>
        <Col span={6}>
          <div style={style}>col-6</div>
        </Col>
      </Row>
      <Divider orientation="right">Vertical</Divider>
      <Row gutter={[16, 20]}>
        <Col span={6}>
          <div style={style}>col-6</div>
        </Col>
        <Col span={6}>
          <div style={style}>col-6</div>
        </Col>
        <Col span={6}>
          <div style={style}>col-6</div>
        </Col>
        <Col span={6}>
          <div style={style}>col-6</div>
        </Col>
        <Col span={6}>
          <div style={style}>col-6</div>
        </Col>
        <Col span={6}>
          <div style={style}>col-6</div>
        </Col>
        <Col span={6}>
          <div style={style}>col-6</div>
        </Col>
        <Col span={6}>
          <div style={style}>col-6</div>
        </Col>
      </Row>
      <Divider></Divider>
      <TextH1>Grid Sort</TextH1>
      <Row>
        <Col span={18} push={6} style={{ backgroundColor: "green" }}>
          col-18 col-push-6
        </Col>
        <Col span={6} pull={18} style={{ backgroundColor: "blue" }}>
          col-6 col-pull-18
        </Col>
      </Row>
      <NextPage>
        <Button
          type="primary"
          onClick={() => {
            {
              router.push("/grid/Alignment");
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
