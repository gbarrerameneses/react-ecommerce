import addToCart from '../assets/icons/addToCart.svg';

const CartWidget = () => {
  return (
    <div>
        <div className='p-1 rounded-full'>
          <img src={addToCart} className="w-6" alt="Add to Cart" />
        </div>
    </div>
  )
}

export default CartWidget