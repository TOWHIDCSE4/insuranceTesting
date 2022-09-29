import { Button, Checkbox, Form, Input, InputNumber } from "antd";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const ListCalculation = () => {
  const [Percent, setPercent] = useState(0);
  const [Amount, setAmount] = useState(0);
  const [TotalAmount, setTotalAmount] = useState(0);
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log(values);
    navigate("/advise/financial-solutions/minh-hoa-gia");
  };
  const onChange = (value) => {
    setAmount(value);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  useEffect(() => {
    setTotalAmount(Amount * 12 / (Percent / 100));
  }, [Amount, Percent]);

  return (
    <Form
      form={form}
      name="control-hooks"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off">
      <div className="container-right-middle">
        <Form.Item
          name="percantage"
          label="Lãi suất ngân hàng"
          rules={[
            {
              required: false,
            },
          ]}>
          {/* <InputNumber
            style={{ width: 50 }}
            defaultValue={0}
            min={0}
            formatter={(value) => `${value}%`}
            parser={(value) => value.replace("%", "")}
            onChange={onChange}
          /> */}
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
        <Form.Item
          name="amount"
          label="Tổng tiền chi tiêu thiết yếu/tháng"
          rules={[
            {
              required: false,
            },
          ]}>
          <InputNumber
            defaultValue={0}
            formatter={(value) =>
              `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            }
            parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
            onChange={onChange}
          />
          {/* <Input
            placeholder="0"
            type="text"
            onChange={(e) =>
              setAmount(e.target.value.replace(/\B(?=(\d{3})+(?!\d))/g, ","))
            }
            value={Amount}
            style={{ width: 120 }}
          /> */}
        </Form.Item>
      </div>
      <div className="container-right-bottom">
        <p>
          Thông tin quỹ:{" "}
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
