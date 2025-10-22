import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "../styles/ProductDetailPage.css";

const ProductDetailPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { product } = location.state || {};

  const [liked, setLiked] = useState(false);
  const [message, setMessage] = useState(""); // Add this state for showing messages

  if (!product) {
    return <div>Product not found.</div>;
  }

  const handleProductClick = (product) => {
    // Clean up the price by removing any existing "PHP" prefix
    const cleanedProduct = {
      ...product,
      price: product.price.replace(/PHP\s*/g, '').trim(),
      quantity: 1 // Add initial quantity
    };

    // Get existing cart items from localStorage
    const existingCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    
    // Check if product already exists in cart
    const existingProductIndex = existingCartItems.findIndex(
      item => item.name === cleanedProduct.name
    );

    let updatedCartItems;
    if (existingProductIndex !== -1) {
      // Product exists, update quantity
      updatedCartItems = existingCartItems.map((item, index) => {
        if (index === existingProductIndex) {
          return {
            ...item,
            quantity: (item.quantity || 1) + 1
          };
        }
        return item;
      });
    } else {
      // Product doesn't exist, add new item
      updatedCartItems = [...existingCartItems, cleanedProduct];
    }

    // Save updated cart to localStorage
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    
    // Show message
    setMessage("Item added to cart!");
    
    setTimeout(() => {
      setMessage("");
    }, 3000);
  };

  return (
    <div className="productdetailpage-container">
      {/* Add this message display near the top of your container */}
      {message && (
        <div style={{
          position: 'fixed',
          top: '20px',
          right: '20px',
          backgroundColor: '#4CAF50',
          color: 'white',
          padding: '15px',
          borderRadius: '5px',
          zIndex: 1000
        }}>
          {message}
        </div>
      )}
      
      <div className="productdetailpage-header">
        <img
          src={require("../assets/love gely logo.png")}
          alt="Logo"
          className="productdetailpage-logo"
        />
        <nav className="productdetailpage-nav">
          <a href="/" className="nav-link">
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
            <p className="productdetail-price">PHP {product.price}</p>
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

              <button
                className="addtocart-button"
                onClick={() => handleProductClick(product)}
              >
                ADD TO CART
              </button>
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
