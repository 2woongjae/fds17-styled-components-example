import React from "react";
import { Row, Col } from "antd";

const colStyle = () => ({
  height: 50,
  backgroundColor: "red",
  opacity: Math.round(Math.random() * 100) / 100,
});

export default class App extends React.Component {
  render() {
    return (
      <div>
        {/* <Row>
          <Col span={12} style={colStyle()}>
            하이
          </Col>
          <Col span={12} style={colStyle()}>
            하이
          </Col>
        </Row>
        <Row>
          <Col span={8} style={colStyle()}>
            하이
          </Col>
          <Col span={8} style={colStyle()}>
            하이
          </Col>
          <Col span={8} style={colStyle()}>
            하이
          </Col>
        </Row>
        <Row>
          <Col span={6} style={colStyle()}>
            하이
          </Col>
          <Col span={6} style={colStyle()}>
            하이
          </Col>
          <Col span={6} style={colStyle()}>
            하이
          </Col>
          <Col span={6} style={colStyle()}>
            하이
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <div style={{ height: 50, backgroundColor: "red", opacity: 0.7 }} />
          </Col>
          <Col span={12}>
            <div style={{ height: 50, backgroundColor: "red", opacity: 0.7 }} />
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={8}>
            <div style={{ height: 50, backgroundColor: "red", opacity: 0.7 }} />
          </Col>
          <Col span={8}>
            <div style={{ height: 50, backgroundColor: "red", opacity: 0.7 }} />
          </Col>
          <Col span={8}>
            <div style={{ height: 50, backgroundColor: "red", opacity: 0.7 }} />
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={6}>
            <div style={{ height: 50, backgroundColor: "red", opacity: 0.7 }} />
          </Col>
          <Col span={6}>
            <div style={{ height: 50, backgroundColor: "red", opacity: 0.7 }} />
          </Col>
          <Col span={6}>
            <div style={{ height: 50, backgroundColor: "red", opacity: 0.7 }} />
          </Col>
          <Col span={6}>
            <div style={{ height: 50, backgroundColor: "red", opacity: 0.7 }} />
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12} offset={12}>
            <div style={{ height: 50, backgroundColor: "red", opacity: 0.7 }} />
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={8}>
            <div style={{ height: 50, backgroundColor: "red", opacity: 0.7 }} />
          </Col>
          <Col span={8} offset={8}>
            <div style={{ height: 50, backgroundColor: "red", opacity: 0.7 }} />
          </Col>
        </Row> */}
        <Row
          style={{
            height: "100vh",
          }}
          justify="center"
          align="middle"
        >
          <Col
            span={4}
            style={{ height: 300, backgroundColor: "red", opacity: 0.7 }}
          />
          <Col
            span={4}
            style={{ height: 300, backgroundColor: "red", opacity: 0.7 }}
          >
            로그인 창
          </Col>
        </Row>
      </div>
    );
  }
}
