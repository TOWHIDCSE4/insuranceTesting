import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useTranslation} from 'react-i18next';
import {DatePicker, Select, Col, Form, Input, Row, Button} from "antd";
import {VALIDATE_MESSAGES, FORMAT_DATE} from '../../../ultis/constant';
import useFormErrors from "../../../hooks/useFormErrors";
import {createData, updateData} from '../../../slices/events';
import {getEvents} from '../../../services/events';
import moment from 'moment';
import _ from 'lodash';
import * as S from '../../../components/styles'

const { Option } = Select;
const { TextArea } = Input;

export default function AddEventContent(props) {
  const {t} = useTranslation();
  const {detailData, isTemplate, setVisibleModalAddEvent} = props;
  const [form] = Form.useForm();
  useFormErrors(form);
  const dispatch = useDispatch();
  const {customerData} = useSelector((state) => state.customerCare);
  const [eventsTemplate, setEventsTemplate] = useState([])
  const [selectedValue, setSelectedValue] = useState(null)

  const handleSaveEvent = (values) => {
    values.date = moment(values.date)
    values.isTemplate = isTemplate
    values.customerId = customerData.customerId
    if (Object.keys(detailData).length > 0) {
      values.id = detailData.id
      dispatch(updateData(values))
    } else {
      dispatch(createData(values))
    }
    setSelectedValue(null)
    setEventsTemplate([])
  }

  const getTemplate = async (val) => {
    setSelectedValue(null)
    const fieldValue = form.getFieldsValue()
    form.setFieldsValue({...fieldValue, ...{emailTemplate: '', smsTemplate: ''}})
    const res = await getEvents({isTemplate: true, date: moment(val).toISOString()});
    setEventsTemplate(res.data)
  }

  const selectTemplate = (value) => {
    setSelectedValue(value)
    let eventSelected = _.find(eventsTemplate, function(events) {
      return events.id === value;
    })
    const fieldValue = form.getFieldsValue()
    form.setFieldsValue({...fieldValue, ...{emailTemplate: eventSelected.emailTemplate, smsTemplate: eventSelected.smsTemplate}})
  }

  const resetModal = () => {
    setSelectedValue(null)
    setVisibleModalAddEvent(false)
    setEventsTemplate([])
  }

  useEffect(() => {
    if (Object.keys(detailData).length > 0) {
      form.setFieldsValue({...detailData, ...{date: moment(detailData.date)}})
    } else {
      form.resetFields()
    }
  }, [detailData])

  useEffect(() => {
    if (Object.keys(detailData).length > 0) {
      form.setFieldsValue({...detailData, ...{date: moment(detailData.date)}})
    } else {
      form.resetFields()
    }
  }, [])

  return <Form layout="vertical" form={form} validateMessages={VALIDATE_MESSAGES} onFinish={handleSaveEvent}>
    <Row gutter={[6, 13]}>
      <Col span={6}>
        <Form.Item
          label={t('common.date')}
          name="date"
          rules={[{required: true}]}>
          <DatePicker className="input-item-outline" format={FORMAT_DATE} onChange={getTemplate}/>
        </Form.Item>
      </Col>
      <Col span={6}>
        <Form.Item
          label={t('common.type')}
          name="type"
          rules={[{required: true}]}>
          <Select placeholder={t('common.select')} className="select-item-outline">
            <Option value="Hằng năm">Hằng năm</Option>
            <Option value="Một lần">Một lần</Option>
          </Select>
        </Form.Item>
      </Col>
      <Col span={12}>
        <Form.Item
          label={t('common.event')}
          name="name"
          rules={[{required: true}]}>
          <Input className='input-item-outline' placeholder="Nhập" />
        </Form.Item>
      </Col>
      <Col span={24}>
        <Form.Item
          label={t('customer care.event template')}>
          <Select value={selectedValue} onChange={selectTemplate} placeholder={t('common.select')} className="select-item-outline">
            {
              eventsTemplate.map((value) => {
                return <Option key={value.id} value={value.id}>{value.name}</Option>
              })
            }
          </Select>
        </Form.Item>
      </Col>
      <Col span={24}>
        <Form.Item
          label={t('customer care.sms template')}
          name="smsTemplate"
          rules={[{required: true}]}>
          <TextArea rows={2} placeholder={t('common.input')} className="input-item-outline"/>
        </Form.Item>
      </Col>
      <Col span={24} className="m-b-10">
        <Form.Item
          label={t('customer care.email template')}
          name="emailTemplate"
          rules={[{required: true}]}>
          <TextArea rows={4} placeholder={t('common.input')} className="input-item-outline"/>
        </Form.Item>
      </Col>
      <Col span={24}>
        <Form.Item className="footer-modal">
          <S.Button key="back" danger onClick={resetModal}>
            {t('common.cancel')}
          </S.Button>
          <S.Button key="submit" htmlType="submit" type="primary">
            {Object.keys(detailData).length > 0 ? t('common.save') : t('common.create')}
          </S.Button>
        </Form.Item>
      </Col>
    </Row>
  </Form>
}