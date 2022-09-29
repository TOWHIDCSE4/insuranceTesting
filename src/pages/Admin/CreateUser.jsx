import {React, useState, useEffect} from 'react'
import { Col, Row, Checkbox, Button, Form, Input, Select } from 'antd';
import "../../assets/scss/Admin/create-user.scss"
import { useDispatch, useSelector } from 'react-redux';
import {createUser} from '../../slices/userManagement';
import axios from 'axios';
import useFormErrors from "../../hooks/useFormErrors";
const {Option} = Select;

function Create_user(props) {
  const {closeCreateUser} = props
  //validate from api
  const [form] = Form.useForm();
  useFormErrors(form);
  const [dataCity, setDataCity]= useState([])
  const loading = useSelector((state)=>state.loading)
  const dispatch= useDispatch()
  
  useEffect(() => {
    axios.get('https://provinces.open-api.vn/api/')
      .then(function (response) {
        setDataCity(response.data)
      })
  },[])

  const onFinish = (values) => {
    console.log(values);
    dispatch(createUser(values))
  };

  return (
    <div className='container_create-user'>
      <Form name="create_user-form" form={form}
        initialValues={{
          remember: true
        }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Row gutter={[8, 16]}>
          <Col span={8} >
            <Form.Item
              label="ID"
            >
              <Input type="text" placeholder='Gen tự động' disabled />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              label="Họ và tên"
              name="fullname"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input type="text" placeholder='Nhập' />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              label="Sô điện thoại"
              name="phone"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input type="number" placeholder='Nhập' />
            </Form.Item>
          </Col>

          <Col span={8}>
            <Form.Item
              label="ID login"
              name="loginId"
              rules={[
                {
                  validator(_,) {
                    if (loading.message == "user_exist") {
                      return Promise.reject('Tài khoản đã tồn tại');
                    }
                    return Promise.resolve();
                  },
                }
              ]}
            >
              <Input type="text" placeholder='Nhập' />
            </Form.Item>
          </Col>
          <Col span={16}>
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  validator(_,) {
                    if (loading.message == "user_exist") {
                      return Promise.reject('Tài khoản đã tồn tại');
                    }
                    return Promise.resolve();
                  },
                }
              ]}
            >
              <Input type="text" placeholder='Nhập' />
            </Form.Item>
          </Col>
        </Row>
        <Row justify="start" className='group_checkbox '>
          <Col span={5}>
            <Form.Item
              name="isAdmin"
              valuePropName="checked"
            >
              <Checkbox className='checkbox-primary'>Admin</Checkbox>
            </Form.Item>
          </Col>
          <Col span={5}>
            <Form.Item
              name="qna"
              valuePropName="checked"
            >
              <Checkbox className='checkbox-primary'>Hỏi đáp</Checkbox>
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item
              name="isPaid"
              valuePropName="checked"
            >
              <Checkbox className='checkbox-primary'>Thanh toán</Checkbox>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[8, 16]}>
          <Col span={16}>
            <Form.Item
              label="Vùng hoạt động"
              name="location"
            >
              <Select
                placeholder="Nhập"
                style={{

                }}
                // onChange={handleChangeSelect}
              >
                {dataCity != [] && dataCity.map(item=>{
                  return(
                    <Option key={item.code} value={item.codename}>{item.name}</Option>
                  )
                })}
              </Select>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              name="idLoginUserManager"
              label="ID login người quản lý"
            >
              <Input type="text" placeholder='Nhập' />
            </Form.Item>
          </Col>
        </Row>
        <div className="line line_bottom"></div>
        <div className="group_btn">
          <Button className='btn-danger' onClick={ () => closeCreateUser(false)}>Huỷ tạo</Button>
          <Form.Item>
            <Button type="primary" htmlType="submit" className='btn-primary'>Tạo mới</Button>
          </Form.Item>
        </div>
      </Form>
    </div>
  )
}

export default Create_user
