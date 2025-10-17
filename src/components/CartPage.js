import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/CartPage.css";

const CartPage = () => {
    return (
        <div className="cartpage-container">
            <div className="cartpage-header">
                <img
                    src={require("../assets/love gely logo.png")}
                    alt="Logo"
                    className="cartpage-logo"
                />
                <nav className="cartpage-nav">
                    <a href="/homepage" className="nav-link">HOME</a>
                    <a href="/productpage" className="nav-link">SHOP</a>
                    <a href="/cartpage" className="nav-link active">MY CART</a>
                    {/* <a href="/reviews" className="nav-link">REVIEWS</a> */}
                    <a href="/aboutpage" className="nav-link">ABOUT</a>
                </nav>
            </div>

            <img
                src={require("../assets/My Cart.png")}
                alt="Flowers Header"
                className="flowers-header"
            />

            {/* ✅ Wrap both rectangles in a flex container */}
            <div className="cartpage-content">
                <div className="white-rectangle-cartpage1">
                    <div className="cart-items">
                        {/* Item 1 */}
                        <div className="cart-item">
                            <img src={require("../assets/flower4.png")} alt="Lover" className="cart-item-img" />
                            <div className="cart-item-details">
                                <div className="cart-item-name">LOVER</div>
                                <div className="cart-item-addon">Add On: Message Card<br />In Stock</div>
                            </div>
                            <div className="cart-item-price">PHP 1,999</div>
                            <div className="cart-item-qty">1</div>
                        </div>

                        <div className="divider"></div>

                        {/* Item 2 */}
                        <div className="cart-item">
                            <img src={require("../assets/flower1.png")} alt="Amber" className="cart-item-img" />
                            <div className="cart-item-details">
                                <div className="cart-item-name">AMBER</div>
                                <div className="cart-item-addon">Add On: Message Card<br />In Stock</div>
                            </div>
                            <div className="cart-item-price">PHP 1,799</div>
                            <div className="cart-item-qty">1</div>
                        </div>

                        <div className="divider"></div>

                        {/* Item 3 */}
                        <div className="cart-item">
                            <img src={require("../assets/flower2.png")} alt="Tinker" className="cart-item-img" />
                            <div className="cart-item-details">
                                <div className="cart-item-name">TINKER</div>
                                <div className="cart-item-addon">Add On: Message Card<br />In Stock</div>
                            </div>
                            <div className="cart-item-price">PHP 1,899</div>
                            <div className="cart-item-qty">1</div>
                        </div>

                        <div className="divider"></div>

                        {/* Item 4 */}
                        <div className="cart-item">
                            <img src={require("../assets/flower3.png")} alt="Mosh" className="cart-item-img" />
                            <div className="cart-item-details">
                                <div className="cart-item-name">MOSH</div>
                                <div className="cart-item-addon">Add On: Message Card<br />In Stock</div>
                            </div>
                            <div className="cart-item-price">PHP 1,099</div>
                            <div className="cart-item-qty">2</div>
                        </div>
                    </div>
                </div>


                <div className="white-rectangle-cartpage2">
                    {/* Add your order summary or checkout section here */}
                </div>
            </div>

            {/* Footer */}
            <div className="footer">
                <div className="footer-section">
                    <div className="footer-text">CONTACT US</div>
                    <div className="footer-text-info">
                        <div>Address: 3106 Gen. P. Garcia Street Barangay Bangkal, Makati City</div>
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

export default CartPage;
