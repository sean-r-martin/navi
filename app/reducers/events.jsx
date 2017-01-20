'use strict';
import axios from 'axios';

//*********** Constants ***********:

export const LOAD_ALL_EVENTS = 'LOAD_ALL_EVENTS';



//*********** Action Creators ***********:

export const loadAllEvents = (allEvents) => ({ type: LOAD_ALL_EVENTS, allEvents});


//*********** Async Action Creators ***********:

export const getAllEvents = () => {
  return (dispatch, getState) => {
    axios.get('/api/events')
      .then(res => res.data)
      .then(allEvents => {
        // console.log(allEvents)
        dispatch(loadAllEvents(allEvents));
      })
  }
}


//*********** Reducer ***********:

const initialState = { allEvents: [] };

const eventReducer = (state = initialState, action) => {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case LOAD_ALL_EVENTS:
      newState.allEvents = action.allEvents;
      break;
    default:
      return state;
  }
  return newState;
}

export default eventReducer;