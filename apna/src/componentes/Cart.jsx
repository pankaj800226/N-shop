import { useDispatch, useSelector } from 'react-redux'
import { AiFillDelete } from 'react-icons/ai'
import { remove, increment, decrement, } from "../redux/cartSlics"
import StarRating from './StarRating'
import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import { toast } from 'react-toastify'
const Cart = () => {
  const CartItem = useSelector((state) => state.Cart.items)

  const dispatch = useDispatch();

  const { isAuthenticated } = useAuth0()

  //remove cart item functionality
  const handleRemove = (e) => {
    dispatch(remove(e))
  }
  //increment cart item functionality
  const handleIncrement = (e) => {
    dispatch(increment(e))
  }
  //decrement cart item functionality
  const handleDecrement = (e) => {
    dispatch(decrement(e))
  }

  const calculatPrice = () => {
    return CartItem.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  //order section
  // const handleCheckOut = (e) => {
  //  dispatch(checkOut(e))
  // }

  // checkout authentication
  const authHandle = () => {
    toast.success('🦄 Login First!', {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }

  return (
    <div>

      <div className='cart'>
        {
          CartItem.length > 0 ? (
            CartItem.map((product) => {
              return (
                <div className='product_cart' key={product.id}>
                  <div className="image_container">
                    <Link to='/product'><img src={product.imgUrl} alt="" /></Link>
                  </div>
                  <div className="cart_container">
                    <div>
                      <div className='product_name'>
                        <h3>{product.name}</h3>
                        <h4>₹{product.price}</h4>
                        <StarRating rating={product.rating} />
                        <p>Size : {product.size}</p>
                        <p>Quantity : {product.qty}</p>
                      </div>
                      <div className="cart_btn">
                        <button onClick={() => handleDecrement(product.id)}>-</button>
                        <p>{product.quantity}</p>
                        <button onClick={() => handleIncrement(product.id)}>+</button>
                        <button onClick={() => handleRemove(product.id)}>
                          <AiFillDelete />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })
          ) : (
            <h1 className='foundData'>No item yet</h1>
          )
        }
      </div>

      <div className='total_section'>
        <p>Total :₹ {calculatPrice()}</p>
        <div className='checkout_btn'>
          {
            isAuthenticated ? (
              <Link to='/addresh'><button>Check Out</button></Link>

            ) : (
              <Link to=''><button onClick={authHandle}>Check Out</button></Link>

            )
          }
        </div>
      </div>

    </div>
  )
}

export default Cart

