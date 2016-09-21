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

  static propTypes = {
    startGame: React.PropTypes.func,
    questions: React.PropTypes.array
  }

  componentDidMount () {
    if (this.props.questions.length === 0) {
      this.props.startGame()
    }
  }

  render () {
    return (
      <div className='board'>
      {cells.map((cell, index) => {
        return <Link to={`/game/${this.props.params.difficulty}/${index}`} key={index}>
          <div className={cx(cell.className, 'cell')} />
        </Link>
      })}
        <footer><Link to='/'><button>Back</button></Link></footer>
      </div>
    )
  }
}
export default Board
