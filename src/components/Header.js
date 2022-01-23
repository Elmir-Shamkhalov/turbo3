import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="header-bar-container">
        <div className="header-bar">
          <div className="header-left">
            <h1>TURBO.AZ </h1>
            <span>maşın alqı-satqısı </span>
          </div>
          <span className="contact">
            Dəstək xidməti: (012) 599-08-01; (012) 505-77-55
          </span>
          <div className="header-right">
            <p>по-русски</p>
            <p>
              <i className="far fa-heart"></i>Seçilmişlər
            </p>
            <p>Giriş</p>
          </div>
        </div>
        <div className="header-tabs">
          <a href="#"> BINA.AZ</a>
          <a href="#">TAP.AZ</a>
          <a href="#">BOSS.AZ</a>
        </div>
      </div>
      <div className="header-nav-top">
        <div className="header-nav">
          <div className="header-nav-left">
            <Link className="autos" to="autos">
              Bütün elanlar
            </Link>

            <h4>Avtosalonlar</h4>
            <h4>Ehtiyat hissələri və aksesuarlar</h4>
          </div>
          <div className="header-nav-right">
            <div className="product-button">
              <i className="fas fa-plus-circle"></i>
              <Link className="product-button-name" to="addnew">
                Elan yerləşdir
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
