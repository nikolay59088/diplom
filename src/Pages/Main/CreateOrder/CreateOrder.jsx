import React, { useState } from 'react'
import './CreateOrder.scss'
import TextField from '../../../Components/TextField/TextField'
import ComboBox from '../../../Components/ComboBox/ComboBox'
import Calendar from '../../../Components/Calendar/Calendar'
import Upload from '../../../Components/Upload/Upload'
import Button from '../../../Components/Buttons/Button/Button'
import * as PropTypes from 'prop-types'


const CreateOrder = ({ openMessage }) =>{

  const cities = ['Иркутск', 'Саянск', 'Ангарск', 'Усолье-сибирское']

  const centre = ['Печатник']

  const color = ['Цветная', 'Черно-белая']

  const format = ['А4', 'А3']

  const type = ['Обычная', 'Глянцевая']

  const [files,   setFiles] = useState({
    data: []
  })

  const [result, setResult] = useState({
    skid: 0,
    sum: 0
  })

  const dragDocs = (e) =>{
    e.preventDefault()
    const file = files.data
    file.push(e.dataTransfer.files[0])
    setFiles({ data: file })
    setResult({ ...result, sum: 4 })
  }

  const addOrder = () =>{
    openMessage('Успешно', 'Заказ сформирован')
  }


  return(<div className='body'>
    <p className={'bodyHeader'}>Новый заказ</p>
    <form className='newOrder'>
      <TextField Type='text' Name='fio' Label='ФИО' PlaceHolder={'Иванов Иван Иванович'}/>
      <ComboBox data={cities} Name='city' Label='Город'/>
      <ComboBox data={centre} Name='centre' Label='Центр печати'/>
      <ComboBox data={type} Name='type' Label='Тип бумаги'/>
      <ComboBox data={color} Name='color' Label='Цвет печати'/>
      <ComboBox data={format} Name='format' Label='Формат бумаги'/>

      <Calendar Label={'Дата печати'}/>
      
      <Upload label={'Файлы для печати'} onDrop={dragDocs} data={files.data}/>
      <p className='skid'>Скидка: {result.skid} руб.</p>
      <p className='sum'>Сумма к оплате: {result.sum} руб.</p>
      <div className='orderButtons'>
        <Button className='cancel' text='Отмена'/>
        <Button className='createOrder' onClick={addOrder} text='Оформить'/>
      </div>
    </form>
  </div>)
}

CreateOrder.propTypes = {
  openMessage: PropTypes.func
}

export default  CreateOrder