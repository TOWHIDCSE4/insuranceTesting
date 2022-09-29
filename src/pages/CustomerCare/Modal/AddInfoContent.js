import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useTranslation} from 'react-i18next';
import {DatePicker, Select, Col, Form, Input, Row, Button} from "antd";
import {VALIDATE_MESSAGES, FORMAT_DATE, CUSTOMER_CARE_INFO} from '../../../ultis/constant';
import {createData, updateData} from '../../../slices/customerCare';
import useFormErrors from '../../../hooks/useFormErrors'
import moment from 'moment';
import * as S from '../../../components/styles'

const { Option } = Select;
const { TextArea } = Input;

export default function AddEventContent(props) {
  const [form] = Form.useForm();
  useFormErrors(form);
  const {t} = useTranslation();
  const {customerData} = useSelector((state) => state.customerCare);
  const {detailData , setVisibleModalAddInfo} = props;
  const dispatch = useDispatch();

  const handleSaveInfo = (values) => {
    values.date = moment(values.date)
    values.customerId = customerData.customerId
    if (Object.keys(detailData).length > 0) {
      values.id = detailData.id
      dispatch(updateData(values))
    } else {
      dispatch(createData(values))
    }
  }

  useEffect(() => {
    if (Object.keys(detailData).length > 0) {
      form.setFieldsValue({...detailData, ...{date: moment(detailData.date)}})
    } else {
      form.resetFields()
    }
  }, [detailData])

  return <Form layout="vertical" form={form} validateMessages={VALIDATE_MESSAGES} onFinish={handleSaveInfo}>
    <Row gutter={[6, 13]}>
      <Col span={6}>
        <Form.Item
          label={t('common.date')}
          name="date"
          rules={[{required: true}]}>
          <DatePicker className="input-item-outline" format={FORMAT_DATE}/>
        </Form.Item>
      </Col>
      <Col span={18}>
        <Form.Item
          label={t('common.type info')}
          name="info"
          rules={[{required: true}]}>
          <Select className="select-item-outline" placeholder={t('common.select')}>
            {
              CUSTOMER_CARE_INFO.map((value, index) => {
                return <Option key={index} value={value.value}>{value.label}</Option>
              })
            }
          </Select>
        </Form.Item>
      </Col>
      <Col span={24} className="m-b-10">
        <Form.Item
          label={t('common.content')}
          name="content"
          rules={[{required: true}]}>
          <TextArea rows={3} placeholder={t('common.input')} className="input-item-outline"/>
        </Form.Item>
      </Col>
      <Col span={24}>
        <Form.Item className="footer-modal">
          <S.Button key="back" danger onClick={() => setVisibleModalAddInfo(false)}>
            {t('common.cancel create')}
          </S.Button>
          <S.Button key="submit" htmlType="submit" type="primary">
            {t('common.create new')}
          </S.Button>
        </Form.Item>
      </Col>
    </Row>
  </Form>
}
