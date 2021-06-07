import React from 'react'
import './Printer.scss'
import * as PropTypes from 'prop-types'
import PrinterLogo  from '../../Images/printerPhoto.png'

const Printer = ({ info }) =>{
  return(
    <div className='Printer'>
      <img src={PrinterLogo} alt={'Принтер'}/>
      <p className='namePrinter'>{info.name}</p>

      <p className='headSettings'>Тип бумаги</p>
      <p>{info.type}</p>

      <p className='headSettings'>Разрешение</p>
      <p>{info.resize}</p>

      <p className='headSettings'>Формат печати</p>
      <p>{info.format}</p>

      <p className='headSettings'>Цвет чернил</p>
      <p>{info.color}</p>
      <div className='printerBottom'>
        <p className='headSettings'>Статус: </p>
        {
          info.status === 'активен' ?<p className='green'>{info.status}</p>: <p className='red'>{info.status}</p>
        }

      </div>
    </div>)
}

Printer.propTypes = {
  info: PropTypes.object
}

export default Printer