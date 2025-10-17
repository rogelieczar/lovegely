import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import ProductPage from "./ProductPage";
import ProductDetailPage from "./ProductDetailPage";
import CartPage from "./CartPage";
import AboutPage from "./AboutPage";

const AppController = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/homepage" element={<HomePage />} />
                <Route path="/productpage" element={<ProductPage />} />
                <Route path="/productdetail" element={<ProductDetailPage />} />
                <Route path="/cartpage" element={<CartPage />} />
                <Route path="/aboutpage" element={<AboutPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppController;
