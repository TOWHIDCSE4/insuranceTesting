import React from "react";
import PropTypes from "prop-types";

import { Button } from "antd";

const FooterPassword = ({
  textCancel,
  textSubmit,
  handleCancel,
  handleSubmit,
  typeSubmit,
}) => {
  return (
    <div className="footer-password">
      <Button
        danger
        className="btn-danger footer-password__btnCancel"
        onClick={handleCancel}
      >
        {textCancel}
      </Button>
      <Button
        className="btn-primary footer-password__btnSend"
        type="primary"
        onClick={handleSubmit && handleSubmit}
        htmlType={typeSubmit ? "submit" : "button"}
      >
        {textSubmit}
      </Button>
    </div>
  );
};

FooterPassword.propTypes = {
  textCancel: PropTypes.string,
  textSubmit: PropTypes.string,
  handleCancel: PropTypes.func,
  handleSubmit: PropTypes.func,
  typeSubmit: PropTypes.bool,
};

export default FooterPassword;
