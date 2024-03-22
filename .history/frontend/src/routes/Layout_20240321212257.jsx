import Transition from '../../utils/Transition'
import Header from './Header';
import React from 'react';
import PropTypes from 'prop-types';

export default function AppLayout({ children }) {
  return (
    <Transition className="flex justify-center items-center flex-col">
      <Header />
      <div className="">
        {children}
      </div>
    </Transition>
  )
}