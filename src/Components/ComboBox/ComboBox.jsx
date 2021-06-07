import React from 'react'
import './ComboBox.scss'
import * as PropTypes from 'prop-types'

const ComboBox = ({ Name, Label, Id, data }) =>{
  return(
    <div className='comboBox'>
      <label htmlFor={Name}>{Label}</label>
      <select id={Id}>
        {
          data.map((row, index)=>{
            return <option key={index} value={row}>{row}</option>
          })
        }
      </select>
    </div>
  )
}

ComboBox.propTypes = {
  Name: PropTypes.string,
  Label: PropTypes.string,
  Id: PropTypes.number,
  data: PropTypes.array
}

export default ComboBox