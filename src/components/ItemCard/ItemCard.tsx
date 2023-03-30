import './ItemCard.css'
import { Link } from 'react-router-dom'
function ItemCard () {
  return (
    <main>
      <Link to="/menuItem">
      <figure className="itemcard-figure">
        <div className="itemcard-info">
        <h2>Dish Name</h2>
        <p>Dish description</p>
        <p className="itemcard-dish-price">Dish price</p>
        </div>
        <div className="itemcard-image-container">
        </div>
      </figure>
      </ Link>
    </main>
  )
}
export default ItemCard
