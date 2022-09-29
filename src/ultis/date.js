import moment from 'moment';

export const getMonday = (d) => {
  const first = d.getDate() - d.getDay() + 1;
  return moment(new Date(d.setDate(first))).format('DD/MM/YYYY');
};

export const getSunday = (d) => {
  const last = d.getDate() - d.getDay() + 6 + 1;
  return moment(new Date(d.setDate(last))).format('DD/MM/YYYY');
};

export const convertDay = (day) => {
  switch (day) {
    case 0:
      return 'Chủ nhật';
    case 1:
      return 'Thứ 2';
    case 2:
      return 'Thứ 3';
    case 3:
      return 'Thứ 4';
    case 4:
      return 'Thứ 5';
    case 5:
      return 'Thứ 6';
    case 6:
      return 'Thứ 7';
  }
};
