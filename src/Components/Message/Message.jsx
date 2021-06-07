import React from 'react'
import './Message.scss'
import * as PropTypes from 'prop-types'
import Button from '../Buttons/Button/Button'

const Message = ({ header, text }) =>{

  const closeMess = () =>{
    document.getElementsByClassName('backMessage')[0].style.display = 'none'
  }


  return(
    <div className='backMessage' onClick={closeMess}>
      <div className='messageContainer'>
        <div className='headerMess'><p>{header}</p></div>
        <div className='textMess'><p>{text}</p></div>
        <Button text='ОК' onClick={closeMess} className={'messButton'}/>
      </div>
    </div>
  )
}

Message.propTypes = {
  header: PropTypes.string,
  text: PropTypes.string
}

export default Message