import React, { Component } from 'react'
import { Link } from 'react-router'
import cx from 'classnames'

class Row extends Component {

  render () {
    return <div className='row'>
      <Link to='/game'>
        <div className={cx(cell.className, 'cell')} key={index} onClick={event => event.preventDefault}>The Riddler's Hideout
        </div>
      </Link>
        <Link to='/game'>
          <div className={cx(cell.className, 'cell')} key={index} onClick={event => event.preventDefault}>The Riddler's Hideout
          </div>
        </Link>
      <Link to='/game'>
        <div className={cx(cell.className, 'cell')} key={index} onClick={event => event.preventDefault}>The Riddler's Hideout
        </div>
      </Link>
      <Link to='/game'>
        <div className={cx(cell.className, 'cell')} key={index} onClick={event => event.preventDefault}>The Riddler's Hideout
        </div>
      </Link>
    </div>
  }
}

export default Row
