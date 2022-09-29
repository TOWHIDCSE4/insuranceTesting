import React, { useState, useMemo, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Checkbox, Empty, Form, Input } from "antd";
import { ClosingModal } from "../Modals/ClosingModal";
import TableCommon from "../../../components/common/TableNormal";
import { useDispatch, useSelector } from "react-redux";
import { createSurvey } from "../../../slices/surveys";
import { isEmpty } from "lodash";

const CustomerServeyTable = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [dataTable, setDataTable] = useState(rowData);
  const [receivedInheritance, setReceivedInheritance] = useState([]);
  const [financialInstrument, setFinancialInstrument] = useState("");
  const [savingMoney, setSavingMoney] = useState("");
  const [propertyIncome, setPropertyIncome] = useState("");
  const [isPotential, setIsPotential] = useState(false);
  const { surveys, customers } = useSelector((state) => state);
  const { selectedCustomer } = customers;
  const { finance, influence, priority, others, ...value } = surveys?.survey;
  const financeValue = finance ? JSON.parse(finance) : {};
  const influenceValue = influence ? JSON.parse(influence) : {};
  const priorityValue = priority ? JSON.parse(priority) : {};
  const othersValue = others ? JSON.parse(others) : {};

  console.log("financeValue", financeValue);
  console.log("influenceValue", influenceValue);
  console.log("priorityValue", priorityValue);
  console.log("othersValue", othersValue);
  console.log("restValue", value);

  useEffect(() => {
    const generateRowData = [
      {
        key: 1,
        type: "Quỹ dự phòng đảm bảo tài chính cho người mà anh/chị yêu thương",
        infulence: "",
        infulence1: "",
        infulence2: "",
        infulence3: "",
        finance: "",
        finance1: "",
        finance2: "",
        money: "12000",
        prior: 1,
        label: "family",
      },
      {
        key: 2,
        type: "Quỹ đảm bảo hoàn thành bậc cử nhân",
        infulence: "",
        infulence1: "",
        infulence2: "",
        infulence3: "",
        finance: "",
        finance1: "",
        finance2: "",
        money: "12000",
        prior: 2,
        label: "bachelor",
      },
      {
        key: 3,
        type: "Quỹ khởi nghiệp chắp cánh cho con vào đời",
        infulence: "",
        infulence1: "",
        infulence2: "",
        infulence3: "",
        finance: "",
        finance1: "",
        finance2: "",
        money: "12000",
        prior: 3,
        label: "son",
      },
      {
        key: 4,
        type: "Quỹ lương hưu từ năm 61-85 tuổi",
        infulence: "",
        infulence1: "",
        infulence2: "",
        infulence3: "",
        finance: "",
        finance1: "",
        finance2: "",
        money: "12000",
        prior: 4,
        label: "retire",
      },
      {
        key: 5,
        type: "Quỹ đầu tư gấp đôi tài sản",
        infulence: "",
        infulence1: "",
        infulence2: "",
        infulence3: "",
        finance: "",
        finance1: "",
        finance2: "",
        money: "12000",
        prior: 5,
        label: "doubleAsset",
      },
    ];
  }, []);

  const handleCheckboxChangeFactory = (rowIndex, columnKey) => (event) => {
    const newCheckboxState = [...dataTable];

    if (["infulence1", "infulence2", "infulence3"].includes(columnKey)) {
      let infulence = "";
      let inful1 = "";
      let inful2 = "";
      let inful3 = "";
      let infulValue = event.target.value;
      if (columnKey === "infulence1") {
        infulence = infulValue;
        inful1 = infulValue;
      } else if (columnKey === "infulence2") {
        infulence = infulValue;
        inful2 = infulValue;
      } else if (columnKey === "infulence3") {
        infulence = infulValue;
        inful3 = infulValue;
      }
      newCheckboxState[rowIndex]["infulence"] = infulence;
      newCheckboxState[rowIndex]["infulence1"] = inful1;
      newCheckboxState[rowIndex]["infulence2"] = inful2;
      newCheckboxState[rowIndex]["infulence3"] = inful3;
    }

    if (["finance1", "finance2"].includes(columnKey)) {
      let finance = "";
      let finance1 = "";
      let finance2 = "";
      let financeValue = event.target.value;
      if (columnKey === "finance1") {
        finance = financeValue;
        finance1 = financeValue;
      } else if (columnKey === "finance2") {
        finance = financeValue;
        finance2 = financeValue;
      }
      newCheckboxState[rowIndex]["finance"] = finance;
      newCheckboxState[rowIndex]["finance1"] = finance1;
      newCheckboxState[rowIndex]["finance2"] = finance2;
    }
    setDataTable(newCheckboxState);
  };

  const handleInput = (rowIndex, columnKey) => (event) => {
    const newCheckboxState = [...dataTable];
    newCheckboxState[rowIndex][columnKey] = event.target.value;
    setDataTable(newCheckboxState);
  };

  const handleReceivedInheritance = (e) => {
    setReceivedInheritance(e.target.value);
  };
  const handleFinancialInstrument = (e) => {
    setFinancialInstrument(e.target.value);
  };
  const handleSavingMoney = (e) => {
    setSavingMoney(e.target.value);
  };
  const handlePropertyIncome = (e) => {
    setPropertyIncome(e.target.value);
  };

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const onSubmit = (data) => {
    const familyData = dataTable.find((data) => data.label === "family");
    const bachelorData = dataTable.find((data) => data.label === "bachelor");
    const sonData = dataTable.find((data) => data.label === "son");
    const retireData = dataTable.find((data) => data.label === "retire");
    const doubleAssetData = dataTable.find((data) => data.label === "doubleAsset");

    const formData = {
      apptId: 0,
      customerId: selectedCustomer?.customerId,
      influence: {
        family: familyData?.infulence,
        bachelor: bachelorData?.infulence,
        son: sonData?.infulence,
        retire: retireData?.infulence,
        doubleAsset: doubleAssetData?.infulence,
      },
      finance: {
        family: {
          ans1: familyData?.finance,
          ans2: familyData?.money,
        },
        bachelor: {
          ans1: bachelorData?.finance,
          ans2: bachelorData?.money,
        },
        son: {
          ans1: sonData?.finance,
          ans2: sonData?.money,
        },
        retire: {
          ans1: retireData?.finance,
          ans2: retireData?.money,
        },
        doubleAsset: {
          ans1: doubleAssetData?.finance,
          ans2: doubleAssetData?.money,
        },
      },
      others: {
        ans1: receivedInheritance,
        ans2: financialInstrument,
        ans3: savingMoney,
        ans4: propertyIncome,
      },
      prior: {
        family: +familyData?.prior,
        bachelor: +bachelorData?.prior,
        son: +sonData?.prior,
        retire: +retireData?.prior,
        doubleAsset: +doubleAssetData?.prior,
      },
      hintName: data,
      isPotential: isPotential,
    };

    dispatch(createSurvey(formData));
  };

  const columns = [
    {
      title: "Nền tảng của sự giàu có",
      dataIndex: "type",
      key: "type",
      width: "25%",
      fixed: "left",
    },
    {
      title: "infulence level",
      width: "33%",
      children: [
        {
          title: "Rất quan trọng",
          dataIndex: "infulence1",
          key: "infulence1",
          render: (value, record, rowIndex) => (
            <Checkbox checked={value} value="1" onChange={handleCheckboxChangeFactory(rowIndex, "infulence1")} />
          ),
        },
        {
          title: "Quan trọng",
          dataIndex: "infulence2",
          key: "infulence2",
          render: (value, record, rowIndex) => (
            <Checkbox checked={value} value="2" onChange={handleCheckboxChangeFactory(rowIndex, "infulence2")} />
          ),
        },
        {
          title: "Ít quan trọng",
          dataIndex: "infulence3",
          key: "infulence3",
          render: (value, record, rowIndex) => (
            <Checkbox
              className="radius-5"
              checked={value}
              value="3"
              onChange={handleCheckboxChangeFactory(rowIndex, "infulence3")}
            />
          ),
        },
      ],
    },
    {
      title: "Xây dựng vương quốc tài chính",
      width: "34%",
      children: [
        {
          title: "Chưa có",
          dataIndex: "finance1",
          key: "finance1",
          render: (value, record, rowIndex) => (
            <Checkbox
              className="radius-5"
              checked={value}
              value="1"
              onChange={handleCheckboxChangeFactory(rowIndex, "finance1")}
            />
          ),
        },
        {
          title: "Đã có",
          dataIndex: "finance2",
          key: "finance2",
          render: (value, record, rowIndex) => (
            <Checkbox
              className="radius-5"
              checked={value}
              value="2"
              onChange={handleCheckboxChangeFactory(rowIndex, "finance2")}
            />
          ),
        },
        {
          title: "Số tiền (1000đ)",
          dataIndex: "money",
          key: "money",
          render: (value, record, rowIndex) => (
            <Input
              style={{ backgroundColor: "#F8F8F8", border: 0 }}
              className="radius-10"
              value={value}
              onChange={handleInput(rowIndex, "money")}
            />
          ),
        },
      ],
    },
    {
      title: "TT ưu tiên",
      dataIndex: "prior",
      width: "8%",
      key: "prior",
      render: (value, record, rowIndex) => (
        <Input
          style={{ backgroundColor: "#F8F8F8", border: 0 }}
          className="radius-10 "
          value={value}
          onChange={handleInput(rowIndex, "prior")}
        />
      ),
    },
  ];

  const table = useMemo(() => {
    if (!!dataTable && dataTable.length > 0) {
      return <TableCommon dataSource={dataTable} columnTable={columns} bordered></TableCommon>;
    } else {
      return <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />;
    }
  }, [dataTable]);

  return (
    <Form onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete="off">
      <div>
        {/* table  */}
        <h2 className="title">{t("survey.formTitle.title1")}</h2>
        <div className="">{table}</div>
      </div>

      {/* inheritance-box-1 */}
      <div>
        <h2 className="inheritance-title">{t("survey.formTitle.title2")}</h2>
        <div className="inheritance-box-1">
          <div>
            <Checkbox
              className="checkbox-item"
              value="1"
              name="receivedInheritance1"
              onChange={handleReceivedInheritance}
            >
              Có
            </Checkbox>
          </div>
          {/* <Form.Item name="ch1" valuePropName="checked">
            <Checkbox
              className="checkbox-item"
              value="1"
              name="receivedInheritance1"
              onChange={handleReceivedInheritance}
            >
              Có
            </Checkbox>
          </Form.Item> */}
          <Form.Item name="ch2" valuePropName="checked">
            <Checkbox
              className="checkbox-item"
              value="2"
              name="receivedInheritance2"
              onChange={handleReceivedInheritance}
            >
              Trên 1.000.000 USD
            </Checkbox>
          </Form.Item>
          <Form.Item name="ch3" valuePropName="checked">
            <Checkbox
              className="checkbox-item"
              value="3"
              name="receivedInheritance3"
              onChange={handleReceivedInheritance}
            >
              Không
            </Checkbox>
          </Form.Item>
        </div>
      </div>
      {/* inheritance-box-2  */}
      <div>
        <h2 className="inheritance-title">{t("survey.formTitle.title3")}</h2>
        <div className="inheritance-box-2">
          <Form.Item name="ch4" valuePropName="checked">
            <Checkbox
              className="checkbox-item"
              value="1"
              name="financialInstrument1"
              onChange={handleFinancialInstrument}
            >
              Vàng, đô la
            </Checkbox>
          </Form.Item>
          <Form.Item name="ch5" valuePropName="checked">
            <Checkbox
              className="checkbox-item"
              value="2"
              name="financialInstrument2"
              onChange={handleFinancialInstrument}
            >
              Ngân hàng
            </Checkbox>
          </Form.Item>
          <Form.Item name="ch6" valuePropName="checked">
            <Checkbox
              className="checkbox-item"
              value="3"
              name="financialInstrument3"
              onChange={handleFinancialInstrument}
            >
              Bảo hiểm
            </Checkbox>
          </Form.Item>
          <Form.Item name="ch7" valuePropName="checked">
            <Checkbox
              className="checkbox-item"
              value="4"
              name="financialInstrument4"
              onChange={handleFinancialInstrument}
            >
              Khác
            </Checkbox>
          </Form.Item>
        </div>
      </div>

      {/* inheritance-box-3  */}
      <div>
        <h2 className="inheritance-title">{t("survey.formTitle.title4")}</h2>
        <div className="inheritance-box-2">
          <Form.Item name="ch8" valuePropName="checked">
            <Checkbox className="checkbox-item" value="1" name="savingMoney1" onChange={handleSavingMoney}>
              Tiết kiệm không đều
            </Checkbox>
          </Form.Item>
          <Form.Item name="ch9" valuePropName="checked">
            <Checkbox className="checkbox-item" value="2" name="savingMoney2" onChange={handleSavingMoney}>
              Mất kiểm soát chi tiêu
            </Checkbox>
          </Form.Item>
          <Form.Item name="ch10" valuePropName="checked">
            <Checkbox className="checkbox-item" value="3" name="savingMoney3" onChange={handleSavingMoney}>
              Thâm hụt
            </Checkbox>
          </Form.Item>
          <Form.Item name="ch11" valuePropName="checked">
            <Checkbox className="checkbox-item" value="4" name="savingMoney4" onChange={handleSavingMoney}>
              Đầu tư sai
            </Checkbox>
          </Form.Item>
        </div>
      </div>

      {/* inheritance-box-4  */}
      <div>
        <h2 className="inheritance-title">{t("survey.formTitle.title5")}</h2>
        <div className="inheritance-box-1">
          <Form.Item name="ch11" valuePropName="checked">
            <Checkbox className="checkbox-item" value="1" name="propertyIncome1" onChange={handlePropertyIncome}>
              Đầu tư dần để có tài sản
            </Checkbox>
          </Form.Item>
          <Form.Item name="ch12" valuePropName="checked">
            <Checkbox className="checkbox-item" value="2" name="propertyIncome2" onChange={handlePropertyIncome}>
              Mua tài sản đảm bảo không lãi thanh toán dần với 20% thu nhập
            </Checkbox>
          </Form.Item>
          <Form.Item name="ch13" valuePropName="checked">
            <Checkbox className="checkbox-item" value="3" name="propertyIncome3" onChange={handlePropertyIncome}>
              Khác
            </Checkbox>
          </Form.Item>
        </div>
      </div>
      <div className="container-right-submit">
        <Form.Item name="remember" valuePropName="checked">
          <Checkbox onChange={(e) => setIsPotential(e.target.checked)}>Không còn tiềm năng</Checkbox>
        </Form.Item>
        <Form.Item>
          <ClosingModal onSubmit={onSubmit} />
        </Form.Item>
      </div>
    </Form>
  );
};

