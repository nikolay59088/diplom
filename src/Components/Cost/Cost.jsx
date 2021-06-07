import React from 'react'
import './Cost.scss'
import * as PropTypes from 'prop-types'

const Cost = ({ type, data }) =>{
  return(<div className='costBlock'>
    <p className='nameBlock'>{type}</p>

    {
      data.map((row, index)=>{
        return <div key={index} className='costRow'>
          {
            row.startPage === row.endPage ? <><p>{row.endPage } лист</p><p>{row.cost} руб.</p></> :
              <><p>{row.startPage+' - '+row.endPage } листов</p><p>{row.cost} руб/лист</p></>
          }
        </div>
      })
    }

  </div>)
}

Cost.propTypes = {
  type: PropTypes.string,
  data: PropTypes.array
}

export default Cost