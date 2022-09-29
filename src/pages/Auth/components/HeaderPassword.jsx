import React from "react";
import PropTypes from "prop-types";
import { Typography } from "antd";

import Lock from "../../../assets/images/icons/lock.svg";
import Curve from "../../../assets/images/icons/curve.svg";

const HeaderPassword = ({ title, text }) => {
  return (
    <div className="header-password">
      <div className="header-password__box-top">
        <img className="header-password__image" src={Lock} />
      </div>

      <div className="header-password__box-curve">
        <img className="header-password__image" src={Curve} />
      </div>

      <div className="header-password__box-bottom">
        <Typography className="header-password__box-bottom__title">
          {title}
        </Typography>
        <Typography className="header-password__box-bottom__text">
          {text}
        </Typography>
      </div>
    </div>
  );
};

HeaderPassword.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
};

export default HeaderPassword;
