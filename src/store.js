import { createStore } from 'redux'

import reducers from './reducers'

const store = createStore(reducers, { correctAnswers: 0, incorrectAnswers: 0, win: false, questions: [], difficulty: 'easy' }, window.devToolsExtension && window.devToolsExtension())

export default store
