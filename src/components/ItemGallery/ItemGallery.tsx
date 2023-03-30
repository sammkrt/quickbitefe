import { useState } from 'react'
import { Link } from 'react-router-dom'
import { type Dish } from '../../types/Types'
import Counter from '../Counter/Counter'
import './ItemGallery.css'
interface itemGalleryProps {
  dishes: Dish[]
}
const ItemGallery: React.FC<itemGalleryProps> = ({ dishes }) => {
  const addToCart = (dishId: any, quantity: any) => {}
  const [dishId, setdishId] = useState('')
  const [quantity, setquantity] = useState('')
  const handleAddToCart = async () => {
    const response = await fetch('http://localhost:5242/api/Carts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        dishId,
        quantity
      })
    })
    if (response.ok) {
    } else {
      console.error('Failed to register')
    }
    addToCart(dishId, quantity)
  }
  return (
    <main className="itemgallery-main">
      <h1>Menu</h1>
      {dishes.map((dish) => (
        <figure className="itemgallery-figure">
          <div className="itemgallery-info">
            <p className="itemgallery-p">{dish.name}</p>
            <p className="itemgallery-p">{dish.description}</p>
            <p className="itemgallery-dish-price">{dish.price}</p>
            <div className="itemgallery-container">
              <Counter />
              <Link to="/cart">
                <button
                  className="itemgallery-button"
                  onClick={handleAddToCart}
                >
                  Add to Cart
                </button>
              </Link>
            </div>
          </div>
        </figure>
      ))}
    </main>
  )
}
export default ItemGallery
