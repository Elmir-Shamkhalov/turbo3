import { combineReducers } from "redux";
import cars from "./cars";
import filterCars from "./filterCars"

export default combineReducers({
  cars,
  filterCars,
});
