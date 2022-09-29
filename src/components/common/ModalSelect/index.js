import React from "react";

// Components
import { Modal as AntModal, Row } from "antd";

// Styles
import * as S from "./styles";

export default function ModalSelect({
  title,
  isModalOpen,
  handleOk,
  handleCancel,
  children,
  cancelText,
  okText,
  renderSelect,
}) {
  return (
    <AntModal
      title={
        <Row justify="space-between">
          <h3>{title}</h3>
          {renderSelect}
        </Row>
      }
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      closable={false}
      footer={[
        <Row key="footer" justify="end">
          <S.ButtonCancel key="back" onClick={handleCancel}>
            {cancelText}
          </S.ButtonCancel>
          <S.Button key="submit" type="primary" onClick={handleOk}>
            {okText}
          </S.Button>
        </Row>,
      ]}
      width="70vw"
    >
      {children}
    </AntModal>
  );
}