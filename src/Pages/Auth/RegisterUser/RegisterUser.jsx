import React from 'react'
import TextField from '../../../Components/TextField/TextField'
import './RegisterUser.scss'
import Button from '../../../Components/Buttons/Button/Button'

const RegisterUser = () =>{
  return(
    <form className='registerUser'>
      <h3>Регистрация</h3>
      <TextField Label='ФИО*' Name='fio' Type='text' PlaceHolder='ФИО'/>
      <TextField Label='Email*' Name='email' Type='email' PlaceHolder='example@example.com'/>
      <TextField Label='Пароль*' Name='password' Type='password'/>
      <Button text='Зарегистрироваться' />
    </form>
  )
}


export default RegisterUser