import React, {useState, useEffect, useRef} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useTranslation} from 'react-i18next';
import {Progress, Button, Popconfirm} from 'antd';
import {getData, deleteData} from '../../slices/events';
import Table from '../../components/common/TableNormal';
import IconPlus from '../../assets/images/icons/plus.svg';
import IconSms from '../../assets/images/icons/sms.svg';
import IconMessage from '../../assets/images/icons/message.svg';
import IconDelete from '../../assets/images/icons/delete.svg';
import Modal from "../../components/common/Modal";
import AddEventContent from "./Modal/AddEventContent";
import SendSmsContent from "./Modal/SendSmsContent";
import SendEmailContent from "./Modal/SendEmailContent";
import {LOADING_STATUS} from '../../ultis/constant';
import {getTimeByTZ, pad} from '../../helper'
import useScrollTableConfig from '../../hooks/useScrollTableConfig'
import * as S from '../../components/styles'

export default function ListEvent() {
  const {t} = useTranslation()
  const ref = useRef(null)
  const {customerData} = useSelector((state) => state.customerCare);
  const loading = useSelector((state) => state.loading.loading);
  const eventState = useSelector((state) => state.events)
  const scrollConfig = useScrollTableConfig(ref, eventState.data);
  const [visibleModalAddEvent, setVisibleModalAddEvent] = useState(false)
  const [visibleModalEmail, setVisibleModalEmail] = useState(false)
  const [visibleModalSms, setVisibleModalSms] = useState(false)
  const [detailData, setDetailData] = useState({})
  const [eventId, setEventId] = useState(0)
  const [isTemplate, setIsTemplate] = useState(false)
  const [titleModal, setTitleModal] = useState('')
  const dispatch = useDispatch()

  const columns = [
    {
      title: t('common.stt'),
      key: 'stt',
      width: '12%',
      render: (text, record, index) => pad((index + 1), 2),
    },
    {
      title: t('common.date'),
      key: 'date',
      width: '24%',
      render: (record) => {
        return (
          <span>{getTimeByTZ(record.date)}</span>
        )
      }
    },
    {
      title: t('common.content'),
      key: 'name',
      render: (record) => {
        return (
          <span className="cursor-pointer" onClick={() => editModal(record)}>{record.name}</span>
        );
      }
    },
    {
      title: '',
      key: 'action',
      width: '42%',
      render: (record) => {
        return (
          <div className="btn-table">
            <Button className="btn-table__btn btn-table-sms m-r-10" icon={<img src={IconSms} alt=""/>} onClick={() => showModalSms(record.id)}>{t('customer care.sms')}</Button>
            <Button className="btn-table__btn btn-table-email m-r-10" icon={<img src={IconMessage} alt=""/>} onClick={() => showModalEmail(record.id)}>{t('customer care.email')}</Button>
            <Popconfirm className="pop-confirm-delete" placement="top" title={t('common.delete title')} onConfirm={() => deleteEvent(record.id)} okText={t('common.delete')}  cancelText={t('common.cancel')} >
              <Button className="btn-table__btn btn-table-del flex-end" icon={<img src={IconDelete} alt=""/>}></Button>
            </Popconfirm>
          </div>
        )
      },
    },
  ]

  const showModalSms = (id) => {
    setVisibleModalSms(true)
    setEventId(id)
  }

  const showModalEmail = (id) => {
    setVisibleModalEmail(true)
    setEventId(id)
  }

  const addModal = (val) => {
    setVisibleModalAddEvent(true)
    setDetailData({})
    setIsTemplate(val)
    const title = val ? t('customer care.add template') : t('customer care.add event title');
    setTitleModal(title)
  }

  const editModal = (detail) => {
    setVisibleModalAddEvent(true)
    setDetailData({...detail})
    setTitleModal(t('customer care.edit event title'))
  }

  const deleteEvent = (id) => {
    dispatch(deleteData(id))
  }

  useEffect(() => {
    if (customerData.customerId > 0) {
      dispatch(getData({isTemplate: false}))
    }
  }, [customerData])

  useEffect(() => {
    if (loading === LOADING_STATUS.succeeded) {
      setVisibleModalAddEvent(false)
      setVisibleModalEmail(false)
      setVisibleModalSms(false)
    }
  }, [loading])

  return (
    <>
      <div className="customer-care__center--progress">
        <span>{t('common.progress')}</span>
        <Progress percent={60}/>
      </div>
      <div className="customer-care__center--event">
        <h5>{t('customer care.event title')}</h5>
      </div>
      <div className="customer-care__center--list" ref={ref}>
        <Table dataSource={eventState.data} columnTable={columns} scroll={scrollConfig}/>
      </div>
      {
        customerData.customerId > 0 && <div className="customer-care__center--footer">
          <S.ButtonAdd icon={<img src={IconPlus} alt=""/>} onClick={(() => addModal(true))}>{t('customer care.add event template')}</S.ButtonAdd>
          <S.ButtonAdd icon={<img src={IconPlus} alt=""/>} onClick={(() => addModal(false))}>{t('customer care.add event')}</S.ButtonAdd>
        </div>
      }
      <Modal isVisible={visibleModalAddEvent} setIsVisible={setVisibleModalAddEvent} title={titleModal} width={770} content={<AddEventContent detailData={detailData} isTemplate={isTemplate} setVisibleModalAddEvent={setVisibleModalAddEvent}/>} />
      <Modal isVisible={visibleModalEmail} setIsVisible={setVisibleModalEmail} title={t(('customer care.email title'))} width={770} content={<SendEmailContent eventId={eventId} setVisibleModalEmail={setVisibleModalEmail}/>} />
      <Modal isVisible={visibleModalSms} setIsVisible={setVisibleModalSms} title={t(('customer care.sms title'))} width={770} content={<SendSmsContent eventId={eventId} setVisibleModalSms={setVisibleModalSms}/>} />
    </>
  );
}
