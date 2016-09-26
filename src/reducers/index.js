export default (state = 0, action) => {
  switch (action.type) {
    case 'CORRECTANSWERS':
      return {
        incrementCorrect: state.correctAnswers + 1,
        computerWinCount: state.incorrectAnswers,
        win: action.false
      }
    case 'INCORRECTANSWERS':
      return {
        playerWinCount: state.incorrectAnswers + 1,
        computerWinCount: state.correctAnswers,
        win: action.false
      }
    case 'DIFFICULTY':
      return {
        difficulty: state.difficulty
      }
    default: return state
  }
}
