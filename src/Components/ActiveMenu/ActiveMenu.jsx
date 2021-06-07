import React from 'react'
import * as PropTypes from 'prop-types'
import './ActiveMenu.scss'
import { Link, useRouteMatch } from 'react-router-dom'


const ActiveMenu = ({ to, text , children, exact, onlyIcons }) =>{

  const match = useRouteMatch({
    path: to,
    exact: exact
  })

  return(
    <>
      {
        match ?<Link to={to}>
          <div className={!onlyIcons ? 'activeMenu only' : 'activeMenu'}>

            <svg className='upperBorder '  width='40px' height='40px' >
              <rect width="40" height="40" />
              <circle  cx="0" cy="0" r="40" />
            </svg>
            <svg className='bottomBorder'  width='40px' height='40px' >
              <rect width="40" height="40" />
              <circle  cx="0" cy="40" r="40" />
            </svg>
            <div className='contentMenu'>
              {children}
              {onlyIcons ?<p>{text}</p> : null
              }

            </div>
          </div> </Link>:
          <Link to={to}><div  className={!onlyIcons ? 'notActiveMenu only' : 'notActiveMenu'}>
            <div className='contentMenu'>
              {children}
              {onlyIcons ?<p>{text}</p> : null
              }
            </div>
          </div></Link>
      }
    </>)
}

ActiveMenu.propTypes = {
  to: PropTypes.string,
  exact: PropTypes.bool,
  children: PropTypes.element,
  Logo: PropTypes.any,
  text: PropTypes.string,
  onlyIcons: PropTypes.bool
}
export default ActiveMenu