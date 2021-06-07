import React, { useState } from 'react'
import './Main.scss'
import LeftMenu from '../../Components/LeftMenu/LeftMenu'
import { Route, Switch } from 'react-router-dom'
import Header from '../../Components/Header/Header'
import Home from './Home/Home'
import Printers from './Printers/Printers'
import Report from './Report/Report'
import Profile from './Profile/Profile'
import Orders from './Orders/Orders'
import Settings from './Settings/Settings'
import CreateOrder from './CreateOrder/CreateOrder'
import Message from '../../Components/Message/Message'


const Main = () =>{

  const [message, setMessage] = useState({
    header: 'text',
    text: 'text'
  })

  const openMessage = (header, text) =>{
    setMessage({ header: header, text: text })
    document.getElementsByClassName('backMessage')[0].style.display = 'inline-flex'
  }

  return(
    <>
      <Message text={message.text} header={message.header}/>
      <div className='Main'>
        <LeftMenu role='Del' active='Главная'/>
        <div className='mainContainer'>
          <Header/>
          <Switch>
            <Route exact path={'/main/'}  component={Home}/>
            <Route path={'/main/printers'}  component={Printers}/>
            <Route path={'/main/orders'}   component={Orders}/>
            <Route path={'/main/report'}   component={Report}/>
            <Route path={'/main/settings'}   component={Settings}/>
            <Route path={'/main/profile'}   component={Profile}/>
            <Route path={'/main/addOrder'} render={()=> <CreateOrder openMessage={openMessage} />}   />
          </Switch>
        </div>
      </div>
    </>
  )
}

export default Main