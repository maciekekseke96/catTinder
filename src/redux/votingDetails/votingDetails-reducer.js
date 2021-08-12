import { votingDetailsActionTypes } from './votingDetails-action-types';

const INITIAL_STATE = {
  petted: 0,
  skipped: 0,
  unpetted: 0,
  voted: 0,
};

const votingDetailsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case votingDetailsActionTypes.UP_PETTED:
      return { ...state, petted: state.petted + 1 };
    case votingDetailsActionTypes.UP_SKIPPED:
      return { ...state, skipped: state.skipped + 1 };
    case votingDetailsActionTypes.UP_UNPETTED:
      return { ...state, unpetted: state.unpetted + 1};
    case votingDetailsActionTypes.UP_VOTED:
      return { ...state, voted: state.voted + 1 };
    default:
      return state;
  }
};

export { votingDetailsReducer };
