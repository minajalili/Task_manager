export const ModalVisibilityReducer = (state = false, action )=>{
    switch (action.type){
        case 'MODAL_VISIBILITY_SHOW':
            return state = true
        case 'MODAL_VISIBILITY_HIDDEN':
            return state = false
        default:
            return state        
    }
}
export const ToggleTaskListReducer = (state = true , action)=>{
    switch(action.type){
        case 'TASK_LIST_SHOW':
            return state =true
        case 'TASK_LIST_HIDDEN':
            return state = false
        default:
            return state 
    }
}