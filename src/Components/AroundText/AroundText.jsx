import React from 'react'
import './AroundText.scss'
import * as PropTypes from 'prop-types'

const AroundText = ({ text, color }) =>{
  return(<div className={'aroundText '+ color}>
    {text}
  </div>)
}

AroundText.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired
}

export default AroundText