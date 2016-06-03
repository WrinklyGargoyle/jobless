import { USER_GET_RESPONSE, USER_POST_RESPONSE, USER_PUT_RESPONSE } from './actions/user.js';
import { JOB_GET_RESPONSE, JOB_POST_RESPONSE, JOB_PUT_RESPONSE } from './actions/job.js'
import {DEBUG_ON, DEBUG_OFF} from './actions/debug.js';
import { 
  GET_JOB,
  RECEIVE_JOB,
  POST_JOB,
  POST_RECEIVE_JOB,
  RECEIVE_POST_USER,
  GET_JOBLIST,
  RECEIVE_JOBLIST,
  GET_USER,
  RECEIVE_USER,
  INVALIDATE_USER,
  POST_USER } from './actions.js';

export const debug = function(state = false, action) {
  switch(action.type) {
    case DEBUG_ON:
      return true;
    case DEBUG_OFF:
      return false;
    default:
      !state || console.log('ACTION DISPATCHED:',JSON.stringify(action));
      return state;
  }
}

export const user = function(state={}, action) {
  switch(action.type) {
    case USER_GET_RESPONSE:
      return action.data;
    case USER_POST_RESPONSE:
      return action.data;
    case USER_PUT_RESPONSE:
      return action.data;
    default:
      return state
  }
}

export const job = function(state={}, action) {
  switch(action.type) {
    case JOB_GET_RESPONSE:
      return action.data;
    case JOB_POST_RESPONSE:
      return action.data;
    case JOB_PUT_RESPONSE:
      return action.data;
    default:
      return state;
  }
}

