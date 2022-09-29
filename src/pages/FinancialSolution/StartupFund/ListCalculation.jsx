import { Button, Checkbox, Form, Select, Input } from "antd";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const ListCalculation = () => {
  const [form] = Form.useForm();
  const [Percent, setPercent] = useState(0);
  const [power, setPow] = useState(0);
  const [TotalAmount, setTotalAmount] = useState(0);
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  useEffect(() => {
    let per = Percent / 100 + 1;

    setTotalAmount(1000000000 * Math.pow(per, power));
  }, [Percent, power]);
  const { Option } = Select;
  return (
    <Form
      form={form}
      name="control-hooks"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off">
      <div className="container-right-middle">
        <Form.Item
          name="name1"
          label="Ngành nghề khởi nghiệp"
          className="input-item"
          rules={[
            {
              required: true,
            },
          ]}>
          <Select placeholder="Ăn uống" style={{ width: 152 }}>
            <Option value="value1">Tháng</Option>
            <Option value="value2">Nửa năm</Option>
            <Option value="value3">Năm</Option>
          </Select>
        </Form.Item>
        <Form.Item name="name2" label="Số vốn cần thiết">
          <p className="form-input-text">1,000,000,000</p>
        </Form.Item>

        <Form.Item
          name="name3"
          label="Số năm chuẩn bị"
          rules={[
            {
              required: true,
            },
          ]}>
          <Input
            placeholder="0"
            type="number"
            min={0}
            style={{ width: 40 }}
            onChange={(e) => setPow(Number(e.target.value))}
          />
        </Form.Item>
        <Form.Item
          name="name4"
          label="Tỷ lệ lạm phát"
          rules={[
            {
              required: true,
            },
          ]}>
          <div className="percentage-field">
            <Input
              className="percentage-input"
              onChange={(e) => setPercent(Number(e.target.value))}
              placeholder="0"
              type="text"
              style={{ width: 45, paddingRight: 0 }}
              value={Percent}
            />
            <span className="pIcon">%</span>
          </div>
        </Form.Item>
      </div>
      <div className="container-right-bottom">
        <p>
          Tổng số tiền cần cho khởi nghiệp:{" "}
          <span className="total-amount">
            {TotalAmount > 0 &&
              TotalAmount.toFixed(2)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            {(TotalAmount < 1 || isNaN(TotalAmount)) && "00.00"}
          </span>
        </p>
      </div>

      <div className="container-right-submit">
        <Form.Item name="remember" valuePropName="checked">
          <Checkbox>Không còn tiềm năng</Checkbox>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="btn-primary">
            Bảng minh họa
          </Button>
        </Form.Item>
      </div>
    </Form>
  );
};

export default ListCalculation;
