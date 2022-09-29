import { React, useState, useEffect } from 'react'
import Modal from '../../components/common/Modal'
import { Form, Row, Col, Input, Checkbox, notification, Popover, Link } from 'antd'
import { CameraOutlined } from '@ant-design/icons';
import useFormErrors from "../../hooks/useFormErrors";
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { changePasswords, updateUsers, sendAvatars } from '../../slices/configUser';
import { Button, Upload, Select } from "../../components/styles";
import ModalChangePass from './ModalChangePass';
import { useNavigate } from "react-router-dom";

const { Option } = Select;


function ConfigUser() {
  const [dataCity, setDataCity] = useState([])
  const [fileList, setFileList] = useState(null);
  const [showModal, setShowModal] = useState(false)
  const [fileChange, setFileChange] = useState(false)

  const dispatch = useDispatch()
  const userInfo = useSelector((state) => state.auth.me)
  // console.log(userInfo);
  const [form] = Form.useForm();
  useFormErrors(form);

  const onFinish = (values) => {
    if (fileList && fileList.length != 0 && fileChange ) {
      const formData = new FormData();
      formData.append('file', fileList[0].originFileObj)
      dispatch(sendAvatars(formData)) 
    }
    dispatch(updateUsers(values))
  };

  useEffect(() => {
    axios.get('https://provinces.open-api.vn/api/')
      .then(function (response) {
        setDataCity(response.data)
      })
    userInfo.avatar ? setFileList([{ url: userInfo.avatar }]) : []
  }, [])

  useEffect(() => {
    if (Object.keys(userInfo).length > 0) {
      form.setFieldsValue({ ...userInfo })
    } else {
      form.resetFields()
    }
  }, [userInfo])

  const handleFileList = ({ fileList: newFile }) => {
    if (newFile[0]?.originFileObj?.size > 2000000) {
      notification['warning']({
        message: 'Warning',
        description: 'File Không được vượt quá 2Mb.',
      });
    }
    else {
      setFileList(newFile);
      setFileChange(true)
    }
    console.log(newFile);
  };

  const content = (
    <div>
      <ModalChangePass closeCreateUser={() => setShowModal(false)} />
    </div>
  );
  const navigate = useNavigate();
  const goHome = () => {
    navigate('/');
  };


  return (
    <div>
      <div className="config_header">
        <h3>Cấu hình</h3>
        <Popover content={content} placement="bottomRight" trigger='click'
          open={showModal}
        >
          <Button type="primary" onClick={() => setShowModal(!showModal)}>
            <img src='../images/lock_icon.svg' />
            Đổi mật khẩu
          </Button>
        </Popover>
      </div>
      <Form form={form}
        name="basic"
        initialValues={{
          remember: true
        }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <div className="config_content">
          <div className="config_content_title">
            <h2>Thông tin cá nhân</h2>
          </div>
          <div className="config_content_body">
            <div className="config_content_body-avatar">
              <p className='avatar-title'>Ảnh đại diện:</p>
              <div className='manageContentInput-upload' style={{ borderRadius: 1 + 'rem' }}>
                <Upload
                  name='image'
                  listType='picture-card'
                  className='avatar-uploader'
                  showUploadList
                  onChange={handleFileList}
                  beforeUpload={Upload.LIST_IGNORE}
                  fileList={fileList}
                  accept='.jpeg,.jpg,.png,.webp,.svg'
                  maxCount={1}
                >
                  <div className='upload-content'>
                    <CameraOutlined />
                    <span>Tải ảnh lên</span>
                  </div>
                </Upload>
              </div>
            </div>
            <div className="config_content_body-infoUser">
              <Row gutter={[10, 13]}>
                <Col span={5}>
                  <Form.Item
                    label="Họ và tên"
                    name="fullname"
                    rules={[{
                      required: true,
                    }]}
                  >
                    <Input type='text' placeholder="Họ và tên"/>
                  </Form.Item>
                </Col>
                <Col span={5}>
                  <Form.Item
                    label="Số điện thoại"
                    name="phone"
                    rules={[{
                      required: true,
                    }]}
                  >
                    <Input type='number' placeholder="Số điện thoại"/>
                  </Form.Item>
                </Col>
                <Col span={5}>
                  <Form.Item
                    label="ID login"
                    name="loginId"
                  >
                    <Input disabled />
                  </Form.Item>
                </Col>
                <Col span={9}>
                  <Form.Item
                    label="Địa chỉ email"
                    name="email"
                    rules={[{
                      required: true,
                      type: "email",
                    },
                    ]}
                  >
                    <Input placeholder="Email"/>
                  </Form.Item>
                </Col>
                <Col span={5}>
                  <Form.Item
                    label="ID của người quản lý"
                    name="managerId"
                    rules={[{
                      required: true,
                    }]}
                  >
                    <Input type='text' placeholder="ID của người quản lý"/>
                  </Form.Item>
                </Col>
                <Col span={5}>
                  <Form.Item
                    label="Vùng hoạt động"
                    name="location"
                    rules={[{ required: true }]}
                  >
                    <Select
                      className="select-item-outline"
                      placeholder="Nhập"
                    >
                      {dataCity != [] && dataCity.map(item => {
                        return (
                          <Option key={item.code} value={item.codename}>{item.name}</Option>
                        )
                      })}
                    </Select>
                  </Form.Item>
                </Col>
              </Row>
            </div>
            <div className="config_content_body_checkbox-group">
              <Row>
                <Col span={11} className="border_right">
                  <Form.Item
                    valuePropName="checked"
                    name="isDefaultHelper"
                  >
                    <Checkbox className='checkbox-primary'>
                      Chế độ trợ giúp mặc định (hiện lời thoại trên các giao diện)
                    </Checkbox>
                  </Form.Item>
                </Col>
                <Col span={5} className="border_right">
                  <Form.Item
                    valuePropName="checked"
                    name="isTraining"
                  >
                    <Checkbox className='checkbox-primary'>
                      Chế độ đào tạo
                    </Checkbox>
                  </Form.Item>
                </Col>
                <Col span={8} className="border_right">
                  <Form.Item
                    valuePropName="checked"
                    name="isLanguageBaseLocation"
                  >
                    <Checkbox className='checkbox-primary'>
                      Chế độ ngôn ngữ theo vùng
                    </Checkbox>
                  </Form.Item>
                </Col>
              </Row>
            </div>
            <div className="config_content_body_button-group">
              <Button type='primary' onClick={goHome}>Về trang chủ</Button>
              <div className="config_content_body_button-group_right">
                <Button className='btn-danger'>Huỷ</Button>
                <Form.Item>
                  <Button type="primary" htmlType="submit">Lưu thay đổi</Button>
                </Form.Item>
              </div>
            </div>
          </div>
        </div>
      </Form>
    </div>
  )
}

export default ConfigUser
