import { useState } from "react";
import { Link } from "react-router-dom";
import Counter from "../../components/Counter/Counter";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import ItemCard from "../../components/ItemCard/ItemCard";
import "./MenuItem.css";
function MenuItem() {

  return (
    <main>
      <Header/>
      <ItemCard />
      <div className="itemcard-container">
        <Counter/>
        <Link to="/cart">
        <button className="addtocart-button">Add to Cart</button>
        </Link>
         
      </div>
      <Footer/>
    </main>
  );
}
export default MenuItem;
