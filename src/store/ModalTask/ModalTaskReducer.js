import * as actions from "./ModalTaskActionTypes";

const initialState = {
    visibility : false
}

const ModalVisibilityReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.MODAL_VISIBILITY_SHOW:
      return {
        ...state,
        visibility: true
    };
    case actions.MODAL_VISIBILITY_HIDDEN:
      return {
        ...state,
        visibility: false
    };
    default:
      return state;
  }
};

export default ModalVisibilityReducer