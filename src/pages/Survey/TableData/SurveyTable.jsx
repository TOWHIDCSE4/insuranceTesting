import React, { useState, useMemo, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Checkbox, Empty } from "antd";
import TableCommon from "../../../components/common/TableNormal";
import { useDispatch, useSelector } from "react-redux";
import { useForm, FormProvider } from "react-hook-form";
import { SurveyForm } from "./SurveyForm";
import { Checkbox as CheckboxControl } from "../../../components/controls";
import { ClosingModal } from "../Modals/ClosingModal";
import { createSurvey } from "../../../slices/surveys";
import { isEmpty } from "lodash";
import { Input} from "../../../components/styles";

const CustomerServeyTable = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [dataTable, setDataTable] = useState([]);
  const [dataTables, setDataTables] = useState([]);
  const [formValue, setFromValue] = useState({});
  const [formValues, setFromValues] = useState([]);

  //get data from redux
  const { surveys, customers } = useSelector((state) => state);
  const { selectedCustomer } = customers;
  const { finance, influence, priority, others, ...value } = surveys?.survey;
  const financeValue = finance ? JSON.parse(finance) : {};
  const influenceValue = influence ? JSON.parse(influence) : {};
  const priorityValue = priority ? JSON.parse(priority) : {};
  const othersValue = others ? JSON.parse(others) : {};

  const methods = useForm({
    mode: "all",
    defaultValues: {
      other1: [],
      other2: [],
      other3: [],
      other4: [],
      isPotential: false,
      hintName: "",
    },
  });
  const { watch, control, reset } = methods;

  //reset form after submit
  useEffect(() => {
    if (!isEmpty(surveys?.data)) {
      const tableInfos = [...dataTables];
      const formInfos = [...formValues];
      const currentTableIndex = tableInfos?.findIndex((item) => item?.customerId === surveys?.data?.customerId);
      const currentformIndex = formInfos?.findIndex((item) => item?.id === surveys?.data?.customerId);
      tableInfos[currentTableIndex] = generateTableData(surveys?.data?.customerId);
      formInfos[currentformIndex] = generateFormData(surveys?.data?.customerId);
      setDataTables(tableInfos);
      setFromValues(formInfos);
    }
  }, [surveys?.data]);

  //generate form data
  useEffect(() => {
    if (isEmpty(surveys?.survey) && selectedCustomer?.customerId) {
      const formInfos = [...formValues];
      if (formInfos?.length === 0) {
        formInfos.push(generateFormData(selectedCustomer?.customerId));
      } else {
        const isIdExist = formInfos.some((item) => item?.id === selectedCustomer?.customerId);
        if (!isIdExist) {
          formInfos.push(generateFormData(selectedCustomer?.customerId));
        }
      }
      setFromValues(formInfos);
    }
  }, [selectedCustomer, surveys?.survey]);

  useEffect(() => {
    if (isEmpty(surveys?.survey) && selectedCustomer?.customerId) {
      const dataInfos = [...dataTables];
      if (dataInfos.length === 0) {
        dataInfos.push(generateTableData(selectedCustomer?.customerId));
      } else {
        const isIdExist = dataInfos.some((item) => item.customerId === selectedCustomer?.customerId);
        if (!isIdExist) {
          dataInfos.push(generateTableData(selectedCustomer?.customerId));
        }
      }
      setDataTables(dataInfos);
    }
  }, [selectedCustomer, surveys?.survey]);

  useEffect(() => {
    const tData =
      selectedCustomer?.customerId && dataTables?.length > 0
        ? dataTables?.find((item) => item?.customerId === selectedCustomer?.customerId)
        : {};

    if (!isEmpty(tData)) {
      setDataTable(tData?.data);
    }
  }, [dataTables]);

  useEffect(() => {
    const fData =
      selectedCustomer?.customerId && formValues?.length > 0
        ? formValues?.find((item) => item?.id === selectedCustomer?.customerId)
        : {};
    if (!isEmpty(fData)) {
      setFromValue(fData);
      reset({
        other1: fData?.others?.other1,
        other2: fData?.others?.other1,
        other3: fData?.others?.other1,
        other4: fData?.others?.other1,
        isPotential: fData?.isPotential,
        hintName: fData?.hintName,
      });
    }
  }, [formValues, selectedCustomer?.customerId]);

  //for checkbox group
  const watchOther1 = watch("other1", []);
  const watchOther2 = watch("other2", []);
  const watchOther3 = watch("other3", []);
  const watchOther4 = watch("other4", []);
  const watchPotential = watch("isPotential", false);
  const watchHintName = watch("hintName", "");

  useEffect(() => {
    if (isEmpty(surveys?.survey) && formValues?.length > 0) {
      const formInfos = [...formValues];
      const currentIndex = formInfos?.findIndex((item) => item?.id === selectedCustomer?.customerId);
      const selectedFormInfo = formInfos[currentIndex];
      selectedFormInfo["hintName"] = watchHintName;
      selectedFormInfo["isPotential"] = watchPotential;
      selectedFormInfo["others"]["other1"] = watchOther1;
      selectedFormInfo["others"]["other2"] = watchOther2;
      selectedFormInfo["others"]["other3"] = watchOther3;
      selectedFormInfo["others"]["other4"] = watchOther4;
      formInfos[currentIndex] = selectedFormInfo;
    }
  }, [watchOther1, watchOther2, watchOther3, watchOther4, watchPotential, watchHintName]);

  // for survey details
  useEffect(() => {
    if (!isEmpty(surveys?.survey)) {
      const tableData = [
        {
          key: 1,
          type: "Quỹ dự phòng đảm bảo tài chính cho người mà anh/chị yêu thương",
          infulence: "",
          infulence1: influenceValue?.family === 1 ? 1 : "",
          infulence2: influenceValue?.family === 2 ? 2 : "",
          infulence3: influenceValue?.family === 3 ? 3 : "",
          finance: "",
          finance1: financeValue?.family?.ans1 === 1 ? 1 : "",
          finance2: financeValue?.family?.ans1 === 2 ? 2 : "",
          money: financeValue?.family?.ans2,
          prior: priorityValue?.family,
          label: "family",
        },
        {
          key: 2,
          type: "Quỹ đảm bảo hoàn thành bậc cử nhân",
          infulence: "",
          infulence1: influenceValue?.bachelor === 1 ? 1 : "",
          infulence2: influenceValue?.bachelor === 2 ? 2 : "",
          infulence3: influenceValue?.bachelor === 3 ? 3 : "",
          finance: "",
          finance1: financeValue?.bachelor?.ans1 === 1 ? 1 : "",
          finance2: financeValue?.bachelor?.ans1 === 2 ? 2 : "",
          money: financeValue?.bachelor?.ans2,
          prior: priorityValue?.bachelor,
          label: "bachelor",
        },
        {
          key: 3,
          type: "Quỹ khởi nghiệp chắp cánh cho con vào đời",
          infulence: "",
          infulence1: influenceValue?.son === 1 ? 1 : "",
          infulence2: influenceValue?.son === 2 ? 2 : "",
          infulence3: influenceValue?.son === 3 ? 3 : "",
          finance: "",
          finance1: financeValue?.son?.ans1 === 1 ? 1 : "",
          finance2: financeValue?.son?.ans1 === 2 ? 2 : "",
          money: financeValue?.son?.ans2,
          prior: priorityValue?.son,
          label: "son",
        },
        {
          key: 4,
          type: "Quỹ lương hưu từ năm 61-85 tuổi",
          infulence: "",
          infulence1: influenceValue?.retire === 1 ? 1 : "",
          infulence2: influenceValue?.retire === 2 ? 2 : "",
          infulence3: influenceValue?.retire === 3 ? 3 : "",
          finance: "",
          finance1: financeValue?.retire?.ans1 === 1 ? 1 : "",
          finance2: financeValue?.retire?.ans1 === 2 ? 2 : "",
          money: financeValue?.retire?.ans2,
          prior: priorityValue?.retire,
          label: "retire",
        },
        {
          key: 5,
          type: "Quỹ đầu tư gấp đôi tài sản",
          infulence: "",
          infulence1: influenceValue?.doubleAsset === 1 ? 1 : "",
          infulence2: influenceValue?.doubleAsset === 2 ? 2 : "",
          infulence3: influenceValue?.doubleAsset === 3 ? 3 : "",
          finance: "",
          finance1: financeValue?.doubleAsset?.ans1 === 1 ? 1 : "",
          finance2: financeValue?.doubleAsset?.ans2 === 2 ? 2 : "",
          money: financeValue?.doubleAsset?.ans2,
          prior: priorityValue?.doubleAsset,
          label: "doubleAsset",
        },
      ];
      setDataTable(tableData);
      reset({
        other1: othersValue?.ans1,
        other2: othersValue?.ans2,
        other3: othersValue?.ans3,
        other4: othersValue?.ans4,
        potential: value?.isPotential,
        hintName: value?.hintName,
      });
    }
  }, [surveys?.survey]);

  const handleCheckboxChangeFactory = (rowIndex, columnKey) => (event) => {
    const tableInfos = [...dataTables];
    const currentIndex = tableInfos.findIndex((item) => item?.customerId === selectedCustomer?.customerId);
    const selectedTableInfo = tableInfos[currentIndex];
    const newCheckboxState = [...selectedTableInfo?.data];

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

    selectedTableInfo["data"] = newCheckboxState;
    tableInfos[currentIndex] = selectedTableInfo;
    setDataTables(tableInfos);
  };

  const handleInput = (rowIndex, columnKey) => (event) => {
    const tableInfos = [...dataTables];
    const currentIndex = tableInfos.findIndex((item) => item.customerId === selectedCustomer?.customerId);
    const selectedTableInfo = tableInfos[currentIndex];
    const newCheckboxState = [...selectedTableInfo?.data];
    newCheckboxState[rowIndex][columnKey] = event.target.value;
    selectedTableInfo["data"] = newCheckboxState;
    tableInfos[currentIndex] = selectedTableInfo;
    setDataTables(tableInfos);
  };

  const columns = [
    {
      title: "Nền tảng của sự giàu có",
      dataIndex: "type",
      key: "type",
      // width: "25%",
      fixed: "left",
    },
    {
      title: "Mức độ ảnh hưởng",
      width: "33%",
      children: [
        {
          title: "Rất quan trọng",
          dataIndex: "infulence1",
          className:"textaline",
          width: "5rem",
          key: "infulence1",
          render: (value, record, rowIndex) => (
            <Checkbox checked={value} value="1" onChange={handleCheckboxChangeFactory(rowIndex, "infulence1")} />
          ),
        },
        {
          title: "Quan trọng",
          dataIndex: "infulence2",
          className:"textaline",
          width: "5rem",
          key: "infulence2",
          render: (value, record, rowIndex) => (
            <Checkbox checked={value} value="2" onChange={handleCheckboxChangeFactory(rowIndex, "infulence2")} />
          ),
        },
        {
          title: "Ít quan trọng",
          dataIndex: "infulence3",
          className:"textaline",
          width: "5rem",
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
          className:"textaline",
          width: "5rem",
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
          className:"textaline",
          width: "5rem",
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
          textaline:"center",
          width: "10rem",
          key: "money",
          render: (value, record, rowIndex) => (
            <Input
              size="large"
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
      width: "5rem",
      key: "prior",
      render: (value, record, rowIndex) => (
        <Input
          size="large"
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

  const onSubmit = () => {
    const familyData = dataTable.find((data) => data.label === "family");
    const bachelorData = dataTable.find((data) => data.label === "bachelor");
    const sonData = dataTable.find((data) => data.label === "son");
    const retireData = dataTable.find((data) => data.label === "retire");
    const doubleAssetData = dataTable.find((data) => data.label === "doubleAsset");

    const submitFormData = {
      apptId: 0,
      customerId: selectedCustomer?.customerId,
      influence: {
        family: +familyData?.infulence,
        bachelor: +bachelorData?.infulence,
        son: +sonData?.infulence,
        retire: +retireData?.infulence,
        doubleAsset: +doubleAssetData?.infulence,
      },
      finance: {
        family: {
          ans1: +familyData?.finance,
          ans2: +familyData?.money,
        },
        bachelor: {
          ans1: +bachelorData?.finance,
          ans2: +bachelorData?.money,
        },
        son: {
          ans1: +sonData?.finance,
          ans2: +sonData?.money,
        },
        retire: {
          ans1: +retireData?.finance,
          ans2: +retireData?.money,
        },
        doubleAsset: {
          ans1: +doubleAssetData?.finance,
          ans2: +doubleAssetData?.money,
        },
      },
      others: {
        ans1: formValue?.others?.other1,
        ans2: formValue?.others?.other2,
        ans3: formValue?.others?.other3,
        ans4: formValue?.others?.other4,
      },
      prior: {
        family: +familyData?.prior,
        bachelor: +bachelorData?.prior,
        son: +sonData?.prior,
        retire: +retireData?.prior,
        doubleAsset: +doubleAssetData?.prior,
      },
      hintName: formValue?.hintName,
      isPotential: formValue?.isPotential,
    };
    dispatch(createSurvey(submitFormData));
  };

  return (
    <FormProvider {...methods}>
      <form>
        <div>
          <h2 className="title">{t("survey.formTitle.title1")}</h2>
          <div className="">{table}</div>
        </div>
        <SurveyForm />

        {isEmpty(surveys?.survey) && (
          <div className="container-right-submit">
            <div>
              <CheckboxControl control={control} name="isPotential" label="Không còn tiềm năng" />
            </div>
            <div>
              <ClosingModal onSubmit={onSubmit} />
            </div>
          </div>
        )}
      </form>
    </FormProvider>
  );
};

export default CustomerServeyTable;

const generateTableData = (id) => {
  return {
    customerId: id,
    data: [
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
    ],
  };
};

const generateFormData = (id) => {
  return {
    id: id,
    others: {
      other1: [],
      other2: [],
      other3: [],
      other4: [],
    },
    hintName: "",
    isPotential: false,
  };
};
