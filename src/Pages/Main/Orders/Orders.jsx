import React, { useState, useEffect } from 'react'
import './Orders.scss'
import { Calendar } from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import { getMonth } from './monthDict'
import { ReactComponent as CalImg } from '../../../Images/calendar.svg'
import TableOrders from '../../../Components/TableOrders/TableOrders'
import Button from '../../../Components/Buttons/Button/Button'
import { Redirect } from 'react-router-dom'


const Orders = () =>{


  const [date, setDate] = useState('')
  const [redir, setRedir] = useState(false)


  const dataTemp = [
    {
      number: 'номер 1',
      fio: 'Фио заказчика',
      time: 'Время заказа',
      cost: 'Стоимость',
      pay: true
    },
    {
      number: 'номер 2',
      fio: 'Фио заказчика',
      time: 'Время заказа',
      cost: 'Стоимость',
      pay: false
    },
  ]


  const mouseDown = (e) =>{
    let container = document.getElementsByClassName('react-calendar')[0]
    if (e.target.id === 'CalImg'){
      if (container.style.display === 'none' || container.style.display === '')
        container.style.display = 'block'
      else
        container.style.display = 'none'
    }else
    if (!container.contains(e.target)){
      container.style.display = 'none'
    }else{
      container.style.display = 'block'
    }
  }

  useEffect(()=>{
    let container = document.getElementsByClassName('react-calendar')[0]
    container.style.display = 'none'
    changeData(new Date().toLocaleString())
  },[])


  const addOrder = () =>{
    setRedir(true)
  }

  const changeData = (day) =>{
    let fullDay = day.toLocaleString().split(',')[0]
    let month = fullDay.split('.')
    let res = getMonth(month[1])

    setDate(Number.parseInt(month[0])+ ' '+res+ ' '+month[2]+'г.')
  }

  return(
    <>
      {redir ? <Redirect to={'/main/addOrder'}/>
        :
        <div className='body' onMouseDown={mouseDown}>
          <div className='orderUp'>
            <p className={'bodyHeader'}>Заказы</p>
            <Button text='Новый заказ' className='newOrder' onClick={addOrder}/>
            <div className='calendar'>
              <p id='chooseDate'>{date}</p>
              <CalImg/>
              <Calendar onChange={changeData}/>
            </div>
          </div>
          <TableOrders Data={dataTemp} Columns={['№ заказа', 'ФИО заказчика', 'Время заказа', 'Стоимость, руб', 'Оплата']}/>

        </div>
      }
    </>)
}


export default Orders