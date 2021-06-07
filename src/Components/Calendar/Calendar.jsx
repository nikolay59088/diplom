import React from 'react'
import './Calendar.scss'
import * as PropTypes from 'prop-types'

const Calendar = ({ startText='', Label }) =>{

  return(
    <div className='calendar'>
      <p>{Label}</p>
      <div className={'calendarBody'}>

        {
          startText.length ?<p>{startText}</p> : null
        }
        <input type='date' name='Календарь' />
      </div>
    </div>
  )
}

Calendar.propTypes = {
  startText: PropTypes.string,
  Label: PropTypes.string
}

export default Calendar