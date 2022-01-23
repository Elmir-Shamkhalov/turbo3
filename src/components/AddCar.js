import React, { Component } from "react";

class AddCar extends Component {
  state = {
    brand: "",
    color: "",
    price: "",
    carImage: "",
  };

  handleFormDatas = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addCar = () => {
    let carsEntity = JSON.parse(localStorage.getItem("cars"));
    if (carsEntity) {
      carsEntity.push(this.state);
    } else {
      carsEntity = [];
      carsEntity.push(this.state);
    }

    localStorage.setItem("cars", JSON.stringify(carsEntity));
    window.location.href = "/autos";
  };

  addImage = () => {
    document.getElementById("images_input").click();
  };

  handleCarImage = (e) => {
    let image = e.target.files[0];
    let fileReader = new FileReader();
    fileReader.readAsDataURL(image);
    fileReader.onload = () => {
      this.setState({ carImage: fileReader.result });
    };
  };

  render() {
    return (
      <div className="product-container">
        <div className="new-product">
          <label>Marka</label>
          <select
            className="new-cars"
            name="brand"
            onChange={this.handleFormDatas}
          >
            <option value="">Secin</option>
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
        <div className="new-product">
          <label>Reng</label>
          <select
            className="new-cars"
            name="color"
            onChange={this.handleFormDatas}
          >
            <option value="">Secin</option>
            <option value="qara">Qara</option>
            <option value="qirmizi">Qirmizi</option>
            <option value="yasil">Yasil</option>
            <option value="sari">Sari</option>
          </select>
        </div>
        <div className="new-product">
          <label>Qiymet</label>
          <input
            type="text"
            name="price"
            className="new-cars car-price"
            onChange={this.handleFormDatas}
          />
          <p>AZN</p>
        </div>
        <div className="cars-photos-container">
          {this.state.carImage && (
            <img
              src={this.state.carImage}
              className="car-image"
              alt="car-image"
            />
          )}
        </div>
        <div>
          <button onClick={this.addImage}>Şəkil Əlavə et</button>
        </div>
        <input
          type="file"
          accept="image/*"
          onChange={this.handleCarImage}
          id="images_input"
          hidden
        />
        <button className="btn-add" onClick={this.addCar}>
          Elani Yerlesdir.
        </button>
      </div>
    );
  }
}

export default AddCar;
