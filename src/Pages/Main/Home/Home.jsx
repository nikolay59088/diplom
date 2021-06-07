import React from 'react'
import './Home.scss'
import News from '../../../Components/News/News'

const Home = () =>{

  const news = [
    {
      version: '1.12',
      info: ['Изменение 1', 'Изменение 2', 'Изменение 3']
    },
    {
      version: '1.11',
      info: ['Изменение 1', 'Изменение 2', 'Изменение 3']
    }
  ]

  return(<div className='body'>
    <p className={'bodyHeader'}>Главная</p>
    {
      news.map((news, index) =>{
        return <News key={index} version={news.version} info={news.info}/>
      })
    }
  </div>)
}

export default Home