import React from 'react';
import moment from 'moment';

// COMPONENTS
import { Col, Form } from 'antd';
import { Select } from '../../../../../../components/common';
//COMPONENT
import { Add, Delete } from '../../../../../../assets/images/icons/components';

//STYLES
import * as S from './styles';

const FormUsers = () => {
  const { Option } = Select;
  const initialValue = [{ fullName: '', phone: '', birthday: '' }];

  return (
    <Form.List initialValue={initialValue} name='users'>
      {(fields, { add, remove }) => (
        <>
          {fields.map(({ index, key, name, ...restField }) => (
            <S.WrapRow Key={index} gutter={8}>
              <Col span={6}>
                <Form.Item
                  {...restField}
                  name={[name, 'fullName']}
                  rules={[
                    { required: true, message: 'Vui lòng nhập họ và tên' },
                  ]}
                >
                  <S.WrapInput placeholder='Họ và tên' />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item
                  {...restField}
                  name={[name, 'phone']}
                  rules={[{ required: true, message: 'Vui lòng nhập số điện' }]}
                >
                  <S.WrapInput placeholder='SĐT' />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item
                  {...restField}
                  name={[name, 'sex']}
                  rules={[
                    { required: true, message: 'Vui lòng nhập giới tính' },
                  ]}
                >
                  <S.WrapSelect placeholder='Giới tính'>
                    <Option value={1}>Nam</Option>
                    <Option value={2}>Nữ</Option>
                    <Option value={3}>Khác</Option>
                  </S.WrapSelect>
                </Form.Item>
              </Col>
              <Col span={5}>
                <Form.Item
                  {...restField}
                  name={[name, 'birthday']}
                  rules={[
                    { required: true, message: 'Vui lòng nhập ngày sinh' },
                  ]}
                >
                  <S.WrapDatePicker
                    suffixIcon={null}
                    style={{ width: '100%', height: '40px' }}
                    placeholder='DD/MM/YYYY'
                    disabledDate={(current) => {
                      let customDate = moment().format('YYYY-MM-DD');
                      return (
                        current && current < moment(customDate, 'YYYY-MM-DD')
                      );
                    }}
                  />
                </Form.Item>
              </Col>
              <Col span={1}>
                <S.ButtonDelete
                  icon={<Delete width={13} height={13} />}
                  onClick={() => remove(name)}
                ></S.ButtonDelete>
              </Col>
            </S.WrapRow>
          ))}
          <Form.Item>
            <S.ButtonAdd icon={<Add />} onClick={() => add()}></S.ButtonAdd>
          </Form.Item>
        </>
      )}
    </Form.List>
  );
};

export default FormUsers;
