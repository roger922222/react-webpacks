import importWithLoading from 'ROOT/libs/importWithLoading'

const route = {
    path: '/test',
    childRoutes: [
        {
            path: 'test-detailt',
            getComponent: importWithLoading(() => import('./containers/toDoAppContainer'))
        }
    ]
}

export default route