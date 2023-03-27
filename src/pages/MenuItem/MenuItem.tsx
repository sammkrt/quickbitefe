import { useState } from "react";
import ItemCard from "../../components/ItemCard/ItemCard";
import "./MenuItem.css";
function MenuItem() {
  const [counter, setCounter] = useState(1);
  const increase = () => {
    setCounter((count) => count + 1);
  };
  const decrease = () => {
    if (counter > 1) {
      setCounter((count) => count - 1);
    }
  };
  return (
    <main>
      <ItemCard />
      <div className="itemcard-container">
        <div className="button-container">
          <button className="control-button" onClick={decrease}>
            -
          </button>
          <span className="counter-output">{counter}</span>
          <button className="control-button" onClick={increase}>
            +
          </button>
        </div>
          <button className="addtocart-button">Add to Cart</button>
      </div>
    </main>
  );
}
export default MenuItem;
