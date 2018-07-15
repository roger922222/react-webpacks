import { showLoading, hideLoading } from '../actions/index'
/**
 * add loading logo to the code splitting.
 */
let importWithLoading = (promise) => (nextState, cb) => {
    showLoading(store.dispatch)()
    promise().then(comp => {
        cb(null, comp.default)
        hideLoading(store.dispatch)()
    })
}

export default importWithLoading
