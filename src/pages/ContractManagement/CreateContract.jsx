import { React, useEffect } from 'react';
import {
  Button,
  Form,
  Input,
  Row,
  Col,
  Select,
  DatePicker,
  AutoComplete,
} from 'antd';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import {
  createContract,
  updateContract,
} from '../../slices/contractManagement';
import { useTranslation } from 'react-i18next';
import { getCustoms } from '../../slices/contractManagement';
import useFormErrors from '../../hooks/useFormErrors'

function CreateContract(props) {
  const { t } = useTranslation();
  const [form] = Form.useForm();
  useFormErrors(form);
  const { setVisibleModal, dataEdit } = props
  const customerName = useSelector((state) => state.contractManagement.custom);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCustoms({ name: '', limit: 10, offset: 0 }));
  }, []);

  var { Option } = AutoComplete;

  const onFinish = (values) => {
    (values.depositTerm == "Tháng") ? values.depositTerm = 30 : (values.depositTerm == "Nửa năm") ? values.depositTerm = 180 : values.depositTerm = 360
    const data = {
      contractNumber: values.contractNumber,
      customerId: 61,
      beneficiary: values.beneficiary,
      value: +values.value,
      startDate: moment(values.createAt._d).format(),
      duration: +values.duration,
      depositTerm: +values.depositTerm,
    };
    if (Object.keys(dataEdit).length > 0) {
      dispatch(updateContract({ id: dataEdit.id, data: data }));
    } else {
      dispatch(createContract(data));
    }
  };

  //autoComplete
  const onSearch = (searchText) => {
    dispatch(getCustoms({ name: searchText, limit: 10, offset: 0 }));
  };
  // useEffect(() => {
  //   form.setFieldsValue(dataEdit)
  // }, [form, dataEdit])

  useEffect(() => {
    (dataEdit.depositTerm == 30) ? dataEdit.depositTerm = "Tháng" : (dataEdit.depositTerm == 180) ? dataEdit.depositTerm = "Nửa năm" : (dataEdit.depositTerm == 360) ? dataEdit.depositTerm = "Năm" : null
    if (Object.keys(dataEdit).length > 0) {
      form.setFieldsValue({ ...dataEdit, ...{ date: moment(dataEdit.date) } })
    } else {
      form.resetFields()
    }
    // console.log({ ...dataEdit, ...{ date: moment(dataEdit.startDate) } });
  }, [dataEdit])

  return <Form
    layout="vertical"
    initialValues={{
      remember: true
    }}
    form={form}
    onFinish={onFinish}
    autoComplete='off'
  >
    <Row gutter={[6, 13]}>
      <Col span={6}>
        <Form.Item
          label='Mã số'
          name='contractNumber'
          rules={[{ required: true }]}
        >
          <Input placeholder='Nhập' type='number' className="input-item-outline" />
        </Form.Item>
      </Col>
      <Col span={6}>
        <Form.Item
          label='Tên người mua'
          name='customerName'
          rules={[{ required: true }]}
        >
          <AutoComplete
            onSearch={onSearch}
            dropdownMatchSelectWidth={400}
            placeholder='Nhập'
            className="select-item-outline"
          >
            {customerName.map((item) => (
              <Option value={item.fullname} key={item.customerId}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                  }}
                >
                  <span>{item.fullname}</span>
                  <span>{item.phone1}</span>
                </div>
              </Option>
            ))}
          </AutoComplete>
        </Form.Item>
      </Col>
      <Col span={6}>
        <Form.Item
          label='Tên người hưởng'
          name='beneficiary'
          rules={[{ required: true }]}
        >
          <Input placeholder='Nhập' className="input-item-outline" />
        </Form.Item>
      </Col>
      <Col span={6}>
        <Form.Item
          label='Giá trị'
          name='value'
          rules={[{ required: true }]}
        >
          <Input placeholder='Nhập' type='number' className="input-item-outline" />
        </Form.Item>
      </Col>
      <Col span={6}>
        {dataEdit.startDate ? (
          <Form.Item
            label='Ngày hiệu lực'
            name={["createAt"]}
            initialValue={moment(dataEdit.startDate)}
            rules={[{ required: true }]}
          >
            <DatePicker className="input-item-outline" format={'DD/MM/YYYY'} placeholder='DD/MM/YYYY' />
          </Form.Item>
        ) : (
          <Form.Item
            label='Ngày hiệu lực'
            name={["createAt"]}
            rules={[{ required: true }]}
          >
            <DatePicker className="input-item-outline" placeholder='DD/MM/YYYY' format={'DD/MM/YYYY'} />
          </Form.Item>
        )}
      </Col>
      <Col span={6}>
        <Form.Item
          label='Số năm nộp phí'
          name='duration'
          rules={[{ required: true }]}
        >
          <Input placeholder='Nhập' className="input-item-outline" />
        </Form.Item>
      </Col>
      <Col span={6}>
        <Form.Item
          label='Chu kỳ nộp phí'
          name='depositTerm'
          initialValue={dataEdit.depositTerm}
          rules={[{ required: true }]}
        >
          <Select className='select-item-outline' placeholder='Chọn'>
            <Option value='30'>Tháng</Option>
            <Option value='180'>Nửa năm</Option>
            <Option value='360'>Năm</Option>
          </Select>
        </Form.Item>
      </Col>
      <Col span={24}>
        <Form.Item className="footer-modal">
          <Button key="back" className="btn-danger" onClick={() => {setVisibleModal(false); form.resetFields()}}>
            {t('common.cancel')}
          </Button>
          <Button key="submit" className="btn-primary" htmlType="submit" type="primary">
            {Object.keys(dataEdit).length > 0 ? t('common.save') : t('common.create')}
          </Button>
        </Form.Item>
      </Col>
    </Row>
  </Form>
}

export default CreateContract;
