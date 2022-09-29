import { Col, Image, Layout, Row, Typography } from 'antd';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import eyeIcon from '../../assets/images/icons/eyeIcon.svg';
import timeIcon from '../../assets/images/icons/timeIcon.svg';
import { getTimeByTZ } from '../../helper/index';
import { getView } from '../../slices/financeKnowledge';

const FinanceSupportCard = (props) => {
  const { wrap, target, content, showImage = true } = props;

  const dispatch = useDispatch();
  const [file, setFile] = useState('');
  const [imgURL, setImgURL] = useState('');

  // console.log(file);
  // useEffect(() => {
  //   const fetchData = () => {
  //     try {
  //       fetch(
  //         `http://118.71.224.167:8608/api/articles/image/${content.image}`,
  //         {
  //           headers: {
  //             Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pbmhrQGdtYWlsLmNvbSIsImlkIjoiMDk4NGM1ZWYtMzM0NC00ZGM1LWE4NzMtYzMzZTRjZmY3N2YzIiwiaWF0IjoxNjYzODEwMTUzLCJleHAiOjE2NjM4OTY1NTN9.dgRazHe0osNgm_neSu2-TM-2j1NshFJ4c9m3gpBR48M`,
  //           },
  //         }
  //       )
  //         .then((res) =>{

  //           console.log(res)
  //           return res.blob()})
  //         .then((blob) => {
  //           const url = URL.createObjectURL(blob);
  //           setFile(url);
  //         });
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   content && fetchData();
  // }, [content]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await getImage(content?.image);
  //       const blob = new Blob([res.data], { type: 'image/jpeg' });
  //       const test = URL.createObjectURL(blob);
  //       setImgURL(test);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   content && fetchData();
  // }, [content]);

  return (
    <Col
      className='gutter-row'
      sm={props.sm || 24}
      md={props.md || 24}
      lg={props.lg || 8}
    >
      <Layout.Content className='content'>
        <a
          href={content?.url || content?.link}
          target={target || '_blank'}
          rel='noreferrer'
          onClick={() => dispatch(getView(content?.id))}
        >
          <Row
            gutter={[10, 0]}
            align='stretch'
            className={`content-row ${wrap ? 'content-row_wrap' : ''}`}
          >
            {showImage && (
              <Col
                lg={wrap ? 24 : 6}
                md={24}
                sm={24}
                xs={24}
                className={wrap ? 'col-wrap' : ''}
              >
                <Image
                  src={content?.image}
                  preview={false}
                  className={`image ${wrap ? 'image-wrap' : ''}`}
                  alt=''
                />
              </Col>
            )}

            <Col lg={wrap ? 24 : showImage ? 18 : 24} md={24} sm={24} xs={24}>
              <Row
                gutter={[10, 3]}
                align='stretch'
                className={`${wrap ? 'row_wrap' : null}`}
              >
                <Col
                  lg={wrap ? 12 : 24}
                  md={wrap ? 12 : 24}
                  sm={wrap ? 12 : 24}
                  xs={24}
                >
                  <Typography.Title
                    level={5}
                    ellipsis={{ rows: 1 }}
                    title={content?.title}
                  >
                    {content?.title}
                  </Typography.Title>
                </Col>
                <Col
                  lg={wrap ? 12 : 24}
                  md={wrap ? 12 : 24}
                  sm={wrap ? 12 : 24}
                  xs={24}
                >
                  <div className={`card-content ${wrap && 'wrap'}`}>
                    {wrap && (
                      <Typography.Text className='card-item'>
                        <img src={eyeIcon} alt={content?.view || null} />
                        <span>{content?.view || 0}</span>
                      </Typography.Text>
                    )}
                    {wrap && <span className='line'>|</span>}
                    <Typography.Text className='card-item'>
                      aa
                      <img src={timeIcon} alt={getTimeByTZ(content?.date)} />
                      <span>{getTimeByTZ(content?.date)}</span>
                    </Typography.Text>
                  </div>
                </Col>
              </Row>
              <Typography.Paragraph ellipsis={{ rows: 2 }} className='text'>
                {content?.subTitle || content?.desc}
              </Typography.Paragraph>
            </Col>
          </Row>
        </a>
      </Layout.Content>
    </Col>
  );
};

export default FinanceSupportCard;
