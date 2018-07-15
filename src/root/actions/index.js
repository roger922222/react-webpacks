export const ActionType = {
    SHOW_LOADING: 'SHOW_LOADING',
    HIDE_LOADING: 'HIDE_LOADING'
}

export const newAction = (type, ...params) => {
    switch (type) {
        case ActionType.SHOW_LOADING:
            return { type }
        case ActionType.HIDE_LOADING:
            return { type }    
    }
}

export const showLoading = dispatch => () => dispatch(newAction(ActionType.SHOW_LOADING))

export const hideLoading = dispatch => () => dispatch(newAction(ActionType.HIDE_LOADING))
