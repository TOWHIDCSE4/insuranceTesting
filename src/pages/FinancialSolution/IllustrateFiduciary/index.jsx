import { Button, Tabs } from "antd";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PageBack from "../../../assets/images/financial/PageBack";
import Calender from "../../../assets/images/icons/components/calender";
import Clock from "../../../assets/images/icons/components/Clock";
import User from "../../../assets/images/icons/components/user";
import messageIcon from "../../../assets/images/icons/message-white.svg";
import { FiduciaryValue } from "./FiduciaryValue";
import { SummaryOfBenefits } from "./SummaryOfBenefits";
import { HistoryModal } from "./HistoryModal";
import { ClosingModal } from "./ClosingModal";
import { SaveConfirmation } from "./SaveConfirmation";

const IllustrateFiduciary = () => {
  const [isHistoryModalOpen, setIsHistoryModalOpen] = useState(false);

  const toggleHistoryModal = () => {
    setIsHistoryModalOpen(!isHistoryModalOpen);
  };

  const showHistory = () => {
    toggleHistoryModal();
  };

  const sendEmail = () => {
    window.location.href =
      "https://mail.google.com/mail/u/0/#inbox?compose=new";
  };
  const tabExtra = () => {
    return (
      <>
        <div className="tab-extra">
          <div className="date">
            <Calender />
            <p>
              Ngày minh họa: <span>14/07/2022</span>
            </p>
          </div>
          <div className="user">
            <User />
            <p>
              Khách hàng: <span>Kathryn Murphy</span>
            </p>
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <div className="minh-hoa-gia">
        <div className="minh-header">
          <Link to="/advise/financial-solutions">
            <PageBack />
          </Link>
          <div className="minh-header_btns">
            <div className="finance-btn-wrapper">
              <Button
                type="primary"
                htmlType="button"
                className="btn-primary-outline"
                block
                onClick={showHistory}
              >
                <div className="btn-icon">
                  <Clock />
                </div>
                <span> Lịch sử</span>
              </Button>
            </div>

            <div className="finance-btn-wrapper">
              <ClosingModal />
            </div>

            <div className="finance-btn-wrapper">
              <Button
                type="primary"
                htmlType="submit"
                className="btn-primary finance-btn-small"
                block
                onClick={sendEmail}
              >
                <img src={messageIcon} alt="gmail btn" className="img-icon" />
                Gửi email
              </Button>
            </div>

            <div className="finance-btn-wrapper-sm">
              {/* <Button
                type="primary"
                htmlType="submit"
                className="btn-primary finance-btn-small"
                block
              >
                Lưu
              </Button> */}
              <SaveConfirmation />
            </div>
          </div>
        </div>
        <Tabs defaultActiveKey="1" tabBarExtraContent={tabExtra()}>
          <Tabs.TabPane tab="Minh họa giá trị ủy thác" key="1">
            <FiduciaryValue />
          </Tabs.TabPane>
          <Tabs.TabPane tab="Tóm tắt quyền lợi bằng bông hoa" key="2">
            <SummaryOfBenefits />
          </Tabs.TabPane>
        </Tabs>
      </div>
      <HistoryModal
        isModalOpen={isHistoryModalOpen}
        toggleModal={toggleHistoryModal}
      />
    </>
  );
};

export default IllustrateFiduciary;
