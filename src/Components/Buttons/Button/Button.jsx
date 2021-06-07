import React from 'react'
import PropTypes from 'prop-types'
import './Button.scss'

const Button = ({ text, onClick, className='' }) =>{
  return(
    <div className={'Button '+className} onClick={onClick}>
      <p>{text.toUpperCase()}</p>
    </div>
  )
}

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string
}

export default Button