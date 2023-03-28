import ItemGallery from "../../components/ItemGallery/ItemGallery";
import Footer from "../../components/Footer/Footer";
import "./Restaurants.css"
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
        <Footer />
      </main>
    );
  }
  export default Restaurant;
  