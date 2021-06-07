import React, { useState } from 'react'
import TextField from '../../../Components/TextField/TextField'
import './Login.scss'
import * as PropTypes from 'prop-types'
import Button from '../../../Components/Buttons/Button/Button'
import { Redirect } from 'react-router-dom'


const Login = ({ handleChange }) =>{

  const [auth, setAuth] = useState(false)

  const handlerAuth = () =>{
    setAuth(true)
  }

  return(
    <>
      {
        auth === false ? <form className='authForm'>
          <h3>Войти в систему</h3>
          <TextField Label='Email' Name='email' PlaceHolder='example@example.com' Type='text'/>
          <TextField Label='Пароль' Name='Password' Type='password' PlaceHolder='Password'/>
          <div className='containerAuth'>
            <div className='containerRegister'>
              <p>Нет профиля?</p>
              <p className='link' onClick={()=> handleChange('Choose')}>Зарегистрироваться</p>
            </div>
            <Button text='Войти' onClick={handlerAuth}/>
          </div>
        </form> : <Redirect to={'/main'}/>
      }
    </>

  )
}

Login.propTypes = {
  handleChange: PropTypes.func
}

export default Login