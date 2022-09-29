import { Button, Col, Layout, List, Row, Typography } from "antd";
import React, { Fragment, useEffect, useState } from "react";
import SearchInputBox from "./SearchInputBox";
import ListDetails from "./ListDetails";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { HistoryModal } from "./Modals/HistoryModal";
import TabMenu from "./Tabs/TabMenu";
import { useDispatch, useSelector } from "react-redux";
import { getCustomerHistoryById } from "../../slices/surveys";
import { getCustomerList, setSelectedCustomer } from "../../slices/customers";
import { isEmpty } from "lodash";
import calender from "../../assets/images/icons/calendar.svg";
import left_arrow from "../../assets/images/icons/left-arrow.svg";

const Survey = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isHistoryModalOpen, setIsHistoryModalOpen] = useState(false);
  const [payload, setPayload] = useState("");
  const { customers, surveys } = useSelector((state) => state);
  const { data, selectedCustomer } = customers;

  useEffect(() => {
    dispatch(getCustomerList());
  }, [dispatch]);

  useEffect(() => {
    dispatch(setSelectedCustomer(data?.[0]?.customerId));
  }, [data, dispatch]);

  const handleSelectCustomer = (id) => {
    dispatch(setSelectedCustomer(id));
  };

  const toggleHistoryModal = () => {
    setIsHistoryModalOpen(!isHistoryModalOpen);
  };
  const historyHandler = () => {
    dispatch(getCustomerHistoryById(selectedCustomer?.customerId));
    toggleHistoryModal();
  };
  const solutionHandler = () => {
    navigate("/advise/financial-solutions");
  };
  const counselHandler = () => {
    navigate("/advise/finance-consultant");
  };
  const appointmentHandler = () => {
    navigate("/appointment-management");
  };

  return (
    <Fragment>
      <div className="survey">
        <h3 className="title">{t("survey.title")}</h3>

        <div className="survey-container">
          <Row gutter={[16, 10]} justify="start" align="stretch">
            <Col lg={15} md={24} sm={24} xs={24}>
              <Layout.Content>
                <div className="content-div-1">
                  <div className="container-left">
                    <div className="container-search-box">
                      <h1 className="container-search-box-header">Người tham gia</h1>
                      <SearchInputBox setPayload={setPayload}></SearchInputBox>
                    </div>

                    {data?.length > 0 && (
                      <List
                        dataSource={data}
                        renderItem={(customer, index) => (
                          <List.Item
                            onClick={() => handleSelectCustomer(customer?.customerId)}
                            className={`${customer?.customerId === selectedCustomer?.customerId ? "active" : ""}`}
                          >
                            <Typography.Text ellipsis>{customer?.fullname}</Typography.Text>
                          </List.Item>
                        )}
                      />
                    )}
                  </div>

                  <div className="container-right">
                    {isEmpty(surveys?.survey) ? (
                      <div className="container-right-header">
                        <div>
                          <Button type="primary" className="btn-primary" onClick={historyHandler}>
                            {t("common.history")}
                          </Button>
                        </div>
                        <div className="right">
                          <Button type="primary" className="btn-primary" onClick={solutionHandler}>
                            {t("common.solution")}
                          </Button>
                          <Button type="primary" className="btn-primary" onClick={counselHandler}>
                            {t("common.consultant")}
                          </Button>
                          <Button type="primary" className="btn-primary" onClick={appointmentHandler}>
                            {t("common.booking")}
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <div className="container-right-header">
                        <div>
                          <img src={left_arrow} alt="calender" height={12} style={{ marginRight: "5px" }} />
                        </div>
                        <div className="right">
                          <img src={calender} alt="calender" height={16} style={{ marginRight: "5px" }} />
                          <span>Ngày: 12/08/2022</span>
                        </div>
                      </div>
                    )}

                    <TabMenu />
                  </div>
                </div>
              </Layout.Content>
            </Col>

            <Col lg={9} md={24} sm={24} xs={24}>
              <Layout.Content className="manageContent">
                <div className="content-div-2">
                  <ListDetails />
                </div>
              </Layout.Content>
            </Col>
          </Row>
        </div>
      </div>
      <HistoryModal isModalOpen={isHistoryModalOpen} toggleModal={toggleHistoryModal} />
    </Fragment>
  );
};

export default Survey;
