import React, { Component } from 'react'
import { Link } from 'react-router'
import cx from 'classnames'

const cells = [
{className: 'riddler'},
{className: 'joker'},
{className: 'penguin'},
{className: 'arkham'},
{className: 'crimescene'},
{className: 'port'},
{className: 'bank'},
{className: 'falcone'},
{className: 'wayne'},
{className: 'park'},
{className: 'powerplant'},
{className: 'warehouse'},
{className: 'sewer'},
{className: 'cityhall'},
{className: 'police'},
{className: 'hospital'}

]
class Board extends Component {
  render () {
    return (
      <div className='board'>
      {cells.map((cell, index) => {
        return <Link to='/game'>
          <div className={cx(cell.className, 'cell')} key={index} onClick={event => event.preventDefault}>The Riddler's Hideout
          </div>
        </Link>
      })}
      </div>
    )
  }
}
export default Board
