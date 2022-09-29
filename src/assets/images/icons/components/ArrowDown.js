import React from 'react';
import PropTypes from 'prop-types';

const ArrowDown = ({ width, height, color }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 13 13'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M10.2917 4.60416L6.50004 8.39582L2.70837 4.60416'
        stroke={color}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

ArrowDown.defaultProps = {
  width: '13',
  height: '13',
  color: '#999',
};

ArrowDown.prototype = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
};

export default ArrowDown;
