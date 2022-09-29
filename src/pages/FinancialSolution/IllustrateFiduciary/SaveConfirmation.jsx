import React from "react";
import { Popconfirm, Button } from "antd";

export const SaveConfirmation = () => {
  const onConfirm = (e) => {
    console.log("ok button clicked");
  };

  const onCancel = (e) => {
    console.log("cancel button clicked");
  };
  return (
    <Popconfirm
      title="Are you wanted save record?"
      onConfirm={onConfirm}
      onCancel={onCancel}
      okText="Yes"
      cancelText="No"
      placement="leftBottom"
      overlayClassName="save-confirmation"
    >
      <Button
        type="primary"
        htmlType="button"
        className="btn-primary finance-btn-small"
        block
      >
        Lưu
      </Button>
    </Popconfirm>
  );
};
