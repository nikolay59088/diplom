import React from 'react'
import * as PropTypes from 'prop-types'
import User from '../../../Images/user.png'
import Center from '../../../Images/center.png'
import './ChooseRole.scss'
import Role from './Role/Role'


const ChooseRole = ({ handleChange }) =>{

  return(
    <form className='chooseRole'>
      <h3>Выберите роль</h3>
      <div className='choose'>
        <Role Text='Пользователь' Image={User} handleChange={handleChange} changeText='regUser'/>
        <Role Text='Деловой центр' Image={Center} handleChange={handleChange}/>
      </div>
    </form>
  )
}

ChooseRole.propTypes = {
  handleChange: PropTypes.func
}

export default ChooseRole

