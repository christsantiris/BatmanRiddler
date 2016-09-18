import React, { Component } from 'react'
import { Link } from 'react-router'

class Board extends Component {
  render () {
    return (
      <div className='board'>
        <table>
          <tbody>
            <tr>
              <td className='riddler'><Link to='/game'>The Riddlers Hideout</Link></td>
              <td className='joker'><Link to='/game'>The Joker's Hideout</Link></td>
              <td className='penguin'><Link to='/game'>The Penguin's Nightclub</Link></td>
              <td className='falcone'><Link to='/game'>Don Falcone's Italian Restaurant</Link></td>
            </tr>
            <tr>
              <td className='cityhall'><Link to='/game'>City Hall</Link></td>
              <td className='arkham'><Link to='/game'>Arkham Asylum</Link></td>
              <td className='sewer'><Link to='/game'>The Sewer System</Link></td>
              <td className='warehouse'><Link to='/game'>An Abandoned Warehouse</Link></td>
            </tr>
            <tr>
              <td className='powerplant'><Link to='/game'>The Power Plant</Link></td>
              <td className='police'><Link to='/game'>The Police Station</Link></td>
              <td className='hospital'><Link to='/game'>The Hospital</Link></td>
              <td className='park'><Link to='/game'>The Amusement Park</Link></td>
            </tr>
            <tr>
              <td className='port'><Link to='/game'>The Port</Link></td>
              <td className='wayne'><Link to='/game'>Wayne Enterprises</Link></td>
              <td className='bank'><Link to='/game'>The Bank</Link></td>
              <td className='crimescene'><Link to='/game'>The Crime Scene</Link></td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}
export default Board
