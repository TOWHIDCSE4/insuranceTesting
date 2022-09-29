import React, { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

// Constants
import { columns } from "./constants";

// Components
import { Col, Form, Row, Upload } from "antd";
import InputSearch from "../../components/common/InputSearch";

// Styles
import * as S from "./styles";

// Image
import Delete from "../../assets/images/icons/delete.svg";
import Call from "../../assets/images/icons/call.svg";
import Import from "../../assets/images/icons/import.svg";
import CreateCustomer from "./CreateCustomer";
import Select from "../../components/common/Select";
import Table from "../../components/common/Table";
import TableActions from "../../components/TableActions";
import { useDispatch, useSelector } from "react-redux";
import {
  deletePotentialCustomers,
  getPotentialCustomer,
  getPotentialCustomers,
} from "../../slices/potentialCustomersSlice";
import {
  acquaintanceLevel,
  marriageStatus,
  typeCustomer,
} from "../../constants/common";
import {
  generateAgeOptions,
  generateIncomeOptions,
} from "../../ultis/generateList";
import Modal from "../../components/common/ModalSelect";
import { convertToCurrency } from "../../ultis/convertToCurrency";
import EditCustomer from "./EditCustomer";
import Filter from "../../components/common/Filter";

const options = [
  { label: "Không còn tiềm năng, dừng tư vấn", value: 1 },
  { label: "Chưa gọi điện", value: 2 },
  { label: "Đã gọi điện lần 1, cần gọi lần 2", value: 3 },
  { label: "Đã có lịch hẹn gặp khảo sát", value: 4 },
  { label: "Đã khảo sát, chờ lịch tư vấn tài chính", value: 5 },
  { label: "Đã có lịch tư vấn tài chính", value: 6 },
  { label: "Đã tư vấn tài chính, chờ lịch hẹn tư vấn  giải pháp", value: 7 },
  { label: "Đã tư vấn giải pháp, chờ chốt kết quả", value: 8 },
  { label: "Đã chốt kết quả, chờ thông tin hợp đồng", value: 9 },
  { label: "Đã có hợp đồng", value: 10 },
  { label: "Chăm sóc khách hàng cho hợp đồng tiếp theo", value: 11 },
];

export default function PotentialCustomers() {
  const potentialCustomers = useSelector(
    (state) => state.potentialCustomersReducer.potentialCustomers,
  );
  const potentialCustomer = useSelector(
    (state) => state.potentialCustomersReducer.potentialCustomer,
  );
  const loading = useSelector(
    (state) => state.potentialCustomersReducer.loading,
  );
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [openModalDelete, setOpenModalDelete] = useState(false);
  const [openModalEdit, setOpenModalEdit] = useState(false);
  const [search, setSearch] = useState("");
  const [optionsFilter, setOptionsFilter] = useState("");

  const { Option } = Select;

  const incomeOptions = generateIncomeOptions();
  const ageOptions = generateAgeOptions();

  const incomeOptionsFilter = useMemo(() =>
    incomeOptions.map(({ label, value }) => (
      <Option key={value} value={value}>
        {label}
      </Option>
    )),
  );

  const ageOptionsFilter = useMemo(() =>
    ageOptions.map(({ label, value }) => (
      <Option key={label} value={value}>
        {label}
      </Option>
    )),
  );

  const typeCustomerOptionsFilter = useMemo(() =>
    typeCustomer.map(({ label, value }) => (
      <Option key={value} value={value}>
        {label}
      </Option>
    )),
  );

  const acquaintanceLevelOptionsFilter = useMemo(() =>
    acquaintanceLevel.map(({ label, value }) => (
      <Option key={value} value={value}>
        {label}
      </Option>
    )),
  );

  const marriageStatusOptionsFilter = useMemo(() =>
    marriageStatus.map(({ label, value }) => (
      <Option key={value} value={value}>
        {label}
      </Option>
    )),
  );

  const handleEdit = (value) => {
    dispatch(
      getPotentialCustomer({
        customerId: value.customerId,
        typeId: value.typeId,
      }),
    );
    setOpenModalEdit(true);
  };

  const dataWithActions = potentialCustomers?.map((item) => ({
    ...item,
    fullname: item.name || item.fullname,
    actions: (
      <TableActions
        handleDelete={() => onDelete([item.customerId])}
        handleEdit={() => handleEdit(item)}
      />
    ),
    income: item.income ? convertToCurrency(item.income) : null,
    acquaintanceLevel: acquaintanceLevel.find(
      (i) => i.value === Number(item.acquaintanceLevel),
    )?.label,
    maritalStatus: marriageStatus.find(
      (i) => i.value === Number(item.maritalStatus),
    )?.label,
    typeId: typeCustomer.find((i) => i.value === Number(item.typeId))?.label,
  }));

  const onSelectChange = (newSelectedRowKeys) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const props = {
    name: "file",
    headers: {
      authorization: "authorization-text",
    },

    onChange(info) {
      if (info.file.status !== "uploading") {
        let reader = new FileReader();
        reader.onload = (e) => {
          console.log(e.target.result);
        };
        reader.readAsText(info.file.originFileObj);
      }
    },
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleFilter = (values) => {
    const { income, age, ...value } = values;
    const incomeValue = values.income ? JSON.parse(income) : {};
    const ageValue = values.age ? JSON.parse(age) : {};
    dispatch(getPotentialCustomers({ ...incomeValue, ...ageValue, ...value }));
  };

  const onDelete = (value) => {
    setSelectedRowKeys(value);
    value.length && setOpenModalDelete(true);
  };

  const onCancelDelete = () => {
    setOpenModalDelete(false);
  };

  const onConfirmDelete = () => {
    dispatch(deletePotentialCustomers(selectedRowKeys));
    setOpenModalDelete(false);
  };

  useEffect(() => {
    dispatch(getPotentialCustomers({ name: search }));
  }, [dispatch, search]);

  useEffect(() => {
    // setPercent(optionsFilter.slice(-1)[0] * 10)
  }, [optionsFilter]);

  return (
    <div className="content-box" style={{ marginTop: "16px" }}>
      <S.WrapHeader>
        <S.WrapSearch>
          <h3>Danh sách khách hàng</h3>
          <InputSearch setPayload={(e) => setSearch(e)} />
        </S.WrapSearch>
        <S.WrapAction>
          <S.WrapIcon $isDelete>
            <img
              src={Delete}
              alt=""
              onClick={() => onDelete(selectedRowKeys)}
            />
          </S.WrapIcon>
          <S.WrapIcon $isCall>
            <img src={Call} alt="" />
          </S.WrapIcon>
          <S.WrapButton>
            <Upload showUploadList={false} {...props}>
              <S.Button onClick={() => {}}>
                <img src={Import} alt="" />
                Import
              </S.Button>
            </Upload>
            <Filter options={options} setPayload={setOptionsFilter} />
            <S.Button onClick={showModal}>
              <img src={Import} alt="" />
              Tạo mới
            </S.Button>
            {/* <FilterCommon /> */}
          </S.WrapButton>
        </S.WrapAction>
      </S.WrapHeader>
      <S.WrapFilter>
        <Form colon={false} layout="vertical" onFinish={handleFilter}>
          <Row align="bottom" justify="space-between">
            <Col span={4}>
              <Form.Item label="Thu nhập" name="income">
                <Select defaultValue="">
                  <Option value="">-- Chọn --</Option>
                  {incomeOptionsFilter}
                </Select>
              </Form.Item>
            </Col>
            <Col span={4}>
              <Form.Item label="Độ tuổi" name="age">
                <Select defaultValue="">
                  <Option value="">-- Chọn --</Option>
                  {ageOptionsFilter}
                </Select>
              </Form.Item>
            </Col>
            <Col span={4}>
              <Form.Item label="Loại khách hàng" name="typeId">
                <Select defaultValue="">
                  <Option value="">-- Chọn --</Option>
                  {typeCustomerOptionsFilter}
                </Select>
              </Form.Item>
            </Col>
            <Col span={4}>
              <Form.Item label="Mức độ thân quen" name="acquaintanceLevel">
                <Select defaultValue="">
                  <Option value="">-- Chọn --</Option>
                  {acquaintanceLevelOptionsFilter}
                </Select>
              </Form.Item>
            </Col>
            <Col span={4}>
              <Form.Item label="Tình trạng hôn nhân" name="maritalStatus">
                <Select defaultValue="">
                  <Option value="">-- Chọn --</Option>
                  {marriageStatusOptionsFilter}
                </Select>
              </Form.Item>
            </Col>
            <Form.Item>
              <S.Button htmlType="submit">Áp dụng</S.Button>
            </Form.Item>
          </Row>
        </Form>
      </S.WrapFilter>
      <Table
        loading={loading}
        rowSelection={rowSelection}
        columns={columns}
        dataSource={dataWithActions}
        scroll={{ x: "100%" }}
        rowKey={(row) => row.customerId}
      />
      <CreateCustomer isModalOpen={isModalOpen} handleCancel={handleCancel} />
      {!loading && openModalEdit && (
        <EditCustomer
          isModalOpen={openModalEdit}
          handleCancel={() => setOpenModalEdit(false)}
          data={potentialCustomer}
        />
      )}
      {openModalDelete && (
        <Modal
          title="Xoá"
          handleOk={onConfirmDelete}
          handleCancel={onCancelDelete}
          isModalOpen={openModalDelete}
          cancelText="Huỷ"
          okText="Xoá"
        >
          <p>Bạn có chắc chắn muốn xoá thông tin này?</p>
        </Modal>
      )}
    </div>
  );
}
