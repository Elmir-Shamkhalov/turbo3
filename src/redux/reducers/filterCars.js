import { FILTER_CARS } from "../actions/filterCaars";

const initialState = {
  filterCars: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FILTER_CARS:
      return {
        ...state,
        filterCars: action.payload,
      };
    default:
      return state;
  }
};