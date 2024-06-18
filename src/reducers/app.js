import { SET_IS_MOBILE } from '../actions';

const initialState = {
  isMobile: false,
};

const app = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_IS_MOBILE:
      return {
        ...state,
        isMobile: payload,
      };

    default:
      return state;
  }
};

export default app;