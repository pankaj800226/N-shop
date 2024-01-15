
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from "./componentes/Header"
import Home from "./componentes/Home"
import AllProduct from "./componentes/AllProduct";
import Footer from "./componentes/Footer";
import Cart from "./componentes/Cart";
import Register from "./componentes/Register";
import Login from "./componentes/Login";
import Checkout from "./componentes/Checkout";
import UsersAddresh from "./componentes/UsersAddresh";
import Payment from "./componentes/Payment";
import Product from './componentes/Product'
//import styles component
import "./styles/header.scss"
import "./styles/home.scss"
import "./styles/banner.scss"
import './styles/allproduct.scss'
import './styles/cart.scss'
import './styles/footer.scss'
import './styles/feedbar.scss'
import './styles/heart.scss'
import './styles/register.scss'
import './styles/checkOut.scss'
import './styles/userAddresh.scss'
import './styles/payment.scss'
import './styles/productList.scss'


function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/product" element={<Product />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/addresh" element={<UsersAddresh />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/Allproduct/:productId" element={<AllProduct />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </Router>

  );
}

export default App;
