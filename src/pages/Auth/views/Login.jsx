import { Col, Row } from "antd";
import React from "react";
import FormLogin from "../components/FormLogin";
import Slider from "../components/Slider";

const Login = () => {
  
  return (
    <Row className="login">
      <Col className="login__left" span={12}>
        <FormLogin />
      </Col>
      <Col span={12} className="login__right">
        <Slider />
      </Col>
    </Row>
  );
};

export default Login;
