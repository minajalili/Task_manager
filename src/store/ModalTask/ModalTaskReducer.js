import * as actions from "./ModalTaskActionTypes";

const initialState = {
    visibility : false
}

const ModalTaskReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.MODAL_VISIBILITY_SHOW:
      console.log('MODAL_VISIBILITY_SHOW');
      return {
        ...state,
        visibility: true
    };
    case actions.MODAL_VISIBILITY_HIDDEN:
      console.log('MODAL_VISIBILITY_HIDDEN');
      return {
        ...state,
        visibility: false
    };
    default:
      return state;
  }
};

export default ModalTaskReducer