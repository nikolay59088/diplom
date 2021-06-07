import React from 'react'
import './Role.scss'
import * as PropTypes from 'prop-types'

const Role = ({ handleChange, Text, Image, changeText }) =>{
  return(
    <div className='Role'>
      <p>{Text}</p>
      <img src={Image} onClick={()=> handleChange(changeText)} alt={Text}/>
    </div>
  )
}

Role.propTypes = {
  handleChange: PropTypes.func,
  Text: PropTypes.string,
  Image: PropTypes.string,
  changeText: PropTypes.string
}

export default Role