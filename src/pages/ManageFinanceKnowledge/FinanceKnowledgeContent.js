import { Button, List } from 'antd';
import React from 'react';
import { useState } from 'react';
import DeleteIcon from '../../assets/images/icons/deleteIcon.svg';
import EditIcon from '../../assets/images/icons/edit-green.svg';
import Title from '../../components/Title';
import ManageContentInput from './ManageContentInput';

const FinanceKnowledgeContent = (props) => {
  const { content, onChange, fileList, onClick, onDelete, onUpload, onCancel } =
    props;

  const [edit, setEdit] = useState(true)

  return (
    <div className='financeKnowledgeContent'>
      <List
        size='small'
        header={
          <div className='manageContent-header'>
            <Title title='Nội dung' />
            {content && 
            <div className='manageContent-header_icon'>
              {edit && 
              <img src={EditIcon} onClick={()=>setEdit(false)}/>
              }
              <img src={DeleteIcon} onClick={() => onDelete(content)} />
            </div>
            }
          </div>
        }
        footer={
          <div className='manageContent-footer'>
            <ManageContentInput
              onChange={onChange}
              name='url'
              title='Link'
              value={content?.url}
              placeholder='Nhập link'
            />
            <div className='manageContent-footer_button'>
              <Button
                danger
                className='btn-cancer'
                onClick={() => onCancel(content)}
              >
                Hủy
              </Button>
              <Button
                type='primary'
                className='btn-save'
                onClick={() => onClick(content)}
                /* disabled={buttonState} */
              >
                Lưu
              </Button>
            </div>
          </div>
        }
      >
        <div className='manageContent-container'>
          <ManageContentInput
            name='title'
            onChange={onChange}
            value={content?.title}
            title='Tiêu đề'
            placeholder='Nhập nội dung tiêu đề'
          />
          <ManageContentInput
            name='image'
            input={false}
            title='Ảnh đại diện: '
            type='file'
            onChange={onUpload}
            fileList={fileList}
          />
          <ManageContentInput
            name='subTitle'
            onChange={onChange}
            value={content?.subTitle}
            title='Nội dung vắn tắt'
            textarea
            input={false}
            placeholder='Nội dung'
          />
        </div>
      </List>
    </div>
  );
};

export default FinanceKnowledgeContent;
