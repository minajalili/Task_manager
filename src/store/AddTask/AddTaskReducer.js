import * as actions from "./AddTaskActionTypes";

const initialState = {
    visibility : false
}

const AddTaskReducer = (state = initialState, action) => {
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

export default AddTaskReducer