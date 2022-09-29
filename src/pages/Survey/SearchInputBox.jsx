import React from "react";
import { Input } from "antd";
import SearchIcon from "../../assets/images/icons/green-search.svg";

export default function SearchInputBox(props) {
  const { classStyle = "top-search-input", setPayload } = props;

  const handleSearch = (e) => {
    setPayload(e.target.value);
  };

  return (
    <Input
      placeholder="Tìm kiếm"
      type="text"
      onPressEnter={handleSearch}
      className={classStyle}
      prefix={<img src={SearchIcon} alt="" />}
    />
  );
}
