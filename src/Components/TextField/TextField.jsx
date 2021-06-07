import React from 'react'
import * as  PropTypes from 'prop-types'
import './TextField.scss'

const TextField = ({ Name, Label, Id, Type, PlaceHolder }) =>{
  return(
    <div className='textField'>
      <label htmlFor={Name}>{Label}</label>
      <input type={Type} id={Id} placeholder={PlaceHolder} name={Name} />
    </div>
  )
}

TextField.propTypes = {
  Name: PropTypes.string,
  Label: PropTypes.string,
  Id: PropTypes.number,
  Type: PropTypes.string,
  PlaceHolder: PropTypes.string
}

export default TextField