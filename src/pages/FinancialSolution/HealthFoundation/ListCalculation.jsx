import { Button, Select, Checkbox, Form, Input } from "antd";
import React from "react";

const ListCalculation = () => {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const { Option } = Select;
  return (
    <Form
      form={form}
      name="control-hooks"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off">
      <div className="container-right-middle">
        <Form.Item name="name1" label="Nền giáo dục" className="input-item">
          <Select placeholder="Công lập" style={{ width: 152 }}>
            <Option value="value1">Tháng</Option>
            <Option value="value2">Nửa năm</Option>
            <Option value="value3">Năm</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="name2"
          label="Học phí hằng năm"
          rules={[
            {
              required: true,
              message: "Học phí hằng năm",
            },
          ]}>
          <Input placeholder="0" type="number" min={0} style={{ width: 152 }} />
        </Form.Item>

        <Form.Item
          name="name3"
          label="Số con"
          rules={[
            {
              required: true,
              message: "Số con",
            },
          ]}>
          <Input placeholder="0" type="number" min={0} style={{ width: 40 }} />
        </Form.Item>
        <Form.Item
          name="name4"
          label="Số tuổi vào đại học"
          rules={[
            {
              required: true,
              message: "Số tuổi vào đại học",
            },
          ]}>
          <Input placeholder="0" type="number" min={0} style={{ width: 40 }} />
        </Form.Item>
        <Form.Item
          name="name5"
          label="Tuổi con thứ nhất"
          rules={[
            {
              required: true,
              message: "Tuổi con thứ nhất",
            },
          ]}>
          <Input placeholder="0" type="number" min={0} style={{ width: 40 }} />
        </Form.Item>
        <Form.Item
          name="name6"
          label="Tuổi con thứ 2"
          rules={[
            {
              required: true,
              message: "Tuổi con thứ 2",
            },
          ]}>
          <Input placeholder="0" type="number" min={0} style={{ width: 40 }} />
        </Form.Item>

        <Form.Item
          name="name9"
          label="Số năm đại học"
          rules={[
            {
              required: true,
              message: "Số năm đại học",
            },
          ]}>
          <Input placeholder="0" type="number" min={0} style={{ width: 40 }} />
        </Form.Item>
        <Form.Item
          name="name10"
          label="Tổng tiền đã có"
          rules={[
            {
              required: true,
              message: "Tổng tiền đã có",
            },
          ]}>
          <Input placeholder="0" type="number" min={0} style={{ width: 152 }} />
        </Form.Item>
        <Form.Item
          name="name11"
          label="Tỷ lệ lạm phát"
          rules={[
            {
              required: true,
              message: "Tỷ lệ lạm phát",
            },
          ]}>
          <Input placeholder="0" type="text" style={{ width: 40 }} />
        </Form.Item>
        <Form.Item
          name="name12"
          label="Tỷ suất sinh lời hằng năm"
          rules={[
            {
              required: true,
              message: "Tỷ suất sinh lời hằng năm",
            },
          ]}>
          <Input placeholder="0" type="text" style={{ width: 40 }} />
        </Form.Item>

        <Form.Item
          name="name13"
          label="Chi tiêu hàng tháng"
          rules={[
            {
              required: true,
              message: "Chi tiêu hàng tháng",
            },
          ]}>
          <Input placeholder="0" type="number" min={0} style={{ width: 152 }} />
        </Form.Item>
      </div>
      <div className="container-right-bottom">
        <p className="bottom-para">
          Tổng số tiền cần cho tương lai:{" "}
          <span className="total-amount">4,000,000,000</span>
        </p>
        <p>
          Số tiền còn thiếu :{" "}
          <span className="total-amount">3,000,000,000</span>
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