export default CustomerServeyTable;

const rowData = [
  {
    key: 1,
    type: "Quỹ dự phòng đảm bảo tài chính cho người mà anh/chị yêu thương",
    infulence: "",
    infulence1: "",
    infulence2: "",
    infulence3: "",
    finance: "",
    finance1: "",
    finance2: "",
    money: "12000",
    prior: 1,
    label: "family",
  },
  {
    key: 2,
    type: "Quỹ đảm bảo hoàn thành bậc cử nhân",
    infulence: "",
    infulence1: "",
    infulence2: "",
    infulence3: "",
    finance: "",
    finance1: "",
    finance2: "",
    money: "12000",
    prior: 2,
    label: "bachelor",
  },
  {
    key: 3,
    type: "Quỹ khởi nghiệp chắp cánh cho con vào đời",
    infulence: "",
    infulence1: "",
    infulence2: "",
    infulence3: "",
    finance: "",
    finance1: "",
    finance2: "",
    money: "12000",
    prior: 3,
    label: "son",
  },
  {
    key: 4,
    type: "Quỹ lương hưu từ năm 61-85 tuổi",
    infulence: "",
    infulence1: "",
    infulence2: "",
    infulence3: "",
    finance: "",
    finance1: "",
    finance2: "",
    money: "12000",
    prior: 4,
    label: "retire",
  },
  {
    key: 5,
    type: "Quỹ đầu tư gấp đôi tài sản",
    infulence: "",
    infulence1: "",
    infulence2: "",
    infulence3: "",
    finance: "",
    finance1: "",
    finance2: "",
    money: "12000",
    prior: 5,
    label: "doubleAsset",
  },
];

const generateInfulenceData = (data, key) => {
  if (data === "1" && key === "infulence1") {
    return data;
  } else if (data === "2" && key === "infulence2") {
    return data;
  } else if (data === "3" && key === "infulence3") {
    return data;
  } else {
    return "";
  }
};
