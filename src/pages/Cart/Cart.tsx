import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Counter from "../../components/Counter/Counter";
import FooterComponent from "../../components/FooterComponent/FooterComponent";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import ItemCard from "../../components/ItemCard/ItemCard";
import { cartDish, CartModel, User } from "../../types/Types";
import "./Cart.css";


function Cart() {

  const [user, setUser] = useState<User | null>(null);
  const [cartById, setCartById] = useState<CartModel>();
  const [cartDishes, setCartDishes] = useState<cartDish[]>([]);
  
  const fetchCartId = async (id: any) => {
    if (user?.cartId) {
      const result = await fetch(`http://localhost:5242/api/Carts/${user.cartId}`);
      const data = await result.json();
      setCartById(data);
      setCartDishes(data.cartDishes);
      console.log(data);
      console.log(idCart);
    }
  };
  
  useEffect(() => {
    const jwt = localStorage.getItem('jwt');
  
    fetch('http://localhost:5242/Auth/user', {
      method: 'GET',
      headers: { Authorization: `Bearer ${jwt}` },
      credentials: 'include',
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setUser(data);
        console.log(user?.cartId);
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }, []);
  
  useEffect(() => {
    fetchCartId(idCart);
  }, [user?.cartId]);

  let { idCart } = useParams();
  

  return (
    <main>
      <HeaderComponent />
      <section className="cart-section">
        <h1>My Cart</h1>
        
        
          <figure className="restaurantgallery-figure">
            <div className="restaurantgallery-container">
              
              <p>{cartById?.totalPrice}</p>
            </div>
          </figure>
        
      
        <div className="cart-container">
          <Counter />
          <button className="cart-delete-button">Delete</button>
        </div>
        <hr />






        <figure className="cart-figure">
          <div>
            <h2>Price details</h2>
            <p>
              Subtotal : <span className="cart-span">cart.total</span>
            </p>
            <p>
              Delivery cost :{" "}
              <span className="cart-span">restaurant.delivery</span>
            </p>
            <h2>
              Total cost : <span className="cart-span">{cartById?.totalPrice}</span>
            </h2>
          </div>
        </figure>
        <Link to="/payment">
          <button className="cart-button">Place my order</button>
        </Link>
      </section>
      <FooterComponent />
    </main>
  );
}
export default Cart;
