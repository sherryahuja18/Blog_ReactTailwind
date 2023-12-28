import React from 'react'
import logoImage from '../assets/react.svg';

function Logo({width = '100px'}) {
  return (
    <img src={logoImage} alt="Logo" style={{ width }} />
  )
}

export default Logo