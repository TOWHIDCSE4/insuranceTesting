import React from 'react';
import PropTypes from 'prop-types';
// Components
import { Row } from 'antd';

// Styles
import * as S from './styles';

export default function Modal({
  title,
  isModalOpen,
  handleOk,
  handleCancel,
  children,
  cancelText,
  okText,
  renderSelect,
  width,
}) {
  return (
    <S.Modal
      title={
        <Row justify='space-between'>
          <h3>{title}</h3>
          {renderSelect}
        </Row>
      }
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      closable={false}
      maskClosable={false}
      footer={[
        <Row key='footer' justify='end'>
          <S.ButtonCancel key='back' onClick={handleCancel}>
            {cancelText}
          </S.ButtonCancel>
          <S.Button key='submit' type='primary' onClick={handleOk}>
            {okText}
          </S.Button>
        </Row>,
      ]}
      width={width}
    >
      {children}
    </S.Modal>
  );
}

Modal.defaultProps = {
  width: '70vw',
};

Modal.prototype = {
  width: PropTypes.string || PropTypes.number,
};
