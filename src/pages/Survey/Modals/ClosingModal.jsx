import React, { useState } from "react";
import { Popover, Divider } from "antd";
import { useTranslation } from "react-i18next";
import { useFormContext } from "react-hook-form";
import { FieldLabel } from "../../../components/controls";
import { Input, Button } from "../../../components/styles";

export const ClosingModal = ({ onSubmit }) => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const { control } = useFormContext();

  const handleOpenChange = (newOpen) => {
    setOpen(newOpen);
  };

  const onCancel = () => {
    setOpen(false);
  };

  const content = (
    <div className="closing-container">
      <div className="closing-body">
        <div className="form-group">
          <FieldLabel name="hintName" label="Tên gợi nhớ" />
          <Input control={control} name="hintName" className="form-control" />
        </div>
      </div>
      <Divider />
      <div className="closing-footer">
        <div className="closing-btn">
          <Button onClick={onCancel} onBlur={onCancel} block className="btn-danger">
            Hủy+
          </Button>
        </div>

        <div className="closing-btn">
          <Button type="primary" onClick={onSubmit} block>
            Tạo
          </Button>
        </div>
      </div>
    </div>
  );
  return (
    <Popover
      placement="bottomRight"
      content={content}
      trigger="click"
      onOpenChange={handleOpenChange}
      overlayClassName="closing-popover"
      visible={open}
    >
      <Button type="primary" block>
        {t("survey.save")}
      </Button>
    </Popover>
  );
};
