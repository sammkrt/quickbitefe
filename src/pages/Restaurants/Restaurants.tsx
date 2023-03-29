import ItemGallery from "../../components/ItemGallery/ItemGallery";
import "./Restaurants.css"
import FooterComponent from "../../components/FooterComponent/FooterComponent";
import { useEffect, useState } from "react";
import {Dish, RestaurantModel} from "../../types/Types";
import { useParams } from "react-router-dom";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";


function Restaurant() {
  let { id } = useParams()

  const [dishes, setDishes] = useState<Dish[]>([]);



  const [restaurantById, setRestaurantById] = useState<RestaurantModel>()
  const fetchRestaurantById = async(id: any)=> {
  const result = await fetch(`http://localhost:5242/api/Restaurants/${id}`);
  const data = await result.json();
  setRestaurantById(data);
  setDishes(data.dishes);
  console.log(data)
  console.log(id)
  };
  useEffect(()=> {
    fetchRestaurantById(id);
  }, []);


    return (
      <main>
            
            <HeaderComponent/>
            <figure className="restaurantgallery-figure">
              <li>{restaurantById?.name}</li>
              <img className="restaurantgallery-img" src={restaurantById?.mainPictureUrl} alt="restaurant" />
            <div className="restaurantgallery-container">
  
            <p>{restaurantById?.description}</p>
            <p>{restaurantById?.email}</p>
            </div>
            {restaurantById?.dishes.map((dish =>
             <li>{dish.name}</li>
              ))}
              </figure>
              <ItemGallery dishes={dishes}/>
              
              <FooterComponent/>
      </main>
      
    );
  }
  export default Restaurant;
  

        // <main>
      //   <img className="restaurant-img" src="./assets/restaurant-wide.png" alt="restaurant" />
      //   <div className="restaurant-container">
      //   <h2 className="restaurant-h2">Restaurant Name</h2>
      //   <h3 className="restaurant-h3">Menu</h3>
      //   </div>
      //   <ItemGallery />
      //   <section className="restaurant-section">Delivery Cost: <span className="restaurant-price">8.99</span></section>
      //   <FooterComponent />
      // </main>