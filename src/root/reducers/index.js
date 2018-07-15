import { routerReducer as routing } from 'react-router-redux'
import { ActionType } from '../actions/index'
import toDoApp from 'src/omodules/test/reducer'

const showLoading = (state = 0, action) => {
    if (action.type === ActionType.HIDE_LOADING) {
        return state - 1
    } else if (action.type === ActionType.SHOW_LOADING) {
        return state + 1
    }

    return state
}

const rootReducers = {
    routing,
    toDoApp,
    showLoading
}

export default rootReducers