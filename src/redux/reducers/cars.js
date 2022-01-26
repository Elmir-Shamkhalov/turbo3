import { FETCH_CARS, FILTER_CARS } from "../actions/cars";

const initialState = {
  cars: [],
  filterCars: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CARS:
      return {
        ...state,
        cars: action.payload,
      };
    case FILTER_CARS: {
      let properties = action.payload;
      let copyCars = [...state.cars];
      copyCars = copyCars.filter(
        (item) =>
          item.price === properties.minPrice ||
          item.price === properties.maxPrice ||
          item.brand === properties.brand
      );
      return {
        ...state,
        filterCars: copyCars,
        
      };
    }

    default:
      return state;
  }
};
