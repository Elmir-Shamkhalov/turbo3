export const FETCH_CARS = "FETCH_CARS";
export const FILTER_CARS = "FILTER_CARS";

export function filterCarsAction(payload) {
  console.log("yes")
  return {
    type: "FILTER_CARS",
    payload,
  };
}


export function fetchcars() {
  return (dispatch) => {
    dispatch({
      type: "FETCH_CARS",
      payload: JSON.parse(localStorage.getItem("cars")),
    });
  };
}


