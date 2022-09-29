import React from 'react';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Modal } from 'antd';

export default function ModalConfirm({
  title = 'Xác nhận',
  content = 'Bạn có muốn thực hiện thao tác này?',
  confirmText = 'Xác nhận',
  cancelText = 'Huỷ bỏ',
  callApi,
}) {
  Modal.confirm({
    title,
    icon: <ExclamationCircleOutlined />,
    content,
    okText: confirmText,
    cancelText: cancelText,
    centered: true,

    onOk() {
      callApi();
    },
  });
}
