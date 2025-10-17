import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/ProductPage.css";


const ProductPage = () => {
    const navigate = useNavigate();

    const handleHeartClick = (idx) => {
        setLiked((prev) => {
            const updated = [...prev];
            updated[idx] = !updated[idx];
            return updated;
        });
    };

    const handleProductClick = (product) => {
        navigate("/productdetail", { state: { product } });
    };

    const products = [
        {
            name: "MOSH",
            price: "PHP 1,099",
            image: require("../assets/flower7.png"),
            description: "Bright, bold, and full of life — the MOSH bouquet is a stunning mix of orange tulips, red orchids, and pink roses beautifully wrapped in soft blush paper. Perfect for expressing joy, admiration, or celebration, this bouquet brings warmth and happiness to any occasion.",
            purpose: "Ideal for birthdays, congratulations, or simply to brighten someone's day.",
            inclusions: "This bouquet includes a fresh mix of orange tulips, pink roses, and red orchids, beautifully wrapped in premium blush pink paper and finished with a matching satin ribbon. Each arrangement also comes with a complimentary message card to make your gift more personal and heartfelt."
        },
        {
            name: "ENCHANTED",
            price: "PHP 2,099",
            image: require("../assets/flower8.png"),
            description: "Graceful and captivating — the ENCHANTED bouquet features a dreamy blend of soft pink roses, garden blooms, and lush greenery wrapped in delicate layers of pink and white paper. This bouquet radiates elegance and tenderness, making it the perfect choice for expressing love, gratitude, or admiration.",
            purpose: "Ideal for anniversaries, romantic surprises, or simply to make someone feel truly special.",
            inclusions: "This bouquet includes a fresh mix of premium pink roses and assorted fillers, beautifully arranged with lush foliage and wrapped in soft pastel paper. Finished with a satin ribbon and includes a complimentary message card for your heartfelt note."
        },
        {
            name: "WAVE",
            price: "PHP 1,899",
            image: require("../assets/flower9.png"),
            description: "Cool, calm, and effortlessly elegant — the WAVE bouquet showcases a soothing mix of blue blooms and soft green roses, beautifully wrapped in pastel blue and white paper. Its serene palette captures the refreshing beauty of ocean waves, making it a perfect gift for someone who brings peace and light into your life.",
            purpose: "Ideal for birthdays, graduations, or as a thoughtful gift to show appreciation and calm affection.",
            inclusions: "This bouquet includes a delicate blend of blue flowers, green roses, and fresh fillers, artistically arranged with lush foliage. Wrapped in premium pastel blue paper and tied with a matching satin ribbon, it also comes with a complimentary message card."
        },
        {
            name: "PIXIE DREAM",
            price: "PHP 1,799",
            image: require("../assets/flower4.png"),
            description: "Whimsical and full of charm — the PIXIE DREAM bouquet is a delightful blend of soft pink roses, vibrant blooms, and playful textures wrapped in elegant shades of green and blush. This bouquet captures the magic of fairytale beauty, bringing a touch of sweetness and wonder to any moment.",
            purpose: "Perfect for birthdays, romantic surprises, or to simply brighten someone’s day with a sprinkle of floral magic.",
            inclusions: "This bouquet includes a mix of fresh pink roses, textured fillers, and lush greenery, beautifully arranged and wrapped in premium green and pink paper. Finished with a satin ribbon and includes a complimentary message card for your heartfelt note."
        },
        {
            name: "SUNSHINE",
            price: "PHP 999",
            image: require("../assets/flower10.png"),
            description: "Bright, warm, and full of joy — the SUNSHINE bouquet radiates happiness with its vibrant sunflowers and rustic charm. Perfect for expressing gratitude, positivity, or simply bringing light into someone’s day.",
            purpose: "Ideal for birthdays, congratulations, or to uplift someone with cheerful and sunny blooms.",
            inclusions: "A lively arrangement of fresh sunflowers accented with fillers and greenery, carefully wrapped in premium beige and white paper. Comes with a satin ribbon and a complimentary message card for your personal note."
        },
        {
            name: "DAYLIGHT",
            price: "PHP 1,499",
            image: require("../assets/flower11.png"),
            description: "The DAYLIGHT bouquet captures the beauty of a bright new morning — a stunning mix of pink lilies, yellow billy balls, and soft peach blooms that bring warmth and freshness. It’s a graceful bouquet that celebrates life, love, and optimism.",
            purpose: "Perfect for anniversaries, birthdays, or as a thoughtful gift to brighten someone’s mood.",
            inclusions: "Includes pink lilies, gerberas, billy balls, and assorted filler flowers arranged with lush greenery. Wrapped in soft pink and white paper, finished with a satin ribbon, and includes a complimentary message card."
        },
        {
            name: "IRAYA",
            price: "PHP 1,799",
            image: require("../assets/flower12.png"),
            description: "A colorful burst of beauty — the IRAYA bouquet is a lively mix of vivid florals that symbolize joy, confidence, and self-expression. Each bloom adds its own personality, creating a refreshing and radiant arrangement perfect for brightening any space or mood.",
            purpose: "Perfect for birthdays, graduations, or to celebrate someone’s vibrant spirit and creativity.",
            inclusions: "Features an artistic blend of tulips, snapdragons, carnations, and other seasonal blooms, accented with lush greens. Elegantly wrapped in white and pink paper with a satin ribbon and includes a complimentary message card."
        },
        {
            name: "GEORGIA",
            price: "PHP 2,099",
            image: require("../assets/flower13.png"),
            description: "Elegant and timeless, the GEORGIA bouquet combines soft pinks and deep reds to express love, admiration, and warmth. This romantic arrangement embodies sophistication — a stunning gesture that speaks straight from the heart.",
            purpose: "Ideal for anniversaries, romantic surprises, or to say “thank you” in the most graceful way.",
            inclusions: "Includes pink lilies, red carnations, roses, and lisianthus complemented by chamomile fillers and greenery. Wrapped in deep red and white paper, finished with a satin ribbon and a complimentary message card."

        },
        {
            name: "TINKER",
            price: "PHP 1,899",
            image: require("../assets/flower14.png"),
            description: "Playful and full of charm — the TINKER bouquet is a delightful combination of pinks, peaches, and yellows that bring instant joy. Its bright tones and soft textures create a bouquet that’s both sweet and refreshing.",
            purpose: "Perfect for cheerful celebrations, birthdays, or to surprise someone who lights up your life.",
            inclusions: "A mix of tulips, lilies, and carnations with seasonal fillers and greens. Wrapped in green and white paper, tied with a ribbon, and comes with a complimentary message card."
        },
        {
            name: "BELLE",
            price: "PHP 1,899",
            image: require("../assets/flower1.png"),
            description: "Radiant and full of charm, the BELLE bouquet captures the warmth of sunshine through its bright yellow and orange hues. This cheerful arrangement symbolizes joy, gratitude, and positivity — perfect for lifting someone’s spirits or celebrating life’s happy moments.",
            purpose: "Ideal for birthdays, congratulations, or simply to brighten someone’s day.",
            inclusions: "Includes orange tulips, yellow roses, eucalyptus, and fresh fillers wrapped in premium kraft and white paper. Finished with a satin ribbon and comes with a complimentary message card."
        },
        {
            name: "SUNRISE",
            price: "PHP 1,899",
            image: require("../assets/flower2.png"),
            description: "Inspired by the soft glow of the morning sun, the SUNRISE bouquet brings together delicate tulips in pastel shades of peach, pink, and white. It’s a tender reminder of new beginnings and peaceful mornings — elegant, gentle, and full of hope.",
            purpose: "Perfect for birthdays, anniversaries, or to celebrate new chapters in life.",
            inclusions: "A fresh mix of tulips and seasonal greens wrapped in white and blush-toned paper, tied with a soft ribbon and includes a complimentary message card."
        },
        {
            name: "AURORA",
            price: "PHP 1,899",
            image: require("../assets/flower3.png"),
            description: "Soft, sweet, and dreamy — the AURORA bouquet radiates gentle elegance through its combination of blush pinks and creamy whites. A graceful expression of affection and thoughtfulness, perfect for moments that deserve a soft touch of love.",
            purpose: "Great for anniversaries, romantic surprises, or simply to express appreciation and warmth.",
            inclusions: "Features tulips, carnations, and fresh foliage arranged in pastel pink wrapping with white accents, finished with a satin ribbon and a complimentary message card."
        },
        {
            name: "AMBER",
            price: "PHP 1,799",
            image: require("../assets/flower5.png"),
            description: "Radiating warmth and charm, the AMBER bouquet is a golden blend of peach, yellow, and blush tones — a symbol of comfort, light, and joy. Its fresh and lively colors make it a perfect way to share positivity and brighten someone’s day.",
            purpose: "Ideal for birthdays, thank-you gifts, or to celebrate life’s simple joys.",
            inclusions: "Includes fresh tulips, alstroemeria, and delicate fillers wrapped in soft peach and yellow-toned paper, tied with a satin ribbon and comes with a complimentary message card."
        },
        {
            name: "VIDIA",
            price: "PHP 1,899",
            image: require("../assets/flower6.png"),
            description: "Bold, vibrant, and full of energy — the VIDIA bouquet stands out with its striking combination of fuchsia blooms and fiery orange tulips. It’s a powerful expression of confidence, love, and enthusiasm — perfect for making a strong and unforgettable impression.",
            purpose: "Perfect for birthdays, celebrations, or to surprise someone with a bold burst of color.",
            inclusions: "A lively mix of gerbera daisies, tulips, and fresh greens, carefully wrapped in soft pink and cream paper, finished with a ribbon and a complimentary message card."
        },
        {
            name: "LABYRINTH",
            price: "PHP 1,699",
            image: require("../assets/flower15.png"),
            description: "Graceful and enchanting, the LABYRINTH bouquet showcases a dreamy mix of pinks and lilacs with lush greens. It represents affection, admiration, and thoughtfulness — a perfect choice for expressing heartfelt emotions through elegance and color.",
            purpose: "Ideal for anniversaries, romantic gestures, or as a thoughtful “just because” gift.",
            inclusions: "Includes lilies, carnations, lisianthus, and fresh foliage wrapped in elegant pastel paper with a satin ribbon and a complimentary message card."
        },
    ];

    const [liked, setLiked] = useState(Array(products.length).fill(false));

    return (
        <div className="productpage-container">
            <div className="productpage-header">
                <img src={require("../assets/love gely logo.png")} alt="Logo" className="productpage-logo" />
                <nav className="productpage-nav">
                    <a href="/homepage" className="nav-link">HOME</a>
                    <a href="/productpage" className="nav-link active">SHOP</a>
                    <a href="/cartpage" className="nav-link">MY CART</a>
                    <a href="/reviews" className="nav-link">REVIEWS</a>
                    <a href="/aboutpage" className="nav-link">ABOUT</a>
                </nav>
            </div>

            <img src={require("../assets/flowersheader.png")} alt="Flowers Header" className="flowers-header" />

            {/* <div className="search-bar-container">
                <input
                    type="text"
                    className="search-bar"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
            </div> */}

            <div className="white-rectangle-product">
                <div className="product-grid">
                    {products.map((product, idx) => (
                        <div
                            className="product-card"
                            key={product.name}
                            onClick={() => handleProductClick(product)}
                            style={{ cursor: "pointer" }}
                        >
                            <img src={product.image} alt={product.name} className="product-image" />
                            <div className="product-bar">
                                <span className="product-name">{product.name}</span>
                                <span className="product-price">{product.price}</span>
                            </div>
                            <div className="product-icons">
                                <img
                                    src={
                                        liked[idx]
                                            ? require("../assets/pinkhearticon.png")
                                            : require("../assets/hearticon.png")
                                    }
                                    alt="Heart"
                                    className="icon heart-icon"
                                    onClick={e => { e.stopPropagation(); handleHeartClick(idx); }}
                                    style={{ cursor: "pointer" }}
                                />
                                <img src={require("../assets/basketicon.png")} alt="Bag" className="icon" />
                            </div>
                        </div>
                    ))}
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

export default ProductPage;
