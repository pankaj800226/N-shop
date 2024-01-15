import React from 'react';
import { useSelector } from 'react-redux';
import StarRating from './StarRating';
import { Link } from 'react-router-dom';
import { AiFillDelete } from 'react-icons/ai';
import { remove } from '../redux/cartSlics'
import { useDispatch } from 'react-redux'
const Checkout = () => {
    const CartItem = useSelector((state) => state.Cart.items)
    console.log(CartItem);

    const totalPrice = () => {
        return CartItem.reduce((total, items) => total + items.price * items.quantity, 0)
    }

    const dispatch = useDispatch()

    const handleRemove = (e) => {
        dispatch(remove(e))
    }
    return (

        <div className='check_out'>
            <h2 style={{ textAlign: "center", position: "relative", bottom: "3px", color: "purple" }}>Your Order List </h2>
            {
                CartItem.length > 0 ? (
                    CartItem.map((product) => (
                        <div className='check_out_item'>
                            <div className='check_out_product'>
                                <img src={product.imgUrl} alt="" />
                                <div style={{ textAlign: "center" }}>
                                    <h3>{product.name}</h3>
                                    <h4>₹{product.price}</h4>
                                    <StarRating rating={product.rating} />
                                    <p>Size : {product.size}</p>
                                    <p>Quantity : {product.qty}</p>
                                    <div className="order_list_btn">
                                        <button onClick={() => handleRemove(product.id)}>
                                            <AiFillDelete />
                                        </button>
                                    </div>


                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <h1 className='foundData'>Not Found Data</h1>
                )
            }
            <div className='process_now'>
                <p>Total :₹ {totalPrice()}</p>
                <div className='checkout_btn'>
                    <Link to='/payment'><button>Payment</button></Link>
                </div>
            </div>

        </div>
    )
}

export default Checkout