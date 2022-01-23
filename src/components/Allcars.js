import React, { Component } from "react";
import Autos from "./Autos";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { fetchcars } from "../redux/actions/cars";
import { filterCars } from "../redux/actions/filterCaars";

class Allcars extends Component {
  static propTypes = {
    cars: PropTypes.object.isRequired,
  };

  componentDidMount() {
    this.props.fetchcars();
    this.props.filterCars();
  }

  render() {
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
  filterCars,
};

export default connect(mapStateToProps, mapDispatchToProps)(Allcars);
