import * as types from '../actions/types';
import _ from 'lodash';

export const currentWorkout = (state = [], { type, payload }) => {
  switch (type) {
    case types.FETCH_CURRENT_WORKOUT_COMPLETE:
      return payload;
    case types.ADD_EXERCISE:
      return [payload, ...state];
    case types.REMOVE_EXERCISE:
      const index = _.findIndex(state, {name: payload.name});
      return [...state.slice(0, index), ...state.slice(index + 1)];
    default:
      return state;
  }
};
