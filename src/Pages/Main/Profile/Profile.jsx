import React from 'react'
import './Profile.scss'
import Logo  from '../../../Images/profileAvatar.jpg'
import { ReactComponent as Edit } from '../../../Images/edit.svg'
import Cost from '../../../Components/Cost/Cost'

const Profile = () =>{

  const data = [
    {
      type: 'Обычная',
      data:[
        {
          startPage: 1,
          endPage: 1,
          cost: 4
        },
        {

          startPage: 30,
          endPage: 60,
          cost: 3
        },
        {
          startPage: 61,
          endPage: 100,
          cost: 2
        }
      ]
    },
    {
      type: 'Матовая',
      data:[
        {
          startPage: 1,
          endPage: 1,
          cost: 8
        },
        {

          startPage: 25,
          endPage: 50,
          cost: 6
        },
        {
          startPage: 51,
          endPage: 100,
          cost: 5
        }
      ]
    },

  ]

  return(
    <div className='body'>
      <p className={'bodyHeader'}>Профиль</p>
      <div className='profileInfo'>
        <img className='profileLogo' src={Logo} alt={'Лого'}/>
        <div className='infoContainer'>
          <div className='editInfo'>
            <p>Информация</p>
            <Edit/>
          </div>
          <div className='infoDetail'>
            <p className='headSettings'>Наименование:</p>
            <p>Наименование</p>
            <p className='headSettings'>Местоположение:</p>
            <p>Местоположение</p>
          </div>
        </div>
      </div>
      <div className={'costContainer'}>
        <div className='editInfo'>
          <p>Расценки печати</p>
          <Edit/>
        </div>
        <div className='blackCost'>
          <p>Чёрно-белая</p>
          <div className='block'>
            {
              data.map((block, index) =>{
                return <Cost key={index} type={block.type} data={block.data}  />
              })
            }
          </div>
        </div>
      </div>

    </div>)
}

export default Profile