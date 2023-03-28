import ItemGallery from "../../components/ItemGallery/ItemGallery";
import "./Restaurants.css"
import FooterComponent from "../../components/FooterComponent/FooterComponent";
function Restaurant() {
    return (
      <main>
        <img className="restaurant-img" src="./assets/restaurant-wide.png" alt="restaurant" />
        <div className="restaurant-container">
        <h2 className="restaurant-h2">Restaurant Name</h2>
        <h3 className="restaurant-h3">Menu</h3>
        </div>
        <ItemGallery />
        <section className="restaurant-section">Delivery Cost: <span className="restaurant-price">8.99</span></section>
        <FooterComponent />
      </main>
    );
  }
  export default Restaurant;
  