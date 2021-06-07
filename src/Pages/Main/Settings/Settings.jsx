import React from 'react'
import './Settings.scss'
import ComboBox from '../../../Components/ComboBox/ComboBox'

const Settings = () =>{

  const languages = ['Русский', 'English']


  return(<div className='body'>
    <p className={'bodyHeader'}>Настройки</p>
    <p className='headerSettings'>Системные</p>
    <div className='settingsMainContainer'>
      <ComboBox data={languages} Name='languages' Label='Язык'/>
    </div>
    <p className='removeAcc'>Удалить профиль</p>
  </div>)
}

export default Settings