import { React, useState, useEffect } from 'react'
import { Form, Input, Button, Select, notification, Space } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import useFormErrors from "../../hooks/useFormErrors";
import { changePassword, login, resetPassword } from '../../slices/configUser'
import { useDispatch, useSelector } from 'react-redux';
import Lock from '../../assets/images/icons/lock.svg'


function ModalChangePass(props) {
  const { closeCreateUser } = props
  const dispatch = useDispatch()
  const userInfo = useSelector((state) => state.auth.me)
  const resetCode = useSelector((state) => state.configUser.resetCode)

  const onFinishChangePass =async (values) => {
    if (values.newPassword === values.confirmPassword) {
      dispatch(resetPassword({ loginId: userInfo.loginId }))
      dispatch(login({ username: userInfo.loginId, password: values.password }))
      dispatch(changePassword({ loginId: userInfo.loginId, code: resetCode, password: values.newPassword }))
      // console.log(values);
    }
  }
  const [form] = Form.useForm();
  useFormErrors(form);
  return (
    <div>
      <div className='form_change_password'>
        <div className="header_form">
          <img src={Lock} alt="" />
        </div>
        <div className="linear">
          <p>Đổi mật khẩu</p>
        </div>
        <Form form={form}
          initialValues={{
            remember: true
          }}
          onFinish={onFinishChangePass}
          autoComplete="off"
        >
          <div className="body_form">
            <div className="body_form-content">
              <Form.Item
                label="Mật khẩu cũ"
                name="password"
                rules={[{ required: true }]}
              >
                <Space direction="vertical">
                  <Input.Password
                    placeholder="Nhập mật khẩu cũ"
                    iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                  />
                </Space>
              </Form.Item>
              <Form.Item
                label="Mật khẩu mới"
                name="newPassword"
                rules={[{ required: true }]}
              >
                <Space direction="vertical">
                  <Input.Password
                    placeholder="Nhập mật khẩu mới"
                    iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                  />
                </Space>
              </Form.Item>
              <Form.Item
                name="confirmPassword"
                label="Nhập lại mật khẩu mới"
                rules={[{ required: true }]}
              >
                <Space direction="vertical">
                  <Input.Password
                    placeholder="Nhập lại mật khẩu"
                    iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                  />
                </Space>
              </Form.Item>
            </div>
          </div>
          <div className="footer_form">
            <Button className='btn-danger' onClick={() => { closeCreateUser(false); setTimeout(() => form.resetFields(), 200) }}>Huỷ</Button>
            <Form.Item>
              <Button type="primary" htmlType="submit" className='btn-primary'>Lưu mật khẩu</Button>
            </Form.Item>
          </div>
        </Form>
      </div>
    </div>
  )
}

export default ModalChangePass
