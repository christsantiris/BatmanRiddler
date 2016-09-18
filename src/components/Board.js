import React, { Component } from 'react'
import { Link } from 'react-router'

class Board extends Component {
  render () {
    return (
      <div className='board'>
        <table>
          <tbody>
            <tr>
              <Link to='/game'><td className='riddler'>The Riddler's Hideout</td></Link>
              <Link to='/game'><td className='joker'>The Joker's Hideout</td></Link>
              <Link to='/game'><td className='penguin'>The Penguin's Hideout</td></Link>
              <Link to='/game'><td className='falcone'>Don Falcone's Restaurant</td></Link>
            </tr>
            <tr>
              <Link to='/game'><td className='cityhall'>Gotham City Hall</td></Link>
              <Link to='/game'><td className='arkham'>Arkham Asylum</td></Link>
              <Link to='/game'><td className='sewer'>The Sewer System</td></Link>
              <Link to='/game'><td className='warehouse'>An Abandoned Warehouse</td></Link>
            </tr>
            <tr>
              <Link to='/game'><td className='powerplant'>Gotham Power Plant</td></Link>
              <Link to='/game'><td className='police'>GCPD</td></Link>
              <Link to='/game'><td className='hospital'>Gotham General Hospital</td></Link>
              <Link to='/game'><td className='park'>Gotham Amusement Park</td></Link>
            </tr>
            <tr>
              <Link to='/game'><td className='port'>Gotham City Port</td></Link>
              <Link to='/game'><td className='wayne'>Wayne Enterprises</td></Link>
              <Link to='/game'><td className='bank'>The Bank</td></Link>
              <Link to='/game'><td className='crimescene'>The Crime Scene</td></Link>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}
export default Board
