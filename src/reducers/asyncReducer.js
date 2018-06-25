import createReducer from './createReducer';
import { ASYNC_STARTED, ASYNC_FINISHED, ASYNC_FAILED} from '../actions/AsyncConstants';

const initialState = {
  loading: false
};

const asyncActionStarted = (state) => {
  return {
    ...state, loading: true
  }
};

const asyncActionFinished = (state) => {
  return {
    ...state, loading: false
  }
};

const asyncActionFailed = (state) => {
  return {
    ...state, loading: false
  }
};

export default createReducer(initialState, {
  [ASYNC_STARTED]: asyncActionStarted,
  [ASYNC_FINISHED]: asyncActionFinished,
  [ASYNC_FAILED]: asyncActionFailed
});