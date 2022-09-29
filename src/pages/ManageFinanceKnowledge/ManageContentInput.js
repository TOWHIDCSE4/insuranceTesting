import { CameraOutlined } from '@ant-design/icons';
import { Input, Upload } from 'antd';
import React from 'react';

const ManageContentInput = (props) => {
  const {
    input = true,
    onChange,
    title,
    name,
    type = 'text',
    textarea = false,
    value,
    placeholder,
    color = false,
    fileList,
  } = props;

  const handleFile = (e) => {
    console.log(e);
  };

  return (
    <>
      {input && !textarea ? (
        <Input
          name={name}
          placeholder={placeholder}
          bordered={false}
          onChange={onChange}
          prefix={`${title}: `}
          value={value}
          type={type}
          className={color && 'color-green'}
        />
      ) : !input && textarea ? (
        <div className="textarea">
          {title && <span className="textarea-title">{`${title}: `}</span>}
          <Input.TextArea
            name={name}
            placeholder={placeholder}
            bordered={false}
            onChange={onChange}
            value={value}
            type={type}
            autoSize={{ minRows: 5 }}
            className="textarea-input"
          />
        </div>
      ) : (
        <div className="manageContentInput-upload">
          <span className=" avatar-title">{title}</span>
          <Upload
            name={name}
            listType="picture-card"
            className="avatar-uploader"
            showUploadList
            onChange={onChange}
            beforeUpload={Upload.LIST_IGNORE}
            fileList={fileList}
            accept=".jpeg,.jpg,.png,.webp,.svg"
          >
            <div className="upload-content">
              <CameraOutlined />
              <span>Tải ảnh lên</span>
            </div>
          </Upload>
        </div>
      )}
    </>
  );
};

export default ManageContentInput;
