import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "../styles/ProductDetailPage.css";

const ProductDetailPage = () => {
  const location = useLocation();
  const { product } = location.state || {};

  const [liked, setLiked] = useState(false);

  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <div className="productdetailpage-container">
      <div className="productdetailpage-header">
        <img
          src={require("../assets/love gely logo.png")}
          alt="Logo"
          className="productdetailpage-logo"
        />
        <nav className="productdetailpage-nav">
          <a href="/homepage" className="nav-link">
            HOME
          </a>
          <a href="/productpage" className="nav-link active">
            SHOP
          </a>
          <a href="/cartpage" className="nav-link">
            MY CART
          </a>
          {/* <a href="/reviews" className="nav-link">
            REVIEWS
          </a> */}
          <a href="/aboutpage" className="nav-link">
            ABOUT
          </a>
        </nav>
      </div>

      <img
        src={require("../assets/flowersheader.png")}
        alt="Flowers Header"
        className="flowers-header"
      />

      <div className="white-rectangle-productdetail">
        <div className="product-detail">
          <img
            src={product.image}
            alt={product.name}
            className="productdetail-image"
          />
          <div className="product-info-detail">
            <h2 className="productdetail-name">{product.name}</h2>
            <p className="productdetail-price">{product.price}</p>
            <p className="productdetail-description">{product.description}</p>
            <div className="productdetail-purpose-row">
              <img
                src={require("../assets/bulletdetails.png")}
                alt="Bullet Details"
                className="bullet-details"
              />
              <span className="productdetail-text">Occasion/Purpose</span>
            </div>
            <p className="productdetail-purpose">{product.purpose}</p>

            <div className="productdetail-purpose-row">
              <img
                src={require("../assets/bulletdetails.png")}
                alt="Bullet Details"
                className="bullet-details"
              />
              <span className="productdetail-text">Inclusions</span>
            </div>
            <p className="productdetail-purpose">{product.inclusions}</p>

            <div className="productdetail-button-row">
              <div className="product-hearticon">
              <img
                src={
                  liked
                    ? require("../assets/pinkhearticon.png")
                    : require("../assets/hearticon.png")
                }
                alt="Heart"
                className="heart-icon"
                onClick={(e) => {
                  e.stopPropagation();
                  setLiked((l) => !l);
                }}
                style={{ cursor: "pointer" }}
              />
            </div>

            <button className="addtocart-button">ADD TO CART</button>
            </div>

            
          </div>
        </div>
      </div>

      <div className="footer">
        <div className="footer-section">
          <div className="footer-text">CONTACT US</div>
          <div className="footer-text-info">
            <div>
              Address: 3106 Gen. P. Garcia Street Barangay Bangkal, Makati City
            </div>
            <div>Mobile Number: +63 949 648 6100 / +63 927 740 3206</div>
            <div>Email: lovegelyflowershop@gmail.com</div>
          </div>
        </div>
        <div className="footer-section">
          <div className="footer-text">INFORMATION</div>
          <div className="footer-text-info">
            <div>Delivery Information</div>
            <div>How To Order</div>
            <div>Payment Terms / Payment Instructions</div>
            <div>Privacy Policy</div>
            <div>Terms and Conditions</div>
            <div>Blog</div>
          </div>
        </div>
        <div className="footer-section">
          <img
            src={require("../assets/love gely logo.png")}
            alt="Logo"
            className="footer-logo"
          />
          <img
            src={require("../assets/socmedicon.png")}
            alt="Social Media Icon"
            className="social-media-icon"
          />
        </div>
        <div className="footer-section">
          <div className="footer-text">CUSTOMER SERVICE</div>
          <div className="footer-text-info">
            <div>Contact Us</div>
            <div>Returns</div>
            <div>Site Map</div>
            <div>My Account</div>
            <div>Order History</div>
            <div>Wish List</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
