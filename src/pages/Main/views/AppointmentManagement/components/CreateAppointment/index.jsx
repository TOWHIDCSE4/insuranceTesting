import React, { useState } from 'react';
import PropTypes from 'prop-types';

//COMPONENTS
import { Col, Form } from 'antd';
import TimePicker from '../TimePicker';
import { Select, ModalSelect } from '../../../../../../components/common';
import { Calender } from '../../../../../../assets/images/icons/components';

// STYLES
import * as S from './styles';
import FormUsers from '../FromUsers';

export const CreateAppointment = ({ open, handleCancel }) => {
  const { Option } = Select;
  const [form] = Form.useForm();
  const [typeId, setTypeId] = useState(3);
  const handleChangeSelectCustomer = (value) => {
    setTypeId(value);
  };

  const onFinish = (value) => {
    console.log(value);
    // onCancel();
  };

  const onCancel = () => {
    form.resetFields();
    handleCancel();
  };

  return (
    <ModalSelect
      title='Tạo mới lịch hẹn'
      width='650px'
      isModalOpen={open}
      handleCancel={onCancel}
      handleOk={form.submit}
      cancelText='Huỷ tạo'
      okText='Tạo lịch hẹn'
      renderSelect={
        <Select
          defaultValue={typeId}
          onChange={(selected) => handleChangeSelectCustomer(selected)}
          style={{ width: '150px' }}
        >
          <Option value={1}>Cá nhân</Option>
          <Option value={3}>Doanh nghiệp</Option>
          {/* <Option value={2}>NV doanh nghiệp</Option> */}
        </Select>
      }
    >
      <Form form={form} colon={false} layout='vertical' onFinish={onFinish}>
        <S.WrapRow gutter={12}>
          <Col span={12}>
            <Form.Item
              label='Tên khách hàng'
              name='name'
              rules={[
                {
                  required: true,
                  message: 'Vui lòng nhập tên khách hàng',
                },
              ]}
            >
              <S.WrapInput />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label='Nội dung lịch hẹn'
              name='descripton'
              rules={[
                {
                  required: true,
                  message: 'Vui lòng nhập nội dung lịch hẹn',
                },
              ]}
            >
              <S.WrapInput />
            </Form.Item>
          </Col>
        </S.WrapRow>
        <S.WrapRow>
          <S.WrapTitle>Thời gian</S.WrapTitle>
        </S.WrapRow>
        <S.WrapRow gutter={8}>
          <Col span={8}>
            <Form.Item
              name='date'
              rules={[
                {
                  required: true,
                  message: 'Vui lòng nhập thời gian',
                  // message: `${t('potential customers.message.birthday')}`,
                },
              ]}
            >
              <S.WrapDatePicker
                format={'DD/MM/YYYY'}
                suffixIcon={<Calender color='#999999' />}
                style={{ width: '100%' }}
                placeholder='DD/MM/YYYY'
              />
            </Form.Item>
          </Col>

          <Col span={16}>
            <TimePicker />
          </Col>
        </S.WrapRow>
        <S.WrapRow gutter={12}>
          <Col span={24}>
            <Form.Item label='Địa điểm' name='address'>
              <S.WrapInput />
            </Form.Item>
          </Col>
        </S.WrapRow>
        <S.WrapRow gutter={12}>
          <Col span={24}>
            <Form.Item label='Ghi Chú' name='note'>
              <S.WrapInput />
            </Form.Item>
          </Col>
        </S.WrapRow>
        {typeId === 3 && (
          <>
            <S.WrapRow>
              <S.WrapTitleUser>Thông tin người tham gia</S.WrapTitleUser>
            </S.WrapRow>
            <FormUsers />
          </>
        )}
      </Form>
    </ModalSelect>
  );
};

CreateAppointment.prototype = {
  open: PropTypes.bool,
  handleCancel: PropTypes.func,
};

export default CreateAppointment;
