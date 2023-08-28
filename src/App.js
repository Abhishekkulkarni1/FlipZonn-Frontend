import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WebFont from "webfontloader";
import React, { useState, useEffect } from "react";
import Header from "./component/layout/Header/Header.js";
import Footer from "./component/layout/Footer/Footer.js";
import Home from "./component/Home/Home.js";
import ProductDetails from "./component/Product/ProductDetails.js";
import Products from "./component/Product/Products.js";
import Search from "./component/Product/Search.js";
import Profile from "./component/User/Profile.js";
import LoginSignUp from "./component/User/LoginSignUp";
import store from "./store";
import { loadUser } from "./actions/userAction";
import UserOptions from "./component/layout/Header/UserOptions.js";
import { useSelector } from "react-redux";
import ProtectedRoute from "./component/Route/ProtectedRoute";
import UpdateProfile from "./component/User/UpdateProfile.js";
import UpdatePassword from "./component/User/UpdatePassword.js";
import ForgotPassword from "./component/User/ForgotPassword.js";
import ResetPassword from "./component/User/ResetPassword.js";
import Cart from "./component/Cart/Cart.js";
import Shipping from "./component/Cart/Shipping.js";
import ConfirmOrder from "./component/Cart/ConfirmOrder.js";
import Payment from "./component/Cart/Payment.js";
import OrderSuccess from "./component/Cart/OrderSuccess.js";
import MyOrders from "./component/Order/MyOrders.js";
import axios from "axios";
// import NotFound from "./component/layout/Not Found/NotFound.js";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Contact from "./component/layout/Contact/Contact";
import About from "./component/layout/About/About";

function App() {
  const { isAuthenticated, user } = useSelector((state) => state.user);

  const [stripeApiKey, setStripeApiKey] = useState("");

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Poppins", "Open Sans", "Arimo", "PT Serif", "Roboto"],
      },
    });

    store.dispatch(loadUser());
  }, []);

  async function getStripeApiKey() {
    // const token =
    //   "pk_test_51NfJXJSDxy3jBo6c1hGjimEmFwzsxt02jU1JsEiKuj7aCAX2xbiUlDUvRQ32O9F1lvWyHqXR8oP4oCeliEwDJiav00BeFXHx2V";
    // const config = {
    //   headers: {
    //     Authorization: `Bearer ${token}`,
    //   },
    // };
    try {
      const { data } = await axios.get("/api/v1/stripeapikey");
      setStripeApiKey(data.stripeApiKey);
    } catch (error) {
      console.error("Error fetching Stripe API key:", error.response);
    }
  }

  useEffect(() => {
    if (isAuthenticated) {
      getStripeApiKey();
    }
  }, [isAuthenticated]);

  return (
    <Router>
      <Header />
      {isAuthenticated && <UserOptions user={user} />}
      {stripeApiKey && (
        <Elements stripe={loadStripe(stripeApiKey)}>
          <Routes>
            <Route
              exact
              path="/process/payment"
              element={<ProtectedRoute>{<Payment />}</ProtectedRoute>}
            />
          </Routes>
        </Elements>
      )}

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/product/:id" element={<ProductDetails />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/products/:keyword" element={<Products />} />
        <Route exact path="/search" element={<Search />} />
        <Route exact path="/login" element={<LoginSignUp />} />
        <Route exact path="/password/forgot" element={<ForgotPassword />} />
        <Route exact path="/Cart" element={<Cart />} />
        <Route exact path="/contact" element ={<Contact/>} />
        <Route exact path="/about" element ={<About/>} />
        
        <Route
          exact
          path="/account"
          element={<ProtectedRoute>{<Profile />}</ProtectedRoute>}
        />
        <Route
          exact
          path="/me/update"
          element={<ProtectedRoute>{<UpdateProfile />}</ProtectedRoute>}
        />
        <Route
          exact
          path="/password/update"
          element={<ProtectedRoute>{<UpdatePassword />}</ProtectedRoute>}
        />
        <Route
          exact
          path="/password/reset/:token"
          element={<ResetPassword />}
        />

        <Route
          exact
          path="/shipping"
          element={<ProtectedRoute>{<Shipping />}</ProtectedRoute>}
        />
        <Route
          exact
          path="/order/confirm"
          element={<ProtectedRoute>{<ConfirmOrder />}</ProtectedRoute>}
        />
        <Route
          exact
          path="/success"
          element={<ProtectedRoute>{<OrderSuccess />}</ProtectedRoute>}
        />
        <Route
          exact
          path="/orders"
          element={<ProtectedRoute>{<MyOrders />}</ProtectedRoute>}
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
