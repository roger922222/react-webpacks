const types = {
    ADD_ITEM: 'my-app/toDoApp/ADD_ITEM',
    INPUT_CHANGE: 'my-app/toDoApp/INPUT_CHANGE'
}

const initialState = {
    list: [ { item: 'test', done: false } ],
    newToDo: ''
}

export default function reducer (state = initialState, action) {
    switch (action.type) {
        case types.ADD_ITEM:
            if (Object.prototype.toString.call(action.data) === '[object Array]') {
                return Object.assign({}, state, { list: [...state.list, ...action.data]})
            } else if (Object.prototype.toString.call(action.data) === '[object Object]') {
                let list
                if (action.data.add) {
                    list = state.list.map((items, index) => {
                        if (index === action.data.index) {
                            return {
                                item: items.item,
                                done: !items.done
                            }
                        }
                        return items
                    })
                    return Object.assign({}, state, { list: [ ...list ] })
                } else {
                    list = state.list.splice(action.data.index, 1)
                    return Object.assign({}, state, { list: [ ...state.list ]})
                }
            }
        case types.INPUT_CHANGE:
            return Object.assign({}, state, { newToDo: action.newToDo })
        default: 
            return state
    }
}

export const inputChange = dispatch => newToDo => {
    dispatch({
        type: types.INPUT_CHANGE,
        newToDo
    })
}

export const addList = dispatch => data => new Promise(resolve => {
    dispatch({
        type: types.ADD_ITEM,
        data
    })
    resolve()
})