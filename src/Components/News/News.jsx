import React from 'react'
import './News.scss'
import * as PropTypes from 'prop-types'

const News = ({ version, info }) =>{
  return(
    <div className='news'>
      <h3>{'Версия '+version}</h3>
      <ul>
        {
          info.map((news, index) =>{
            return <li key={index}>{news}</li>
          })
        }
      </ul>
    </div>)
}

News.propTypes = {
  version: PropTypes.string,
  info: PropTypes.array
}

export default News