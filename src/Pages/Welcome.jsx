import React, { useState } from 'react'
import Button from '../Components/Buttons/Button/Button'
import './Welcome.scss'
import WelcomeForm from './Auth/WelcomeForm/WelcomeForm'

const Welcome = () =>{

  const [state, setState] = useState(false)

  const openForm = () =>{
    if (state === true){
      setState(false)
    }
    else{
      setState(true)
    }
  }

  return(
    <>
      <header className='header'>
        {
          state === true ? <WelcomeForm handleClose={openForm}/> : null
        }
        <ul className='headerMenu'>
          <li>Возможности</li>
          <li>Преимущества</li>
          <li>Контакты</li>
        </ul>
        <div className='headerButton'>
          <Button text={'войти'} onClick={openForm} className='whiteButton'/>
        </div>
      </header>
      <div className='welcomeBody'>
        <div className='welcomeText'>
          <h1>{'«Печатник»'}</h1>
          <p>Распечатай документ, где тебе удобно</p>
        </div>
      </div>

    </>
  )
}

export default Welcome