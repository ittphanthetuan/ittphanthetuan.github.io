import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {

  return (
    <div className='header' >
      <Link to='/english-apps'>DashBoard</Link> &nbsp;
      <Link to='/english-apps/about'>About</Link> &nbsp;
      <Link to='/english-apps/detail'>Detail</Link>
    </div>
  )
}

export default Header;