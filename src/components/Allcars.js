import React, { Component } from "react";
import Autos from "./Autos";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { fetchcars } from "../redux/actions/cars";
class Allcars extends Component {
  // constructor(props) {
  //   super(props);
  //   console.log(props);
  // }

  static propTypes = {
    cars: PropTypes.object.isRequired,
  };

  componentDidMount() {
    console.log("fetchCars",this.props)
    this.props.fetchcars();
  }

  render() {
    console.log(this.props);
    return (
      <div className="all-cars">
        <h2>Butun Masinlar</h2>
        <Autos cars={this.props.cars} />
      </div>
    );
  }
}

const mapStateToProps = ({ cars }) => {
  return {
    cars,
  };
};

const mapDispatchToProps = {
  fetchcars,
};

export default connect(mapStateToProps, mapDispatchToProps)(Allcars);
