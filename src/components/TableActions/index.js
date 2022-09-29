import React from "react";
import { Button, Row, Tooltip } from "antd";
import { ReactComponent as Call } from "../../assets/images/icons/call-light.svg";
import { ReactComponent as Delete } from "../../assets/images/icons/delete-light.svg";
import { ReactComponent as Edit } from "../../assets/images/icons/edit.svg";

export default function TableActions({ handleCall, handleDelete, handleEdit }) {
  return (
    <Row justify="space-between">
      <Tooltip title="Call">
        <Button
          onClick={handleCall}
          type="text"
          icon={<Call width={"100%"} height="15px" />}
        />
      </Tooltip>
      <Tooltip title="Delete">
        <Button
          onClick={handleDelete}
          type="text"
          icon={<Delete width={"100%"} height="15px" />}
        />
      </Tooltip>
      <Tooltip title="Edit">
        <Button
          onClick={handleEdit}
          type="text"
          icon={<Edit width={"100%"} height="15px" />}
        />
      </Tooltip>
    </Row>
  );
}
