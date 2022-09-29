import React from 'react';
import moment from 'moment';
import { useState } from 'react';

// IMAGE
import {
  Clock,
  ArrowDown,
} from '../../../../../../assets/images/icons/components';

//STYLES
import * as S from './styles';
import { Form } from 'antd';

export const TimePicker = () => {
  const [showStart, setShowStart] = useState(false);
  const [showEnd, setShowEnd] = useState(false);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const diffTime = new Date(endTime) - new Date(startTime);
  const minutes = moment
    .duration(diffTime, 'milliseconds')
    .asMinutes()
    .toFixed();

  const handleOnChangeStart = (time) => {
    setStartTime(time);
    setShowEnd(true);
    setShowStart(false);
  };

  const handleOnChangeEnd = (time) => {
    setEndTime(time);
    setShowEnd(false);
  };

  const disabledHoursEnd = () => {
    const hours = [];
    const currentHour = moment(startTime).hour();
    for (let i = 0; i <= 24; i++) {
      i < currentHour && hours.push(i);
    }

    return hours;
  };

  const disabledMinutes = (selectedHour) => {
    const minutes = [];
    if (selectedHour === moment(startTime).hour()) {
      for (let i = 0; i < moment(startTime).minute(); i += 1) minutes.push(i);
    }
    return minutes;
  };

  return (
    <S.WrapContainer>
      <S.BoxTimePicker>
        <S.BoxClock>
          <Clock color='#999' />
        </S.BoxClock>
        <Form.Item
          name='startTime'
          // rules={[{ required: true, message: 'Missing ' }]}
        >
          <S.TimePicker
            name='start'
            open={showStart}
            placeholder=''
            format={'HH:mm'}
            hideDisabledOptions={false}
            bordered={false}
            allowClear={false}
            suffixIcon={null}
            showNow={false}
            onChange={handleOnChangeStart}
          />
        </Form.Item>
        <S.Space>-</S.Space>
        <Form.Item
          name='endTime'
          // rules={[{ required: true, message: 'Missing ' }]}
        >
          <S.TimePicker
            open={showEnd}
            placeholder=''
            format={'HH:mm'}
            hideDisabledOptions={false}
            bordered={false}
            allowClear={false}
            suffixIcon={null}
            showNow={false}
            onChange={handleOnChangeEnd}
            disabledHours={disabledHoursEnd}
            disabledMinutes={disabledMinutes}
          />
        </Form.Item>

        <S.DropDownBtn
          type='text'
          icon={<ArrowDown />}
          onClick={() => setShowStart(!showStart)}
        />
      </S.BoxTimePicker>

      <S.WrapMinutes>
        <S.WrapMinutesLeft>
          <S.BoxClock>
            <Clock color='#999' />
          </S.BoxClock>
          <span>
            {startTime && endTime && !isNaN(minutes) && parseInt(minutes) > 0
              ? minutes
              : ''}
          </span>
        </S.WrapMinutesLeft>
        <S.WrapMinutesRight>Phút</S.WrapMinutesRight>
      </S.WrapMinutes>
    </S.WrapContainer>
  );
};

export default TimePicker;
