export const statusAppointment = (
  start,
  end,
  now,
  isCompleted,
  isEventActive
) => {
  if (isEventActive) {
    return {
      color: '#FFFAFA',
      backgroundColor: '#EDBF21',
    };
  } else {
    if (isCompleted) {
      return {
        color: '#3DBD77',
        backgroundColor: '#EFF9F8',
      };
    } else {
      if (end < now) {
        return {
          color: '#FF5855',
          backgroundColor: '#FFFAFA',
        };
      } else {
        return {
          color: '#F6CF47',
          backgroundColor: '#FFF8DE',
        };
      }
    }
  }
};
