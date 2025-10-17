import "../styles/HomePage.css";
import React from "react";

const HomePage = () => {
    const products = [
        { name: "BELLE", price: "PHP 1,799", image: require("../assets/flower1.png") },
        { name: "SUNRISE", price: "PHP 1,799", image: require("../assets/flower2.png") },
        { name: "AURORA", price: "PHP 1,899", image: require("../assets/flower3.png") },
        { name: "PIXIE DREAM", price: "PHP 1,799", image: require("../assets/flower4.png") },
        { name: "UNWRITTEN", price: "PHP 1,799", image: require("../assets/flower5.png") },
        { name: "VIDIA", price: "PHP 1,899", image: require("../assets/flower6.png") },
        // Add more products as needed
    ];

    const [currentIndex, setCurrentIndex] = React.useState(0);

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? products.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev === products.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="homepage-container">
            <div className="homepage-header">
                <img src={require("../assets/love gely logo.png")} alt="Logo" className="homepage-logo" />
                <nav className="homepage-nav">
                    <a href="/homepage" className="nav-link active">HOME</a>
                    <a href="/productpage" className="nav-link">SHOP</a>
                    <a href="/cartpage" className="nav-link">MY CART</a>
                    {/* <a href="/reviews" className="nav-link">REVIEWS</a> */}
                    <a href="/aboutpage" className="nav-link">ABOUT</a>
                </nav>
            </div>
            <div className="white-small-rectangle">
                <h1 className="welcome-text">Hello!</h1>
                <p>Looking for something extraordinary? At Love, Gely, we create more than just bouquets—unforgettable moments. 
                    Our floral designs are crafted with care, each bloom chosen for its beauty and freshness, 
                    ensuring that your gift speaks volumes.
                    <br />
                    <br />Whether you're celebrating a birthday or an anniversary, or just want to make someone smile, 
                    we have the perfect arrangement for you. From elegant roses to vibrant seasonal blooms, explore our curated selection 
                    and find something as unique as your sentiment.
                    <br />
                    <br /> Why settle for ordinary when you can give extraordinary?
                </p>
                <button className="shop-now-button" onClick={() => window.location.href="/productpage"}>SHOP NOW</button>
            </div>
            <img src={require("../assets/flowershomepage.jpg")} alt="Flowers" className="homepage-flowers" />
            <div className="white-rectangle"></div>

            <img src={require("../assets/bestsellerheader.png")} alt="Best Seller Header" className="bestseller-header" />
            <p className="bestseller-subtext">Our top choices—roses for love and tulips for elegance—are perfect for any occasion. 
                <br />Whether it's romance or celebration, these blooms speak volumes.</p>
            <div className="second-white-rectangle">
                <button className="backbutton-btn" onClick={handlePrev}>
                    <img src={require("../assets/backbutton.png")} alt="back button" className="backbutton-image" />
                </button>
                <div className="carousel-products">
                    {[0, 1, 2].map((offset) => {
                        const productIndex = (currentIndex + offset) % products.length;
                        const product = products[productIndex];
                        return (
                            <div
                                className={`product-card${offset === 1 ? " center" : ""}`}
                                key={productIndex}
                            >
                                <img src={product.image} alt={product.name} className="flower-image" />
                                <div className="product-info">
                                    <span className="product-name">{product.name}</span>
                                    <span className="product-price">{product.price}</span>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <button className="nextbutton-btn" onClick={handleNext}>
                    <img src={require("../assets/nextbutton.png")} alt="next button" className="nextbutton-image" />
                </button>
            </div>
            <img src={require("../assets/promotext.png")} alt="Logo" className="promotext-image" />
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
                    <img src={require("../assets/love gely logo.png")} alt="Logo" className="homepage-footer-logo" />
                    <img src={require("../assets/socmedicon.png")} alt="Social Media Icon" className="social-media-icon" />
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

export default HomePage;
