import * as actions from "./AddTaskActionTypes";

export const ModalVisible = () => {
  return {
    type: actions.MODAL_VISIBILITY_SHOW,
  };
};
export const ModalHidden = () => {
  return {
    type: actions.MODAL_VISIBILITY_HIDDEN,
  };
};
