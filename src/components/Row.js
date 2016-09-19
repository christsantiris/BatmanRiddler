import React, { Component } from 'react'
import { Link } from 'react-router'

class Row extends Component {

  render () {
    return <div className='row'>
      <Link to='/game'><div className={cell.className} onClick={event => event.preventDefault}></div></Link>
      <Link to='/game'><div className={cell.className} onClick={event => event.preventDefault}></div></Link>
      <Link to='/game'><div className={cell.className} onClick={event => event.preventDefault}></div></Link>
      <Link to='/game'><div className={cell.className} onClick={event => event.preventDefault}></div></Link>
    </div>
  }
}

export default Row
