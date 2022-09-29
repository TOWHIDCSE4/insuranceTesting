import React, {useRef, useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {Row, Col} from 'antd';
import ListSearch from './ListSearch';
import ListEvent from './ListEvent';
import History from './History';

export default function CustomerCare() {
  const {t} = useTranslation();
  const refRow = useRef(null)
  const refEvent = useRef(null)
  const [isScroll, setIsScroll] = useState(false)
  
  useEffect(() => {
    if ((refRow.current.children[0].clientHeight - 100) > refRow.current.clientHeight) {
      setIsScroll(true)
    }
  })

  return (
    <div className="content-box customer-care">
      <h3>{t('customer care.title')}</h3>
      <Row ref={refRow}>
        <Col lg={4} md={8} className={`customer-care__left ${isScroll && 'scroll-item'}`}>
          <ListSearch />
        </Col>
        <Col lg={20} md={16}>
          <Row>
            <Col lg={11} md={24} className="customer-care__center" ref={refEvent}>
              <ListEvent />
            </Col>
            <Col lg={13} md={24} className="customer-care__right">
              <History />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}
