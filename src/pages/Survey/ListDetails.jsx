import { Button, Card } from "antd";
import React, { useEffect, useState } from "react";
import DotImg from "../../assets/images/icons/dot.svg";
import { listDatas } from "../../assets/fake-data/QuyDuPhongData";
import { useTranslation } from "react-i18next";
import LeftArrow from "../../assets/images/icons/left-arrow.svg";
import RightArrow from "../../assets/images/icons/right-arrow.svg";

const ListDetails = () => {
  const { t } = useTranslation();
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    setDatas(listDatas);
  }, []);
  return (
    <Card className="content-div-2-header" title={t("survey.rttitle")}>
      <Button type="primary" htmlType="submit" className="btn-primary">
        Lời thoại 1
      </Button>
      <div className="content-div-2-content">
        <div className="contents">
          {datas !== undefined &&
            datas.map((data, i) => (
              <p key={i}>
                {" "}
                <img src={DotImg} alt="dot" /> <span> {data?.content}</span>
              </p>
            ))}
        </div>
        <div className="footer">
          <div className="buttons">
            <span className="prev-btn-text">Trước</span>
            <Button
              className="prev-btn"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="19"
                  viewBox="0 0 12 19"
                  fill="none">
                  <path
                    d="M11.5667 2.80625L4.88748 9.5L11.5667 16.1938L9.5104 18.25L0.7604 9.5L9.5104 0.75L11.5667 2.80625Z"
                    fill="#C4CDD5"
                  />
                </svg>
              }>
              {" "}
            </Button>

            <Button
              className="next-btn"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="19"
                  viewBox="0 0 12 19"
                  fill="none">
                  <path
                    d="M0.43335 2.80625L7.11252 9.5L0.43335 16.1938L2.4896 18.25L11.2396 9.5L2.4896 0.75L0.43335 2.80625Z"
                    fill="#3DBD78"
                  />
                </svg>
              }></Button>

            <span className="next-btn-text">Tiếp</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ListDetails;
