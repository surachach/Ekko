import React from "react";
import { Button } from "antd";
import "antd/dist/antd.css";
import MainLayout from "../../components/layout/MainLayout";
import styled from "styled-components";
import Responsive from "./Responsive";
import { useRouter } from "next/router";
import PushBack from "../../components/button/push-back";
import Typesetting from "./Typesetting";

import { Col, Divider, Row } from "antd";

export default function OrderPage() {
  const router = useRouter();
  return (
    <MainLayout>
      <TextH1>Order</TextH1>
      <Divider orientation="left">Normal</Divider>
      <Row
        style={{
          backgroundColor: "grey",
          height: "200px",
          padding: "20px",
        }}
        justify="space-around"
      >
        <Col
          span={6}
          order={4}
          style={{
            backgroundColor: "salmon",
            textAlign: "center",
            alignItems: "center",
          }}
        >
          1 col-order-4
        </Col>
        <Col
          span={6}
          order={3}
          style={{
            backgroundColor: "salmon",
            textAlign: "center",
            alignItems: "center",
          }}
        >
          2 col-order-3
        </Col>
        <Col
          span={6}
          order={2}
          style={{
            backgroundColor: "salmon",
            textAlign: "center",
            alignItems: "center",
          }}
        >
          3 col-order-2
        </Col>
        <Col
          span={6}
          order={1}
          style={{
            backgroundColor: "salmon",
            textAlign: "center",
            alignItems: "center",
          }}
        >
          4 col-order-1
        </Col>
      </Row>
      <br />

      <Divider orientation="left">Responsive</Divider>
      <Row
        style={{
          backgroundColor: "grey",
          height: "200px",
          padding: "20px",
          display: "flex",
        }}
      >
        <Col
          span={6}
          xs={{
            order: 1,
          }}
          sm={{
            order: 2,
          }}
          md={{
            order: 3,
          }}
          lg={{
            order: 4,
          }}
          style={{ backgroundColor: "salmon", textAlign: "center" }}
        >
          1 col-order-responsive
        </Col>
        <Col
          span={6}
          xs={{
            order: 2,
          }}
          sm={{
            order: 1,
          }}
          md={{
            order: 4,
          }}
          lg={{
            order: 3,
          }}
          style={{ backgroundColor: "salmon", textAlign: "center" }}
        >
          2 col-order-responsive
        </Col>
        <Col
          span={6}
          xs={{
            order: 3,
          }}
          sm={{
            order: 4,
          }}
          md={{
            order: 2,
          }}
          lg={{
            order: 1,
          }}
          style={{ backgroundColor: "salmon", textAlign: "center" }}
        >
          3 col-order-responsive
        </Col>
        <Col
          span={6}
          xs={{
            order: 4,
          }}
          sm={{
            order: 3,
          }}
          md={{
            order: 1,
          }}
          lg={{
            order: 2,
          }}
          style={{ backgroundColor: "salmon", textAlign: "center" }}
        >
          4 col-order-responsive
        </Col>
      </Row>
      <div>
        <br />
        <h2>
          Order คือการจัดเรียง ตำแหน่งแนวนอน โดยจะสามารถ เลือกตำแหน่งของ
          กล่องที่ จะจัดได้ โดยระบุลงใน order
        </h2>
      </div>
      <br />
      <TextH1>Responsive</TextH1>
      <Responsive />
      {/* หน้าใหม่ */}
      <TextH1>Typesetting</TextH1>
      <br />
      <Typesetting />
      <PushBack />
    </MainLayout>
  );
}

const TextH1 = styled.h1`
  font-size: 20px;
`;
