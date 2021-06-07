import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './LeftMenu.scss'
import { ReactComponent as Menu }  from '../../Images/menu.svg'
import { ReactComponent as Home } from '../../Images/home.svg'
import { ReactComponent as Printers } from '../../Images/printer.svg'
import { ReactComponent as Orders } from '../../Images/order.svg'
import { ReactComponent as Reports } from '../../Images/report.svg'
import { ReactComponent as Settings } from '../../Images/settings.svg'
import { ReactComponent as Logout } from '../../Images/logout.svg'
import ActiveMenu from '../ActiveMenu/ActiveMenu'
import { Redirect } from 'react-router-dom'


const LeftMenu = ({ role }) =>{

  const [leftMenu, setLeftMenu] = useState(true)
  const [exit, setExit] = useState(false)

  const hideShowMenu = (e) =>{
    const menu = e.target.parentNode.parentNode.parentNode
    if (menu.style.width === '17vw' || menu.style.width === ''){
      menu.style.width = '4.5vw'
      setLeftMenu(false)
    }
    else
    {
      menu.style.width = '17vw'
      setLeftMenu(true)
    }
  }

  const close = () =>{
    setExit(true)
  }


  let menu = ''
  switch(role){
  case 'User':
    menu = <ul>
      <ActiveMenu to={'/main/'} exact={true}   onlyIcons={leftMenu} text={'Главная'}><Home/></ActiveMenu>
      <ActiveMenu to={'/main/orders'}  onlyIcons={leftMenu} text={'Заказы'}><Orders/></ActiveMenu>
    </ul>
    break
  case 'Del':
    menu = <ul>
      <ActiveMenu to={'/main/'} exact={true}   onlyIcons={leftMenu} text={'Главная'}><Home/></ActiveMenu>
      <ActiveMenu to={'/main/printers'}  onlyIcons={leftMenu} text={'Принтеры'}><Printers/></ActiveMenu>
      <ActiveMenu to={'/main/orders'}  onlyIcons={leftMenu} text={'Заказы'}><Orders/></ActiveMenu>
      <ActiveMenu to={'/main/report'}  onlyIcons={leftMenu} text={'Отчеты'}><Reports/></ActiveMenu>
    </ul>
    break
  }

  return(
    <>
      {
        exit ? <Redirect to={'/'}/> :
          <div className='LeftMenu'>
            <div className='upperLeftMenu'>
              {
                leftMenu ? <h3>LOGO</h3> : null
              }
              <Menu onClick={hideShowMenu}/>
            </div>
            <div className='bodyLeftMenu'>
              {menu}
            </div>
            <div className='bottomMenu'>
              <ActiveMenu to={'/main/settings'}  onlyIcons={leftMenu} text={'Настройки'}><Settings/></ActiveMenu>
              <div onClick={close} className={!leftMenu ? 'notActiveMenu only' : 'notActiveMenu'}>
                <div className='contentMenu'>
                  <Logout/>
                  {leftMenu ? <p>Выход</p> : null}
                </div>
              </div>

            </div>
          </div>
      }
    </>
  )
}

LeftMenu.propTypes = {
  role: PropTypes.string,
  active: PropTypes.string
}

export default LeftMenu