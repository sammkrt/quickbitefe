import { Link } from "react-router-dom";
import ItemCard from "../../components/ItemCard/ItemCard";
import Counter from "../../components/Counter/Counter";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import FooterComponent from "../../components/FooterComponent/FooterComponent";
import "./MenuItem.css";
function MenuItem() {
  return (
    <main>
      <main>
        <HeaderComponent />
        <div className="itemcard-container">
          <Counter />
          <Link to="/cart">
            <button className="addtocart-button">Add to Cart</button>
          </Link>
        </div>
        <FooterComponent />
      </main>
    </main>
  );
}
export default MenuItem;
