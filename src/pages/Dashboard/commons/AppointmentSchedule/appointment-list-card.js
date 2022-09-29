import { Checkbox, Col, Row } from 'antd';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import alarmGray from '../../../../assets/images/icons/alarmGray.svg';
import calendar from '../../../../assets/images/icons/calendar.svg';
import company from '../../../../assets/images/icons/company.svg';
import location from '../../../../assets/images/icons/location.svg';
import * as S from '../../styles';
import { arrWeek } from '../../constants';

export default function AppointmentListCard(props) {
  const { t } = useTranslation();
  const [weeks, setWeeks] = useState([]);
  const [activeKey, setActiveKey] = useState('1');

  const handleActiveKey = (value) => {
    setActiveKey(value);
  };

  const getListDateOfWeek = () => {
    const now = moment();
    const formatDate = moment(`${now.date() - 1}-${now.month() + 1}-${now.year()}`, 'DD/MM/YYYY');
    const templateWeek = [];
    for (let index = 0; index < 7; index++) {
      const currentDay = formatDate.add(1, 'days');
      const dayOfWeek = arrWeek[currentDay.day()];
      const date = currentDay.format('DD/MM');
      templateWeek.push({ dayOfWeek, date });
    }
    setWeeks(templateWeek);
  };

  useEffect(() => {
    getListDateOfWeek();
  }, []);

  return (
    <S.Tabs activeKey={activeKey} onChange={handleActiveKey}>
      {weeks.map((element, idx) => (
        <S.Tabs.TabPane
          tab={idx + 1 == activeKey ? `${element.dayOfWeek}(${element.date})` : element.dayOfWeek}
          key={idx + 1}
        >
          <S.ItemAppointment>
            <S.WrapFirstColAppointment span={24}>
              <Row>
                <Col span={20}>
                  <Row>
                    <S.WrapIconImage $width="15px" $height="15px" src={company} alt="company" />
                    <Col span={22}>
                      <Row gutter={[0, 4]}>
                        <S.WrapTextItem $fontSize="14px" $fontWeight="700" $lineHeight="18px" span={24}>
                          Brooklyn Simmons (Doanh nghiệp - 5)
                        </S.WrapTextItem>
                        <S.WrapTextItem $fontWeight="600" $lineHeight="15px" span={24}>
                          Tư vấn hợp đồng bảo hiểm
                        </S.WrapTextItem>
                      </Row>
                    </Col>
                  </Row>
                </Col>
                <S.WrapTextRight span={4}>
                  <Checkbox className="checkbox-item" />
                </S.WrapTextRight>
              </Row>
            </S.WrapFirstColAppointment>
            <S.WrapHr />
            <S.WrapSecondColAppointment span={24}>
              <Row gutter={5}>
                <Col span={6}>
                  <Row>
                    <S.WrapIconImage $width="15px" $height="15px" src={calendar} alt="company" />
                    <S.WrapBorderRight span={18}>
                      <Row gutter={[0, 4]}>
                        <Col span={24}>Ngày hẹn:</Col>
                        <S.WrapTextItem $fontWeight="600" $lineHeight="15px" span={24}>
                          10/07/2022
                        </S.WrapTextItem>
                      </Row>
                    </S.WrapBorderRight>
                  </Row>
                </Col>
                <Col span={6}>
                  <Row>
                    <S.WrapIconImage $width="15px" $height="15px" src={alarmGray} alt="company" />
                    <S.WrapBorderRight span={18}>
                      <Row gutter={[0, 4]}>
                        <Col span={24}>Thời gian:</Col>
                        <S.WrapTextItem $fontWeight="600" $lineHeight="15px" span={24}>
                          08:15 (20p)
                        </S.WrapTextItem>
                      </Row>
                    </S.WrapBorderRight>
                  </Row>
                </Col>
                <Col span={12}>
                  <Row>
                    <S.WrapIconImage $width="15px" $height="15px" src={location} alt="company" />
                    <Col span={20}>
                      <Row gutter={[0, 4]}>
                        <Col span={24}>Địa điểm:</Col>
                        <S.WrapTextItem $fontWeight="600" $lineHeight="15px" span={24}>
                          Lô 22, số 35 Lê Văn Thiêm
                        </S.WrapTextItem>
                      </Row>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </S.WrapSecondColAppointment>
          </S.ItemAppointment>
        </S.Tabs.TabPane>
      ))}
    </S.Tabs>
  );
}
