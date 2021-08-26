import {
  SET_CHATS,
  SET_ERROR,
} from "./actionTypes";

const initialState = {
  chats: [],
  error: null,
};

export const chatsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_CHATS: {
      return {
        ...state,
        chats: payload,
      };
    }
    case SET_ERROR: {
      return {
        ...state,
        error: payload,
      };
    }
    default:
      return state;
  }
};