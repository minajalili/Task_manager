export const TasksListReducer = (state = { tasks: [] } , action)=>{
    switch(action.type){
        case 'TASK_LIST_REQUEST':
            return { loading : true, tasks:[] }
        case 'TASK_LIST_SUCCESS':
            return { loading : false, tasks: action.payload }
        case 'TASK_LIST_DONE':
            return {tasks : action.payload}
        default:
            return state
    }
}
