import { votingDetailsActionTypes } from './votingDetails-action-types';

const addPetted = () => ({
  type: votingDetailsActionTypes.UP_PETTED,
});

const addUnpetted = () => ({
  type: votingDetailsActionTypes.UP_UNPETTED,
});

const addSkipped = () => ({
  type: votingDetailsActionTypes.UP_SKIPPED,
});

const addVoted = () => ({
  type: votingDetailsActionTypes.UP_VOTED,
});

export const resetDetails = () => ({
  type: votingDetailsActionTypes.RESET_DETAILS,
});

export const votingDetailsActions = {
  addPetted,
  addUnpetted,
  addSkipped,
  addVoted,
};
