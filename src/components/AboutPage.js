import "../styles/AboutPage.css";


const AboutPage = () => {
    

    return (
        <div className="aboutpage-container">
            <div className="aboutpage-header">
                <img src={require("../assets/love gely logo.png")} alt="Logo" className="aboutpage-logo" />
                <nav className="aboutpage-nav">
                    <a href="/" className="nav-link">HOME</a>
                    <a href="/productpage" className="nav-link">SHOP</a>
                    <a href="/cartpage" className="nav-link">MY CART</a>
                    {/* <a href="/reviews" className="nav-link">REVIEWS</a> */}
                    <a href="/aboutpage" className="nav-link active">ABOUT</a>
                </nav>
            </div>

           <div className="aboutpage-white-rectangle">
            <img src={require("../assets/aboutusimage.png")} alt="About Us" className="aboutus-image" />
            <h1 className="aboutus-text">About Us</h1>
            <p className="aboutus-paragraph">Located in Makati City, LOVE, GELY has been serving flower lovers with passion and dedication since 2020. 
                As a local florist, we take pride in our carefully crafted bouquets that speak volumes for any occasion. Whether you're celebrating love, 
                friendship, or a special event, our floral arrangements are designed to deliver the perfect message.
            </p>
           </div>

           <div className="aboutpage-white-rectangle">
            <div className="ourstory-row">
              <div>
                <div className="ourstory-text">Our Story</div>
                <div className="ourstory-paragraph">
                  At LOVE, GELY, we believe that every flower tells a story. Our journey started with a simple goal: to spread joy through the beauty of flowers. 
                  With years of experience in the floral industry, our team carefully selects the freshest blooms, ensuring that every arrangement is a true work of art.
                </div>
              </div>
              <img src={require("../assets/ourstoryimage.png")} alt="Our Story" className="ourstory-image" />
            </div>
           </div>

           <div className="aboutpage-white-rectangle">
            <img src={require("../assets/whychooseusimage.png")} alt="Why Choose Us" className="whychooseus-image" />
            <div className="whychooseus-text">Why Choose Us</div>
            <div className="whychooseus-paragraph">
              <ul>
                <li>Fresh, hand-picked flowers for every occasion.</li>
                <li>Expert floral designers with an eye for detail.</li>
                <li>Fast and reliable delivery services.</li>
                <li>Custom arrangements to suit any celebration.</li>
              </ul>
              <p className="whychooseus-note">
                We understand how important it is to make every moment special, and that’s why each of our flower arrangements is crafted with love and care.
              </p>
            </div>
           </div>


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
                    <img src={require("../assets/love gely logo.png")} alt="Logo" className="footer-logo" />
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

export default AboutPage;
