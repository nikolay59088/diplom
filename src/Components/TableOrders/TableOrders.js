import React from 'react'
import './TableOrders.scss'
import * as PropTypes from 'prop-types'
import AroundText from '../AroundText/AroundText'


const TableOrders = ({ Data, Columns }) =>{

  let headData = Object.keys(Data[0])


  return(<table className='tableOrders'>
    <thead>
      <tr>
        {
          Columns.map((Column, index)=>{
            return <td key={index}>{Column}</td>
          })
        }
      </tr>
    </thead>
    <tbody>
      {
        Data.map((row, index)=>{
          return <tr key={index}>
            {
              headData.map((name, index)=>{
                return <td key={index}>
                  {
                    name === 'pay'?
                      row[name] === true ?
                        <AroundText text={'оплачен'} color={'blue'}/> :
                        <AroundText text={'не оплачен'} color={'red'}/>
                      : row[name]
                  }
                </td>
              })
            }
          </tr>
        })
      }
    </tbody>
  </table>)
}

TableOrders.propTypes = {
  Data: PropTypes.array.isRequired,
  Columns: PropTypes.array.isRequired
}

export default TableOrders