import { Col, Form, Row } from "antd";
import moment from "moment";
import React, { useEffect, useMemo, useState } from "react";
import Modal from "../../components/common/ModalSelect";
import Select from "../../components/common/Select";
import Input from "../../components/common/Input";
import DatePicker from "../../components/common/DatePicker";
import { useDispatch, useSelector } from "react-redux";
import {
  createPotentialCustomers,
  getCompanies,
} from "../../slices/potentialCustomersSlice";
import { useTranslation } from "react-i18next";
import {
  acquaintanceLevel,
  gender,
  marriageStatus,
} from "../../constants/common";
import { REGEX_PHONE } from "./constants";
import { now } from "moment/moment";

export default function CreateCustomer({ isModalOpen, handleCancel }) {
  const { Option } = Select;
  const [form] = Form.useForm();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [typeId, setTypeId] = useState(1);
  const [maritalStatus, setMaritalStatus] = useState(1);
  const [acquaintanceLevelStatus, setAcquaintanceLevelStatus] = useState();
  const [dob, setDob] = useState();

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

  const genderOptions = useMemo(
    () =>
      gender.map(({ label, value }) => (
        <Option key={value} value={value}>
          {label}
        </Option>
      )),
    [companies],
  );

  const onChangeDate = (date, dateString) => {
    setDob(dateString);
  };

  const handleChangeSelectCustomer = (value) => {
    setTypeId(value);
  };

  const onCancel = () => {
    form.resetFields();
    handleCancel();
  };

  const onFinish = (value) => {
    dispatch(
      createPotentialCustomers({
        ...value,
        typeId: typeId,
        dob,
      }),
    );
    onCancel();
  };

  useEffect(() => {
    dispatch(getCompanies());
  }, [dispatch]);

  return (
    <Modal
      title="T???o m???i kh??ch h??ng"
      isModalOpen={isModalOpen}
      handleCancel={onCancel}
      handleOk={form.submit}
      cancelText="Hu??? t???o"
      okText="T???o kh??ch h??ng"
      renderSelect={
        <Select
          defaultValue={1}
          onChange={(selected) => handleChangeSelectCustomer(selected)}
          style={{ width: "150px" }}
        >
          <Option value={1}>C?? nh??n</Option>
          <Option value={3}>Doanh nghi???p</Option>
          <Option value={2}>NV doanh nghi???p</Option>
        </Select>
      }
    >
      <Form form={form} colon={false} layout="vertical" onFinish={onFinish}>
        {typeId === 3 ? (
          <>
            <Row gutter={12}>
              <Col span={16}>
                <Form.Item
                  label="T??n doanh nghi???p"
                  name="name"
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
                  label="S??? ??i???n tho???i"
                  name="phone1"
                  rules={[
                    {
                      required: true,
                      message: `${t("potential customers.message.phone1")}`,
                    },
                    {
                      pattern: REGEX_PHONE,
                      message: "Vui l??ng nh???p ????ng s??? ??i???n tho???i",
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
                  label="?????a ch???"
                  name="address"
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
                  label="H??? v?? t??n"
                  name="name"
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
                  label="S??? ??i???n tho???i 1"
                  name="phone1"
                  rules={[
                    {
                      required: true,
                      message: `${t("potential customers.message.phone1")}`,
                    },
                    {
                      pattern: REGEX_PHONE,
                      message: "Vui l??ng nh???p ????ng s??? ??i???n tho???i",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item
                  label="S??? ??i???n tho???i 2"
                  name="phoneNumber2"
                  rules={[
                    {
                      pattern: REGEX_PHONE,
                      message: "Vui l??ng nh???p ????ng s??? ??i???n tho???i",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item
                  label="S??? ??i???n tho???i 3"
                  name="phoneNumber3"
                  rules={[
                    {
                      pattern: REGEX_PHONE,
                      message: "Vui l??ng nh???p ????ng s??? ??i???n tho???i",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item
                  label="Gi???i t??nh"
                  name="gender"
                  rules={[
                    {
                      required: true,
                      message: `${t("Vui l??ng ch???n gi???i t??nh")}`,
                    },
                  ]}
                >
                  <Select placeholder="Ch???n">{genderOptions}</Select>
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={12}>
              <Col span={6}>
                <Form.Item
                  label="H??n nh??n"
                  name="maritalStatus"
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
                    value={maritalStatus}
                    placeholder="Ch???n"
                    onChange={(selected) => setMaritalStatus(selected)}
                  >
                    {marriageOptions}
                  </Select>
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item
                  label="Thu nh???p"
                  name="income"
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
                            new Error("Thu nh???p t???i thi???u 10.000.000??"),
                          ),
                    },
                  ]}
                >
                  <Input type="number" />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item
                  label="M???c ????? th??n quen"
                  name="acquaintanceLevel"
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
                    placeholder="Ch???n"
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
                  label="Ng??y sinh"
                  name="dob"
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
                            new Error("S??? tu???i ph???i l???n h??n 18"),
                          ),
                    },
                  ]}
                >
                  <DatePicker
                    value={dob}
                    onChange={onChangeDate}
                    style={{ width: "100%" }}
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={12}>
              <Col span={6}>
                <Form.Item label="Ngh??? nghi???p" name="job">
                  <Input />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item label="Doanh nghi???p" name="companyId">
                  {typeId === 2 ? (
                    <Select placeholder="Ch???n">{companyOptions}</Select>
                  ) : (
                    <Input />
                  )}
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="Email"
                  name="email"
                  rules={[
                    {
                      type: "email",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={12}>
              <Col span={12}>
                <Form.Item label="?????a ch???" name="address">
                  <Input />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="M?? s??? h???p ?????ng" name="contract_number">
                  <Input />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={12}>
              <Col span={24}>
                <Form.Item label="Kh??c" name="other">
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
