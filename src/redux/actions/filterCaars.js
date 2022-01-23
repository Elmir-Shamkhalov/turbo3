export const FILTER_CARS = "FILTER_CARS";

export function filterCars() {
  return (dispatch) => {
    dispatch({
      type: "FILTER_CARS",
      payload: JSON.parse(localStorage.getItem("cars")),
    });
  };
}
