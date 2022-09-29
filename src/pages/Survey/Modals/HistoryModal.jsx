import { Modal, Spin } from "antd";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { getSurveyDetails } from "../../../slices/surveys";
import { getTimeByTZ } from "../../../helper/index";
import { isEmpty } from "lodash";

export const HistoryModal = ({ isModalOpen, toggleModal }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [dataTable, setDataTable] = useState([]);
  const [selectedSurvey, setSelectedSurvey] = useState("");
  const { surveys } = useSelector((state) => state);

  useEffect(() => {
    const historyData = surveys?.customerHistories?.map((history, i) => {
      return {
        id: i + 1,
        apptId: history?.apptId,
        customerId: history?.customerId,
        surveyId: history?.surveyId,
        date: getTimeByTZ(history?.createdAt),
        info: history?.hintName,
      };
    });
    setDataTable(historyData);
  }, [surveys.customerHistories]);

  useEffect(() => {
    if (!isEmpty(surveys?.survey)) {
      toggleModal();
    }
  }, [surveys?.survey]);

  const handleOk = () => {
    dispatch(getSurveyDetails(selectedSurvey));
  };

  return (
    <Modal
      title="Lịch sử khảo sát"
      open={isModalOpen}
      onOk={handleOk}
      onCancel={toggleModal}
      className="history-modal modal-custom"
      width={360}
    >
      <div className="history-table-container">
        <table className="history-table">
          <thead>
            <tr>
              <th>{t("Date")}</th>
              <th>{t("Name")}</th>
            </tr>
          </thead>
          <tbody>
            {dataTable?.length > 0 ? (
              dataTable.map((row, i) => (
                <tr
                  key={row?.id}
                  onClick={() => setSelectedSurvey(row?.surveyId)}
                  className={`${selectedSurvey === row?.surveyId && "active-history"}`}
                >
                  <td>{row?.date}</td>
                  <td>{row?.info}</td>
                </tr>
              ))
            ) : (
              <div>
                <Spin />
              </div>
            )}
          </tbody>
        </table>
      </div>
    </Modal>
  );
};
