import React from 'react';
import {useSelector} from 'react-redux';
import {Modal, Spin} from "antd";
import {LOADING_STATUS} from '../../../ultis/constant';

export default function ModalCommon(props) {
  const {
    isVisible,
    setIsVisible,
    title,
    width = 600,
    content,
  } = props;
  const { loading } = useSelector((state) => state.loading);

  return <Modal
    className="modal-custom"
    title={title}
    centered
    open={isVisible}
    width={width}
    footer={null}
    onCancel={() => setIsVisible(false)}
  >
    <Spin spinning={loading === LOADING_STATUS.pending}>
      {content}
    </Spin>
  </Modal>
}
