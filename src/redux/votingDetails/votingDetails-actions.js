import { votingDetailsActionTypes } from './votingDetails-action-types';

export const addPetted = () => ({
  type: votingDetailsActionTypes.UP_PETTED,
});

export const addUnpetted = () => ({
  type: votingDetailsActionTypes.UP_UNPETTED,
});

export const addSkipped = () => ({
  type: votingDetailsActionTypes.UP_SKIPPED,
});

export const addVoted = () => ({
    type: votingDetailsActionTypes.UP_VOTED,
  });

export const votingDetailsActions = {
  addPetted,
  addUnpetted,
  addSkipped,
  addVoted
}