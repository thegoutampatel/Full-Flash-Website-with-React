import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Nav = () => {
  const Location = useLocation();

  return (
    <div className='w-[80vw] h-[60px] bg-white flex items-center justify-between rounded-lg shadow-xl'>
      <img src="/src/assets/images/logo.svg" alt="" className=' w-[171px] h-[31px]' />
      <div className='flex gap-3 mr-8 text-dark-grey '>
        <NavLink to='/' exact activeClassName='font-semibold'>
          <a href="" className={`hover:underline transition-all ${location.pathname === '/' && 'font-semibold'}`}>Home</a>
        </NavLink>
        <NavLink to="/service" activeClassName='font-semibold'>
          <a href="" className={`hover:underline transition-all ${location.pathname === '/service' && 'font-semibold'}`}>Service</a>
        </NavLink>
        <NavLink to="/about" activeClassName='font-semibold'>
          <a href="" className={`hover:underline transition-all ${location.pathname === '/about' && 'font-semibold'}`}>About</a>
        </NavLink>
      </div>
    </div>
  );
}

export default Nav;
