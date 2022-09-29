import { Button, Card } from "antd";
import React, { useEffect, useState } from "react";
import DotImg from "../../../assets/images/icons/dot.svg";
import { listDatas } from "../../../assets/fake-data/QuyDuPhongData";

const ListDetails = () => {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    setDatas(listDatas);
  }, []);
  return (
    <Card className="content-div-2-header" title="Lời thoại">
      <Button type="primary" htmlType="submit" className="btn-primary">
        Lời thoại 1
      </Button>
      <div className="content-div-2-content">
        {datas !== undefined &&
          datas.map((data, i) => (
            <p key={i}>
              {" "}
              <img src={DotImg} alt="dot" /> <span> {data?.content}</span>
            </p>
          ))}
      </div>
    </Card>
  );
};

export default ListDetails;
