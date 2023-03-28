import { Link } from "react-router-dom";
import Counter from "../../components/Counter/Counter";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import ItemCard from "../../components/ItemCard/ItemCard";
import "./Cart.css";

function Cart() {
  return (
    <main>
      <Header />
      <section className="cart-section">
        <h1>My Cart</h1>
        <ItemCard />
        <div className="cart-container">
          <Counter />
          <button className="cart-delete-button">Delete</button>
        </div>
        <hr />
        <figure className="cart-figure">
          <div>
            <h2>Price details</h2>
            <p>Subtotal : <span className="cart-span">cart.total</span></p>
            <p>Delivery cost : <span className="cart-span">restaurant.delivery</span></p>
            <h2>Total cost : <span className="cart-span">100</span></h2>
          </div>
        </figure>
        <Link to="/payment">
          <button className="cart-button">Place my order</button>
        </Link>
      </section>
      <Footer />
    </main>
  );
}
export default Cart;
