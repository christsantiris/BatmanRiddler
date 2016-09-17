import React, { Component } from 'react'

class Board extends Component {
  render () {
    return (
      <div className='board'>
        <table>
          <tbody>
            <tr>
              <td>The Riddlers Hideout</td>
              <td>The Police Station</td>
              <td>The Hospital</td>
              <td>The Jail</td>
            </tr>
            <tr>
              <td>City Hall</td>
              <td>The Joker's Hideout</td>
              <td>The Phone Booth</td>
              <td>The Parking Garage</td>
            </tr>
            <tr>
              <td>The Electric Company</td>
              <td>The Penguin's Nightclub</td>
              <td>The Pub</td>
              <td>The Amusement Park</td>
            </tr>
            <tr>
              <td>Wayne Enterprises</td>
              <td>The Port</td>
              <td>The Bank</td>
              <td>The Crime Scene</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}
export default Board
