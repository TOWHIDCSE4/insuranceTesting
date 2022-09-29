import React from 'react';
import PropTypes from 'prop-types';
const Company = ({ width, height, color }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 15 13'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M12.5324 12.4205V1.12551H10.2464V0.029007H6.4904V1.12551V1.67751V3.46101H3.1889V4.55601H2.4689V12.4205H0.149902V12.9725H2.4689H6.4904H7.0424H8.2229H10.6529H12.5339H14.8499V12.4205H12.5324ZM7.0424 0.579507H9.6959V1.12401H7.0424V0.579507ZM3.7394 4.01001H6.3929V4.55451H3.7394V4.01001ZM3.0194 12.4205V5.10651H3.1889H6.4904V12.4205H3.0194ZM8.7734 12.4205V10.7795H10.1009V12.4205H8.7734ZM10.6514 12.4205V10.229H8.2214V12.4205H7.0409V4.55451V1.67601H10.2449H11.9789V12.4205H10.6514Z'
        fill={color}
      />
    </svg>
  );
};

Company.defaultProps = {
  width: '15',
  height: '13',
  color: '#3DBD78',
};

Company.prototype = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
};

export default Company;
