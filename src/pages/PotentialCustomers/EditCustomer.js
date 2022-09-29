import React, { useMemo, useState } from "react";
import moment from "moment";
import { Col, Form, Row } from "antd";
import Modal from "../../components/common/ModalSelect";
import Select from "../../components/common/Select";
import Input from "../../components/common/Input";
import DatePicker from "../../components/common/DatePicker";
import { useTranslation } from "react-i18next";
import { acquaintanceLevel, marriageStatus } from "../../constants/common";
import { useDispatch, useSelector } from "react-redux";
import { updatePotentialCustomer } from "../../slices/potentialCustomersSlice";
import { useEffect } from "react";
import { REGEX_PHONE } from "./constants";

export default function EditCustomer({ isModalOpen, handleCancel, data }) {
  const { Option } = Select;
  const [form] = Form.useForm();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [maritalStatusF, setMaritalStatusF] = useState();
  const [acquaintanceLevelStatus, setAcquaintanceLevelStatus] = useState();
  const [typeId, setTypeId] = useState(data.typedId);
  const companies = useSelector(
    (state) => state.potentialCustomersReducer.companies,
  );

  const marriageOptions = useMemo(
    () =>
      marriageStatus.map(({ label, value }) => (
        <Option key={value} value={value}>
          {label}
        </Option>
      )),
    [marriageStatus],
  );

  const acquaintanceLevelOptions = useMemo(
    () =>
      acquaintanceLevel.map(({ label, value }) => (
        <Option key={value} value={value}>
          {label}
        </Option>
      )),
    [acquaintanceLevel],
  );

  const companyOptions = useMemo(
    () =>
      companies.map(({ name, companyId }) => (
        <Option key={companyId} value={companyId}>
          {name}
        </Option>
      )),
    [companies],
  );

  const handleChangeSelectCustomer = (value) => {
    setTypeId(value);
  };

  const onFinish = (value) => {
    dispatch(
      updatePotentialCustomer({
        ...value,
        customerId: data.customerId,
        typeId,
      }),
    );
    handleCancel();
  };

  const onCancel = () => {
    handleCancel();
  };

  useEffect(() => {
    if (data) {
      setTypeId(data.typeId);
    }
  }, [data]);

  return (
    <Modal
      title="Chi tiết khách hàng"
      isModalOpen={isModalOpen}
      handleCancel={onCancel}
      handleOk={form.submit}
      cancelText="Huỷ cập nhật"
      okText="Cập nhật khách hàng"
      renderSelect={
        <Select
          value={typeId}
          onChange={(selected) => handleChangeSelectCustomer(selected)}
          style={{ width: "150px" }}
        >
          <Option disabled={data.typeId === 3} value={1}>
            Cá nhân
          </Option>
          <Option disabled value={3}>
            Doanh nghiệp
          </Option>
          <Option disabled={data.typeId === 3} value={2}>
            NV doanh nghiệp
          </Option>
        </Select>
      }
    >
      <Form form={form} colon={false} layout="vertical" onFinish={onFinish}>
        {typeId === 3 ? (
          <>
            <Row gutter={12}>
              <Col span={16}>
                <Form.Item
                  label="Tên doanh nghiệp"
                  name="fullname"
                  initialValue={data.name}
                  rules={[
                    {
                      required: true,
                      message: `${t("potential customers.message.name")}`,
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  label="Số điện thoại"
                  name="phone1"
                  initialValue={data.phone1}
                  rules={[
                    {
                      required: true,
                      message: `${t("potential customers.message.phone1")}`,
                    },
                    {
                      pattern: REGEX_PHONE,
                      message: "Vui lòng nhập đúng số điện thoại",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={12}>
              <Col span={24}>
                <Form.Item
                  label="Địa chỉ"
                  name="address"
                  initialValue={data.address}
                  rules={[
                    {
                      required: true,
                      message: `${t("potential customers.message.address")}`,
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
            </Row>
          </>
        ) : (
          <>
            <Row gutter={12}>
              <Col span={6}>
                <Form.Item
                  label="Họ và tên"
                  name="name"
                  initialValue={data.fullname}
                  rules={[
                    {
                      required: true,
                      message: `${t("potential customers.message.name")}`,
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item
                  label="Số điện thoại 1"
                  name="phone1"
                  initialValue={data.phone1}
                  rules={[
                    {
                      required: true,
                      message: `${t("potential customers.message.phone1")}`,
                    },
                    {
                      pattern: REGEX_PHONE,
                      message: "Vui lòng nhập đúng số điện thoại",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item
                  label="Số điện thoại 2"
                  name="phoneNumber2"
                  initialValue={data.phone2}
                  rules={[
                    {
                      pattern: REGEX_PHONE,
                      message: "Vui lòng nhập đúng số điện thoại",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item
                  label="Số điện thoại 3"
                  name="phoneNumber3"
                  initialValue={data.phone3}
                  rules={[
                    {
                      pattern: REGEX_PHONE,
                      message: "Vui lòng nhập đúng số điện thoại",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={12}>
              <Col span={6}>
                <Form.Item
                  label="Hôn nhân"
                  name="maritalStatus"
                  initialValue={+data.maritalStatus}
                  rules={[
                    {
                      required: true,
                      message: `${t(
                        "potential customers.message.maritalStatus",
                      )}`,
                    },
                  ]}
                >
                  <Select
                    value={maritalStatusF}
                    placeholder="Chọn"
                    onChange={(selected) => setMaritalStatusF(selected)}
                  >
                    {marriageOptions}
                  </Select>
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item
                  label="Thu nhập"
                  name="income"
                  initialValue={data.income}
                  rules={[
                    {
                      required: true,
                      message: `${t("potential customers.message.income")}`,
                    },
                    {
                      validator: (_, value) =>
                        value >= 10000000
                          ? Promise.resolve()
                          : Promise.reject(
                            new Error("Thu nhập tối thiểu 10.000.000đ"),
                          ),
                    },
                  ]}
                >
                  <Input type="number" />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item
                  label="Mức độ thân quen"
                  name="acquaintanceLevel"
                  initialValue={+data.acquaintanceLevel}
                  rules={[
                    {
                      required: true,
                      message: `${t(
                        "potential customers.message.acquaintanceLevel",
                      )}`,
                    },
                  ]}
                >
                  <Select
                    value={acquaintanceLevelStatus}
                    placeholder="Chọn"
                    onChange={(selected) =>
                      setAcquaintanceLevelStatus(selected)
                    }
                  >
                    {acquaintanceLevelOptions}
                  </Select>
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item
                  label="Ngày sinh"
                  name="dob"
                  initialValue={moment(data.dob)}
                  rules={[
                    {
                      required: true,
                      message: `${t("potential customers.message.birthday")}`,
                    },
                    {
                      validator: (_, value) =>
                        new Date().getFullYear() -
                          new Date(value).getFullYear() >
                        18
                          ? Promise.resolve()
                          : Promise.reject(
                            new Error("Số tuổi phải lớn hơn 18"),
                          ),
                    },
                  ]}
                >
                  <DatePicker
                    style={{ width: "100%" }}
                    defaultValue={moment(data.dob, "YYYY-MM-DD")}
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={12}>
              <Col span={6}>
                <Form.Item
                  label="Nghề nghiệp"
                  name="job"
                  initialValue={data.job}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item
                  label="Doanh nghiệp"
                  initialValue={
                    typeId === 2 ? data.companyId : data.companyText
                  }
                  name={`${typeId === 2 ? "companyId" : "companyText"}`}
                >
                  {typeId === 2 ? (
                    <Select placeholder="Chọn">{companyOptions}</Select>
                  ) : (
                    <Input />
                  )}
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="Email"
                  name="email"
                  initialValue={data.email}
                  rules={[{ type: "email" }]}
                >
                  <Input />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={12}>
              <Col span={12}>
                <Form.Item
                  label="Địa chỉ"
                  name="address"
                  initialValue={data.address}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="Mã số hợp đồng" name="contract_number">
                  <Input />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={12}>
              <Col span={24}>
                <Form.Item label="Khác" name="note" initialValue={data.note}>
                  <Input />
                </Form.Item>
              </Col>
            </Row>
          </>
        )}
      </Form>
    </Modal>
  );
}
