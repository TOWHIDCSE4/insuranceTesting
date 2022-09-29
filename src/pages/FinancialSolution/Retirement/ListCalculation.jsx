import { Button, Card, Checkbox, Col, Form, Input, InputNumber } from "antd";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const ListCalculation = () => {
  const [form] = Form.useForm();
  const [TotalAmount, setTotalAmount] = useState(0);
  const [TotalAmountAfterMinus, setTotalAmountAfterMinus] = useState(0);
  const [monthlyRetirementAmount, setMonthlyRetirementAmount] = useState(0);
  const [annualRetirementAmount, setAnnualRetirementAmount] = useState(0);
  const [inflationRate, setInflationRate] = useState(0);
  const [minusAmount, setMinusAmount] = useState(0);
  const onChange = (value) => {
    setMonthlyRetirementAmount(value);
  };
  const onChange1 = (value) => {
    setMinusAmount(value);
  };

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  useEffect(() => {
    setAnnualRetirementAmount(monthlyRetirementAmount * 12);
  }, [monthlyRetirementAmount]);
  useEffect(() => {
    let per = inflationRate / 100 + 1;
    let per2 = 3 / 100;

    setTotalAmount((annualRetirementAmount * Math.pow(per, 28)) / per2);
  }, [monthlyRetirementAmount, inflationRate]);

  useEffect(() => {
    setTotalAmountAfterMinus(TotalAmount - minusAmount);
  }, [TotalAmount, minusAmount]);

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
          label="Tuổi hiện tại"
          rules={[
            {
              required: true,
            },
          ]}>
          <Input placeholder="0" type="number" style={{ width: 50 }} />
        </Form.Item>
        <Form.Item
          name="name2"
          label="Tuổi nghỉ hưu dự kiến"
          rules={[
            {
              required: true,
            },
          ]}>
          <Input placeholder="0" type="number" style={{ width: 50 }} />
        </Form.Item>
        <Form.Item name="name3" label="Thời gian đến tuổi nghỉ hưu còn">
          <p className="form-input-text">28 năm</p>
        </Form.Item>
        <Form.Item
          name="name4"
          label="Số tiền hằng tháng khi nghỉ hưu"
          rules={[
            {
              required: true,
            },
          ]}>
          <InputNumber
            style={{ width: 152 }}
            initialvalues={0}
            formatter={(value) =>
              `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            }
            parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
            onChange={onChange}
          />
        </Form.Item>

        <Form.Item name="name5" label="Số tiền hằng năm khi nghỉ hưu">
          <p className="form-input-text">
            {annualRetirementAmount > 0 &&
              annualRetirementAmount
                .toFixed(2)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            {(annualRetirementAmount < 1 || isNaN(annualRetirementAmount)) &&
              "00.00"}
          </p>
        </Form.Item>

        <Form.Item
          name="name6"
          label="Thời gian nghỉ hưu mong muốn"
          rules={[
            {
              required: true,
            },
          ]}>
          <Input placeholder="0" type="number" style={{ width: 152 }} />
        </Form.Item>
        <Form.Item
          name="name7"
          label="Số tiền đã có"
          rules={[
            {
              required: true,
            },
          ]}>
          <InputNumber
            style={{ width: 152 }}
            initialvalues={0}
            formatter={(value) =>
              `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            }
            parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
            onChange={onChange1}
          />
        </Form.Item>
        <Form.Item
          name="name8"
          label="Tỷ lệ lạm phát"
          rules={[
            {
              required: true,
            },
          ]}>
          <div className="percentage-field">
            <Input
              className="percentage-input"
              onChange={(e) => setInflationRate(Number(e.target.value))}
              placeholder="0"
              type="text"
              style={{ width: 45, paddingRight: 0 }}
              value={inflationRate}
            />
            <span className="pIcon">%</span>
          </div>
        </Form.Item>
        <Form.Item
          name="name9"
          label="Tỷ suất sinh lời hằng năm"
          rules={[
            {
              required: true,
            },
          ]}>
          <div className="percentage-field">
            <Input
              className="percentage-input"
              // onChange={(e) => setPercent(Number(e.target.value))}
              placeholder="0"
              type="text"
              style={{ width: 45, paddingRight: 0 }}
              // value={Percent}
            />
            <span className="pIcon">%</span>
          </div>
        </Form.Item>
      </div>
      <div className="container-right-bottom">
        <p className="bottom-para">
          Tổng số tiền cần cho tương lai:
          <span className="total-amount">
            {TotalAmount > 0 &&
              TotalAmount.toFixed(2)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            {(TotalAmount < 1 || isNaN(TotalAmount)) && "00.00"}
          </span>
        </p>

        <p>
          Số tiền còn thiếu khi nghỉ hưu:
          <span className="total-amount">
            {TotalAmountAfterMinus > 0 &&
              TotalAmountAfterMinus.toFixed(2)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            {(TotalAmountAfterMinus < 1 || isNaN(TotalAmountAfterMinus)) &&
              "00.00"}
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
