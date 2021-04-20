import React from 'react';
import Avatar from '../../assets/images/Avatar.jpg';
import WrapperHeader from './WrapperHeader';
import dataCV from '../../mockup/dataCV';

function Header() {
  const { header } = dataCV;
  return (
    <WrapperHeader>
      <div className='left-header'>
        <div className='avatar'>
          <img src={Avatar} alt='avatar' />
        </div>
      </div>
      <div className='right-header'>
        <div className='my-name'>{header.name}</div>
        <div className='my-position'>{header.position}</div>
      </div>
      
      
    </WrapperHeader>
  )
}

export default Header;
