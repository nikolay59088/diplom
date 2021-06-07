import React from 'react'
import './DragFile.scss'
import * as PropTypes from 'prop-types'

const DragFile = ({ file }) =>{

  const format = file.name.split('.')


  return(<div className='dragFile'>
    <div className='dragFileImg'>{format[format.length-1]}</div>
    <p className='dragFileName'>{file.name}</p>
  </div>)
}

DragFile.propTypes = {
  file: PropTypes.object
}

export default DragFile