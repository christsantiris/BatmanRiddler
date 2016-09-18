import React, { Component } from 'react'
import { Link } from 'react-router'

class Board extends Component {
  render () {
    return (
      <div className='board'>
        <table>
          <tbody>
            <tr>
              <Link to='/game'><td className='riddler'></td></Link>
              <Link to='/game'><td className='joker'></td></Link>
              <Link to='/game'><td className='penguin'></td></Link>
              <Link to='/game'><td className='falcone'></td></Link>
            </tr>
            <tr>
              <Link to='/game'><td className='cityhall'></td></Link>
              <Link to='/game'><td className='arkham'></td></Link>
              <Link to='/game'><td className='sewer'></td></Link>
              <Link to='/game'><td className='warehouse'></td></Link>
            </tr>
            <tr>
              <Link to='/game'><td className='powerplant'></td></Link>
              <Link to='/game'><td className='police'></td></Link>
              <Link to='/game'><td className='hospital'></td></Link>
              <Link to='/game'><td className='park'></td></Link>
            </tr>
            <tr>
              <Link to='/game'><td className='port'></td></Link>
              <Link to='/game'><td className='wayne'></td></Link>
              <Link to='/game'><td className='bank'></td></Link>
              <Link to='/game'><td className='crimescene'></td></Link>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}
export default Board
