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
        <Form.Item
          name="name1"
          label="Tài sản hiện có"
          rules={[
            {
              required: true,
           
            },
          ]}>
          <Input placeholder="0" type="number" min={0} style={{ width: 152 }} />
        </Form.Item>
        <Form.Item
          name="name2"
          label="Kinh nghiệm đầu tư sinh lời"
          rules={[
            {
              required: true,
            
            },
          ]}>
          <Input placeholder="0" type="text" style={{ width: 152 }} />
        </Form.Item>
        <Form.Item
          name="name3"
          label="Số năm gấp đôi tài sản"
          rules={[
            {
              required: true,
           
            },
          ]}>
          <Input placeholder="0" type="number" min={0} style={{ width: 152 }} />
        </Form.Item>
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
