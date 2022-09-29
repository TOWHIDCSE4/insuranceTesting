import React from "react";
import menulife_logo from '../../../assets/images/manulife-logo.png'

export const CircleTitle = () => {
  return (
    <div className="circle_title_container">
      <div className="circle_title">
        <div className="circle_logo">
          <img src={menulife_logo} title="menulife title" width={85} />
        </div>
        <div className="circle_text">Món quà tương lai</div>
      </div>
    </div>
  );
};
