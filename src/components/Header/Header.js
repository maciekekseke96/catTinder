import React from 'react';
import { ReactComponent as Logo } from './../../assets/Logo.svg';
import './Header.scss';

const Header = () => {
  return (
    <div className="app_header">
      <Logo/>
    </div>
  );
};

export default Header;
