import * as actions from './ModalTaskActionTypes'

export const ModalVisible = (dispatch)=>{
    
    dispatch({
        type: actions.MODAL_VISIBILITY_SHOW
    })
}
export const ModalHidden = (dispatch)=>{
    dispatch({
        type: actions.MODAL_VISIBILITY_HIDDEN
    })
}
