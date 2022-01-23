import { FETCH_CARS } from "../actions/cars";

const initialState = {
  cars: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CARS:
      return {
        ...state,
        cars: action.payload,
      };
    default:
      return state;
  }
};
