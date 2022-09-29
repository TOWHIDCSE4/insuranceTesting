import { Modal, Empty } from "antd";
import React, { useState, useMemo } from "react";
import { useTranslation } from "react-i18next";
import Table from "../../../components/common/TableNormal";

const dataSource = [
  {
    key: 0,
    date: "12/12/2021",
    info: "Tên gợi nhớ 01",
    content: "60.000.000",
  },
  {
    key: 1,
    date: "12/07/2022",
    info: "Tên gợi nhớ 02",
    content: "84.000.000",
  },
  {
    key: 3,
    date: "12/08/2022",
    info: "Tên gợi nhớ 03",
    content: "54.000.000",
  },
  {
    key: 4,
    date: "12/08/2022",
    info: "Tên gợi nhớ 03",
    content: "54.000.000",
  },
  {
    key: 5,
    date: "12/08/2022",
    info: "Tên gợi nhớ 03",
    content: "54.000.000",
  },
  {
    key: 6,
    date: "12/08/2022",
    info: "Tên gợi nhớ 03",
    content: "54.000.000",
  },
  {
    key: 7,
    date: "12/08/2022",
    info: "Tên gợi nhớ 03",
    content: "54.000.000",
  },
];

export const HistoryModal = ({ isModalOpen, toggleModal }) => {
  const { t } = useTranslation();
  const [dataTable, setDataTable] = useState(dataSource);
  const columns = [
    {
      title: t("Date"),
      dataIndex: "date",
      key: "date",
    },
    {
      title: t("Name"),
      dataIndex: "info",
      key: "info",
    },
    {
      title: t("Total Amount"),
      dataIndex: "content",
      key: "content",
    },
  ];
  const table = useMemo(() => {
    if (!!dataTable && dataTable.length > 0) {
      return (
        <Table dataSource={dataTable} columnTable={columns} />
      );
    } else {
      return <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />;
    }
  }, [dataTable]);

  const handleOk = () => {
    toggleModal();
  };

  return (
    <Modal
      title="Lịch sử tư vấn"
      open={isModalOpen}
      onOk={handleOk}
      onCancel={toggleModal}
      className="history-modal modal-custom"
      width={430}
    >
      {table}
    </Modal>
  );
};
