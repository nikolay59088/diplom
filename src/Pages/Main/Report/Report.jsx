import React from 'react'
import './Report.scss'
import ComboBox from '../../../Components/ComboBox/ComboBox'
import Calendar from '../../../Components/Calendar/Calendar'
import Button from '../../../Components/Buttons/Button/Button'

const Report = () =>{

  const colors =[
    'Цветная', 'Черно-белая'
  ]

  return(<div className='body'>
    <div className='reportUp'>
      <p className={'bodyHeader'}>Отчетность</p>

      <div className='reportBody'>
        <ComboBox data={colors} Label={'Цвет печати'} Name={'Color'}/>
        <div className='period'>
          <Calendar Label='Период' startText='C'/>
          <Calendar Label=' ' startText='по'/>
        </div>
        <Button text='Сформировать'/>
      </div>
    </div>
  </div>)
}

export default Report