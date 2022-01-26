import React, { Component } from "react";
// import FadeLoader from "react-spinners/FadeLoader";

class Autos extends Component {
  render() {
    const {
      cars,
      filterCars,
    } = this.props?.cars;
  
    return (
      <div className="car-wrapper">
        <div className="car-cantainer">
          {filterCars?.length > 0 ? (
            filterCars.map((car,id) => (
              <div key={id} className="car-card">
                <img src={car.carImage}></img>
                <h2>{car.brand}</h2>
                <h3>{car.price} AZN</h3>
              </div>
            ))
          ) : !cars ? (
            <p></p>
          ) : (
            cars.map((car,id) => (
              <div key={id} className="car-card">
                <img src={car.carImage}></img>
                <h2>{car.brand}</h2>
                <h3>{car.price} AZN</h3>
              </div>
            ))
          )}
        </div>
      </div>
    );
  }
}


export default Autos;
