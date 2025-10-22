import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import jsPDF from 'jspdf';
import "../styles/CartPage.css";

const CartPage = () => {
    const navigate = useNavigate();
    const [cartItems, setCartItems] = useState([]);
    const [funFact, setFunFact] = useState("");
    const [billingDetails, setBillingDetails] = useState({
        name: "Donny Pangilinan",
        street: "22 Mabini St.,",
        barangay: "Barangay Poblacion,",
        cityProvince: "Biñan City, Laguna"
    });
    const [isEditing, setIsEditing] = useState(false);
    const location = useLocation();

    useEffect(() => {
        // Load cart items
        const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
        setCartItems(storedCartItems);
        
        // Set random fun fact
        const funFacts = [
            "Roses are the only flowers that have their own color name!",
            "Tulips were once more valuable than gold in Holland!",
            "Sunflowers can help clean radioactive soil!",
            "Some flowers are edible and are used in cooking!",
            "The world's largest flower, Rafflesia, can grow up to 3 feet across!",
            "Orchids can live up to 100 years!",
            "Chrysanthemums are believed to bring happiness and laughter in Asian cultures!",
            "The lotus flower can survive for many centuries!",
            "Daisies are actually two flowers in one!",
            "Some flowers bloom only at night!"
        ];
        const randomIndex = Math.floor(Math.random() * funFacts.length);
        setFunFact(funFacts[randomIndex]);
    }, []);

    const handleDeleteItem = (index) => {
        const updatedCartItems = cartItems.filter((_, i) => i !== index);
        setCartItems(updatedCartItems);
        localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    };

    const calculateSubtotal = () => {
        return cartItems.reduce((total, item) => {
            const price = parseFloat(item.price?.toString().replace(/,/g, '')) || 0;
            const quantity = parseInt(item.quantity) || 1;
            return total + (price * quantity);
        }, 0);
    };

    const calculateShippingCost = (subtotal) => {
        // Free shipping if subtotal is 2000 or more
        return subtotal >= 2000 ? 0 : 150;
    };

    const subtotal = calculateSubtotal();
    const shippingCost = calculateShippingCost(subtotal);
    const total = subtotal + shippingCost;

    const handleEdit = () => {
        setIsEditing(!isEditing);
    };

    const handleSave = () => {
        setIsEditing(false);
        // Optionally save to localStorage
        localStorage.setItem('billingDetails', JSON.stringify(billingDetails));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBillingDetails(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const generateReceipt = () => {
        const date = new Date().toLocaleString();
        let receiptContent = `
LOVE GELY FLOWER SHOP
====================================
Date: ${date}
Order Receipt
====================================

Items:
${cartItems.map(item => 
    `${item.name}
    Quantity: ${item.quantity || 1}
    Price: PHP ${item.price}
    Subtotal: PHP ${(parseFloat(item.price?.toString().replace(/,/g, '')) || 0) * (item.quantity || 1)}
    `).join('\n')}
====================================
Subtotal: PHP ${subtotal.toFixed(2)}
Shipping: PHP ${shippingCost.toFixed(2)}
Total: PHP ${total.toFixed(2)}
====================================

Billing Address:
${billingDetails.name}
${billingDetails.street}
${billingDetails.barangay}
${billingDetails.cityProvince}
====================================
Thank you for shopping with us!
`;
        return receiptContent;
    };

    const handleCheckout = () => {
        // Create PDF
        const doc = new jsPDF();
        const date = new Date().toLocaleString();
        
        // Set font size and add content
        doc.setFontSize(16);
        doc.text('LOVE GELY FLOWER SHOP', 20, 20);
        
        doc.setFontSize(12);
        doc.text('====================================', 20, 30);
        doc.text(`Date: ${date}`, 20, 40);
        doc.text('Order Receipt', 20, 50);
        doc.text('====================================', 20, 60);
        
        // Add items
        let yPosition = 70;
        cartItems.forEach(item => {
            doc.text(`${item.name}`, 20, yPosition);
            yPosition += 10;
            doc.text(`Quantity: ${item.quantity || 1}`, 30, yPosition);
            yPosition += 10;
            doc.text(`Price: PHP ${item.price}`, 30, yPosition);
            yPosition += 10;
            const itemSubtotal = (parseFloat(item.price?.toString().replace(/,/g, '')) || 0) * (item.quantity || 1);
            doc.text(`Subtotal: PHP ${itemSubtotal.toFixed(2)}`, 30, yPosition);
            yPosition += 20;
        });

        doc.text('====================================', 20, yPosition);
        yPosition += 10;
        doc.text(`Subtotal: PHP ${subtotal.toFixed(2)}`, 20, yPosition);
        yPosition += 10;
        doc.text(`Shipping: PHP ${shippingCost.toFixed(2)}`, 20, yPosition);
        yPosition += 10;
        doc.text(`Total: PHP ${total.toFixed(2)}`, 20, yPosition);
        yPosition += 10;
        doc.text('====================================', 20, yPosition);
        
        // Add billing address
        yPosition += 20;
        doc.text('Billing Address:', 20, yPosition);
        yPosition += 10;
        doc.text(billingDetails.name, 20, yPosition);
        yPosition += 10;
        doc.text(billingDetails.street, 20, yPosition);
        yPosition += 10;
        doc.text(billingDetails.barangay, 20, yPosition);
        yPosition += 10;
        doc.text(billingDetails.cityProvince, 20, yPosition);
        yPosition += 10;
        doc.text('====================================', 20, yPosition);
        yPosition += 10;
        doc.text('Thank you for shopping with us!', 20, yPosition);

        // Save PDF
        doc.save(`LoveGely-Receipt-${Date.now()}.pdf`);

        // Clear cart
        localStorage.removeItem('cartItems');
        setCartItems([]);

        // Show success message
        alert('Thank you for your order! Your receipt has been downloaded.');

        // Navigate to home page
        navigate('/homepage');
    };

    if (!cartItems || cartItems.length === 0) {
        // Redirect to product page
        navigate('/productpage');
        return null;
    }

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

            <div className="cartpage-content">
                <div className="white-rectangle-cartpage1">
                    <div className="cart-items">
                        {cartItems.map((item, index) => (
                            <React.Fragment key={index}>
                                <div className="cart-item">
                                    <img src={item.image} alt={item.name} className="cart-item-img" />
                                    <div className="cart-item-details">
                                        <div className="cart-item-name">{item.name}</div>
                                        <div className="cart-item-addon">Add On: Message Card<br />In Stock</div>
                                    </div>
                                    <div className="cart-item-price">PHP {item.price}</div>
                                    <div className="cart-item-qty">{item.quantity || 1}</div>
                                    <button 
                                        className="delete-btn"
                                        onClick={() => handleDeleteItem(index)}
                                    >
                                        DELETE
                                    </button>
                                </div>
                                {index < cartItems.length - 1 && <div className="divider"></div>}
                            </React.Fragment>
                        ))}
                    </div>
                </div>

                <div className="white-rectangle-cartpage2">
                    <h2 className="summary-title">ORDER SUMMARY</h2>
                    <div className="summary-item">
                        <span>Subtotal:</span>
                        <span>PHP {subtotal.toFixed(2)}</span>
                    </div>
                    <div className="summary-item">
                        <span>Shipping Cost:</span>
                        
                        {subtotal < 2000 && (
                            <div style={{ 
                                fontSize: '12px', 
                                color: '#b76e79',
                                marginTop: '5px', 
                                marginRight: '80px'
                            }}>
                                Free shipping on orders over PHP 2,000!
                            </div>
                        )}
                        <span>PHP {shippingCost.toFixed(2)}</span>
                    </div>
                    <div className="divider"></div>
                    <div className="summary-item total">
                        <span>Total:</span>
                        <span>PHP {total.toFixed(2)}</span>
                    </div>
                    <button className="checkout-btn" onClick={handleCheckout}>PROCEED TO CHECKOUT</button>
                </div>
            </div>

            <div className="billing-address-section">
                <div className="billing-header">
                    <h2>BILLING ADDRESS:</h2>
                    <button className="edit-btn" onClick={handleEdit}>
                        {isEditing ? "CANCEL" : "EDIT"}
                    </button>
                </div>
                <div className="billing-details">
                    {isEditing ? (
                        <>
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                value={billingDetails.name}
                                onChange={handleChange}
                                className="billing-input"
                            />
                            <input
                                type="text"
                                name="street"
                                placeholder="Street"
                                value={billingDetails.street}
                                onChange={handleChange}
                                className="billing-input"
                            />
                            <input
                                type="text"
                                name="barangay"
                                placeholder="Barangay"
                                value={billingDetails.barangay}
                                onChange={handleChange}
                                className="billing-input"
                            />
                            <input
                                type="text"
                                name="cityProvince"
                                placeholder="City / Province"
                                value={billingDetails.cityProvince}
                                onChange={handleChange}
                                className="billing-input"
                            />
                            <button className="save-btn" onClick={handleSave}>
                                SAVE
                            </button>
                        </>
                    ) : (
                        <>
                            <p className="pname">{billingDetails.name}</p>
                            <p className="paddress">{billingDetails.street}</p>
                            <p className="paddress">{billingDetails.barangay}</p>
                            <p className="paddress">{billingDetails.cityProvince}</p>
                        </>
                    )}
                </div>
            </div>

            <div className="funfact-message">
                Fun Fact: {funFact}
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
