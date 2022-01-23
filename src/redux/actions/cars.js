export const FETCH_CARS = "FETCH_CARS";

export function fetchcars() {
  return (dispatch) => {
    dispatch({
      type: "FETCH_CARS",
      payload: JSON.parse(localStorage.getItem("cars")),
    });
  };
}


