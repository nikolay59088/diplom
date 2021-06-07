import React, { useState } from 'react'
import './WelcomeForm.scss'
import Login from '../Login/Login'
import ChooseRole from '../ChooseRole/ChooseRole'
import * as PropTypes from 'prop-types'
import RegisterUser from '../RegisterUser/RegisterUser'


const WelcomeForm = ({ handleClose }) =>{

  const closeForm = (e) =>{
    if (e.target.className === 'welcomeForm'){
      handleClose()
    }
  }

  const [state, setState] = useState('Login')

  const changeState = (newVal) =>{
    setState(newVal)
  }

  const changeForm = () =>{
    switch(state){
    case 'Login': return <Login handleChange={changeState}/>
    case 'Choose': return <ChooseRole handleChange={changeState}/>
    case 'regUser': return <RegisterUser/>
    default: return <Login handleChange={changeState}/>
    }
  }

  return(
    <div className='welcomeForm' onMouseDown={closeForm}>
      <div className='formBack'>
        {changeForm()}
      </div>


    </div>

  )
}

WelcomeForm.propTypes = {
  handleClose: PropTypes.func
}

export default WelcomeForm