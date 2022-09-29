import { Button, Popover, Divider, Form, Input } from "antd";
import React, { useState } from "react";

export const ClosingModal = () => {
  const [open, setOpen] = useState(false);

  const handleOpenChange = (newOpen) => {
    setOpen(newOpen);
  };

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const content = (
    <div className="closing-container">
      <Form
        name="closing"
        initialValues={{
          reminiscent_name: "",
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <div className="closing-body">
          <div className="form-group">
            <Form.Item
              label="Tên gợi nhớ"
              name="reminiscent_name"
              labelCol={{ span: 24 }}
            >
              <Input
                placeholder="Enter your Number"
                className="closing__input"
              />
            </Form.Item>
          </div>
        </div>
        <Divider />
        <div className="closing-footer">
          <div className="closing-btn">
            <Button
              type="primary"
              htmlType="button"
              className="btn-danger"
              block
            >
              Hủy+
            </Button>
          </div>

          <div className="closing-btn">
            <Button
              type="primary"
              htmlType="submit"
              className="btn-primary"
              block
            >
              Tạo
            </Button>
          </div>
        </div>
      </Form>
    </div>
  );
  return (
    <Popover
      placement="bottomRight"
      content={content}
      trigger="click"
      onOpenChange={handleOpenChange}
      overlayClassName="closing-popover"
    >
      <Button
        type="primary"
        htmlType="button"
        className="btn-primary finance-btn-small"
        block
      >
        Chốt hợp đồng
      </Button>
    </Popover>
  );
};
