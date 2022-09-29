import React from 'react';

export default function Title(props) {
  const { title, icon } = props;
  return (
    <div className='title'>
      {icon && <img src={icon} />}
      <h3>{title}</h3>
    </div>
  );
}
