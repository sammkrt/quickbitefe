import { Link } from "react-router-dom";
import Counter from "../../components/Counter/Counter";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import ItemCard from "../../components/ItemCard/ItemCard";
import './Cart.css'

function Cart() {
    return (
      <main>
      <Header/>
      <div className="cart_main">
      <h1>My Cart</h1>
      <ItemCard />
      <div className="itemcard-container">
        <Counter/>
        <button className="addtocart-button">Edit</button>
        <button className="delete-button">Delete</button>
      </div>
      <br />
      <br />
      <hr />
      <br />
      <br />
      <figure className="cart-figure">
        <div className="itemcard-info">
          <h3>Price details</h3>
        <p>Subtotal : <span className="itemcard-dish-price">cart.total</span></p>
        <p>Delivery cost : <span className="itemcard-dish-price">restaurant.delivery</span></p>
        <h3>Total cost : <span className="itemcard-dish-price">100</span></h3>
         </div>
      </figure>
      <Link to="/payment">
      <button className="addtocart-button">Place my order</button>
      </Link>
      </div>
      <Footer/>
      </main>
    );
  }
  export default Cart;
  