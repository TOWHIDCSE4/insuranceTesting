import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Button, List, Pagination } from 'antd';
import React from 'react';
import DeleteIcon from '../../assets/images/icons/deleteIcon.svg';
import EditIcon from '../../assets/images/icons/edit-green.svg';
import LikeIcon from '../../assets/images/icons/likeIcon.svg';
import IconPlus from '../../assets/images/icons/plus.svg';
import Title from '../../components/Title';
import ManageContentInput from './ManageContentInput';

const QuestionAnswerContent = (props) => {
  const { onChange, content, onDelete, onSave } = props;
  const itemRender = (_, type) => {
    if (type === 'prev') {
      return (
        <>
          <span>Trước</span>
          <div className='icon'>
            <LeftOutlined />
          </div>
        </>
      );
    }
    if (type === 'next') {
      return (
        <>
          <div className='icon'>
            <RightOutlined />
          </div>
          <span>Sau</span>
        </>
      );
    }
  };

  return (
    <div className='questionAnswerContent'>
      <List
        size='small'
        header={
          <div className='manageContent-header'>
            <Title title='Nội dung' />
            <div className='manageContent-header_icon'>
              <img src={EditIcon} />
              <img src={DeleteIcon} onClick={() => onDelete(content)} />
            </div>
          </div>
        }
        footer={
          <div className='manageContent-footer'>
            <div className='manageContent-footer_button'>
              <Button danger className='btn-cancer'>
                Hủy
              </Button>
              <Button
                type='primary'
                className='btn-save'
                onClick={() => onSave(content)}
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
            title='Câu hỏi'
            placeholder='Nhập nội dung câu hỏi'
            color
          />
          <ManageContentInput
            name='date'
            title='Công việc'
            placeholder='Nhập nội dung công việc'
            onChange={onChange}
            value={content?.title}
          />

          <div className='questionAnswerContent-answer'>
            <div className='questionAnswerContent-answer_main'>
              <div className='questionAnswerContent-answer_auth'>
                <p>
                  Tác giả: <span>Devon Lane</span>
                </p>
                <p>
                  <img src={LikeIcon} /> 23
                </p>
              </div>
              <div className='questionAnswerContent-answer_content'>
                <ManageContentInput
                  name='desc'
                  textarea
                  onChange={onChange}
                  value={content?.subTitle || content?.desc}
                  input={false}
                />
              </div>
            </div>
          </div>
          <div className='questionAnswerContent-pagination'>
            <Button
              type='primary'
              shape='circle'
              icon={<img src={IconPlus} alt='' />}
              /* onClick={addList} */
            >
              Thêm câu trả lời khác
            </Button>
            <Pagination
              defaultCurrent={1}
              total={5}
              title='trang'
              itemRender={itemRender}
              defaultPageSize={2}
            />
          </div>
        </div>
      </List>
    </div>
  );
};

export default QuestionAnswerContent;
