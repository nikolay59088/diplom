import React from 'react'
import './Printers.scss'
import { ReactComponent as Refresh } from '../../../Images/refresh.svg'
import Printer from '../../../Components/Printer/Printer'


const Printers = () =>{

  const openPDF = async() =>{
    const res = await fetch('http://localhost:3002/files/123.pdf')

    const data = res.blob()
    await data.then((res) =>{
      const url = window.URL.createObjectURL(new Blob([res]))
      const link = document.createElement('a')
      link.href = url
      link.setAttribute('download', '123.pdf')
      document.body.appendChild(link)
      link.click()
    })
  }


  const print = [
    {
      name: 'Microsoft Print to PDF',
      type: 'Обычная',
      resize: '600',
      format: 'A4',
      color: 'Цветная',
      status: 'активен'
    }
  ]


  return(<div className='body'>
    <div className='headerContainer'>
      <p className={'bodyHeader'} onClick={openPDF}>Принтеры</p>
      <Refresh/>
    </div>
    <div className='printersContainer'>
      {
        print.map((info, index)=>{
          return <Printer key={index} info={info}/>
        })
      }
    </div>
  </div>)
}

export default Printers