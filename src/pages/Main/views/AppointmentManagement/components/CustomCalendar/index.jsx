import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Views, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'moment/locale/vi';
import { DateTime, Settings } from 'luxon';
import PropTypes from 'prop-types';

// COMPONENTS
import CalendarToolbar from '../CustomToolbar';
import DayEvent from '../CustomDayEvent';

// STYLES
import * as S from './styles';
import 'react-big-calendar/lib/sass/styles.scss';
import CustomHeader from '../CustomHeader';

const myEventsList = [
  {
    apptId: 9,
    typeId: 3,
    title: 'Video Record',
    start: new Date('2022-09-20T08:24:00'),
    end: new Date('2022-09-20T09:50:00'),
    description: 'Tư vấn hợp đồng',
    status: 'cancel',
    address: 'Lô 22, số 35 Lê Văn Thiêm',
    note: 'Mang theo hợp đồng, quà tặng cho khách hàng',
    isCompleted: false,
    customerApptRecords: [
      {
        customerApptRecordsId: 14,
        customeId: 111,
        financeConsultId: null,
        fundId: null,
        contractId: null,
        surveryId: null,
        name: 'Brooklyn Simmons',
      },
      {
        customerApptRecordsId: 15,
        customeId: 112,
        financeConsultId: null,
        fundId: null,
        contractId: null,
        surveryId: null,
        name: 'Marvin McKinney',
      },
    ],
  },
  {
    apptId: 10,
    typeId: 1,
    title: 'Jenny Wilson',
    start: new Date('2022-09-19T08:24:00'),
    end: new Date('2022-09-19T09:50:00'),
    description: 'Tư vấn hợp đồng',
    status: 'success',
    address: 'Lô 22, số 35 Lê Văn Thiêm',
    note: 'Mang theo hợp đồng, quà tặng cho khách hàng',
    isCompleted: true,
  },
  {
    apptId: 12,
    typeId: 3,
    title: 'Jenny Wilson',
    start: new Date('2022-09-21T08:24:00'),
    end: new Date('2022-09-21T09:15:00'),
    description: 'Tư vấn hợp đồng',
    company: {
      members: 4,
    },
    status: 'wait',
    address: 'Lô 22, số 35 Lê Văn Thiêm',
    note: 'Mang theo hợp đồng, quà tặng cho khách hàng',
    isCompleted: false,
    customerApptRecords: [
      {
        customerApptRecordsId: 14,
        customeId: 111,
        financeConsultId: null,
        fundId: null,
        contractId: null,
        surveryId: null,
        name: 'Marvin McKinney',
      },
      {
        customerApptRecordsId: 15,
        customeId: 112,
        financeConsultId: null,
        fundId: null,
        contractId: null,
        surveryId: null,
        name: 'Marvin McKinney',
      },
    ],
  },
  {
    apptId: 13,
    typeId: 1,
    title: 'Jenny Wilson',
    start: new Date('2022-09-24T08:24:00'),
    end: new Date('2022-09-24T09:15:00'),
    description: 'Tư vấn hợp đồng',
    status: 'waiting',
    address: 'Lô 22, số 35 Lê Văn Thiêm',
    note: 'Mang theo hợp đồng, quà tặng cho khách hàng',
    isCompleted: false,
  },
];

const defaultTZ = DateTime.local().zoneName;
const date = new Date();
const defaultDateStr = moment(date).format('YYYY-MM-DD');
function getDate(str, DateTimeObj) {
  return DateTimeObj.fromISO(str).toJSDate();
}

const CalendarCustom = ({ handleEvent, eventActive }) => {
  const [timezone] = useState(defaultTZ);

  const { defaultDate, getNow, localizer, scrollToTime } = useMemo(() => {
    Settings.defaultZone = timezone;
    return {
      defaultDate: getDate(defaultDateStr, DateTime),
      getNow: () => DateTime.local().toJSDate(),
      localizer: momentLocalizer(moment),
      scrollToTime: DateTime.local().toJSDate(),
    };
  }, [timezone]);

  useEffect(() => {
    return () => {
      Settings.defaultZone = defaultTZ;
    };
  }, []);

  // SELECT EVENT
  const handleSelectEvent = useCallback((event) => handleEvent(event), []);

  //FORMAT
  const formats = {
    timeGutterFormat: (date, culture, localizer) =>
      localizer.format(date, 'H:mm', culture),
  };

  const today = new Date();
  const minimum = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate(),
    7
  );
  const maximum = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate(),
    18
  );

  return (
    <S.WrapContainer
      defaultDate={defaultDate}
      defaultView={Views.WEEK}
      events={myEventsList}
      getNow={getNow}
      localizer={localizer}
      scrollToTime={scrollToTime}
      startAccessor='start'
      endAccessor='end'
      min={minimum}
      max={maximum}
      timeslots={1}
      step={30}
      onSelectEvent={handleSelectEvent}
      formats={formats}
      components={{
        toolbar: CalendarToolbar,
        event: (event) => DayEvent(event, eventActive),
        header: CustomHeader,
      }}
    />
  );
};

CalendarCustom.prototype = {
  eventActive: PropTypes.object,
  handleEvent: PropTypes.func,
};

export default CalendarCustom;
