import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import AddCar from "./AddCar";
import Allcars from "./Allcars";

class Filter extends Component {
  state = {
    brand: "",
    minPrice: '',
    maxPrice: '',
  };

  handleFormDatas = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  searchCars = e => {
    e.preventDefault();
    let filteredCars = [];
    const { brand, minPrice, maxPrice } = this.state;
    let carsDb = JSON.parse(localStorage.getItem("cars"));
    let data = carsDb.filter(x=> 
      minPrice 
      ? 
      parseInt(x.price) >= minPrice
      :
      maxPrice 
      ?
      parseInt(x.price) <= maxPrice
      :
      brand
      ?
      x.brand.toLowerCase() === brand.toLowerCase()
      :
      parseInt(x.price) >= minPrice && parseInt(x.price) <= maxPrice && x.brand.toLowerCase() === brand.toLowerCase()
    );
    console.log(data)
    // console.log(filteredCars);
    // localStorage.setItem("cars", JSON.stringify(filterCars));

  };

  render() {
    return (
      <div>
        <form className="filter-wrapper">
          <div className="cars-filter">
            <select name="brand" className="cars-section" onChange={this.handleFormDatas}>
              <option value="bmw">BMW</option>
              <option value="opel">Opel</option>
              <option value="mazda">Mazda</option>
              <option value="audi">Audi</option>
              <option value="haval">Haval</option>
              <option value="honda">Honda</option>
              <option value="hummer">Hummer</option>
              <option value="lada">Lada</option>
            </select>
          </div>
          <div className="filter-price">
            <label htmlFor="price">Qiymət</label>
            <select className="valuta">
              <option value="azn"> AZN</option>
              <option value="usd"> USD</option>
              <option value="eur"> EUR</option>
            </select>
            <input
              className="string-optional"
              onChange={this.handleFormDatas}
              type="text"
              placeholder="min"
              id="price-from"
              name="minPrice"
              value={this.state.minPrice}
            />
            <input
              className="string-optional"
              onChange={this.handleFormDatas}
              type="text"
              placeholder="max"
              id="price-to"
              name="maxPrice"
              value={this.state.maxPrice}
            />
          </div>
          <button className="btn-search" onClick={this.searchCars}>
            Axtar
          </button>
        </form>
        <Routes>
          <Route path="addnew" element={<AddCar />} />
          <Route path="autos" element={<Allcars />} />
        </Routes>
      </div>
    );
  }
}

export default Filter;
