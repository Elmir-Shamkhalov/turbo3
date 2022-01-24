import React, { Component } from "react";
import FadeLoader from "react-spinners/FadeLoader";

class Autos extends Component {
  render() {
    const { cars: {cars} } = this.props;
    return (
      <div className="car-wrapper">
        <div className="car-cantainer" >
          {
            !cars
            ?
            <FadeLoader/>
            :
            cars.map(car => 
              <div className="car-card">
                <img src={car.carImage}></img>
                <h2>{car.brand}</h2>
                <h3>{car.price} AZN</h3>
              </div>
            )
          }
        </div>
      </div>
    );
  }
}

export default Autos;
