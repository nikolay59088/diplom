import React from 'react'
import './Header.scss'
import Avatar from '../../Images/profileAvatar.jpg'
import { ReactComponent as Points } from '../../Images/more.svg'
import { Link } from 'react-router-dom'

const Headers = () =>{
  return(<div className='mainHeader'>
    <img className='avatar' src={Avatar} alt='Аватар'/>
    <Link to={'/main/profile'}><Points/></Link>
  </div>)
}

export default Headers
