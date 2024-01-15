import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { productData } from './Productdata'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/cartSlics'
import { toast } from 'react-toastify'
import Feedbar from './Feedbar'
import StarRating from './StarRating'
import axios from 'axios'
import { useAuth0 } from '@auth0/auth0-react'
import { AiFillDelete } from 'react-icons/ai'
// import {app} from '../firebase/firebase'

const AllProduct = () => {
    //dynamic routeing
    const { productId } = useParams();
    const product = productData.find((product) => product.id === productId)
    const dispatch = useDispatch()
    //feedback functionality
    const [resultData, setResultData] = useState([])
    //product size
    const [selectSize, setSelectSize] = useState(product.sizes[0])
    //product quantity
    const [quantitys, setQuantitys] = useState(product.qtys[0])
    const { isAuthenticated } = useAuth0()
    //add 
    useEffect(() => {
        axios.post('http://localhost:5000/showTask')
            .then((result) => setResultData(result.data))
            .catch((error) => console.log(error))

    }, [resultData])
    const handleAdd = () => {
        dispatch(addToCart({ ...product, size: selectSize, qty: quantitys, quantity: (product.quantity || 0) + 1, }))
        // const newProduct = {
        //     ...product,
        //     size: selectSize,
        //     qty: quantitys,
        //     quantity: (product.quantity || 0) + 1,
        // };

        // dispatch(addToCart(newProduct))

        toast.success('🦄 Wow AddToCart!', {
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

    //add to cart authentication
    const handleAuth = () => {
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

    //remove
    const handleRemove = (id) => {
        axios.delete('http://localhost:5000/delete/' + id)
            .then((result) => console.log(result))
            .catch((error) => console.log(error))
    }
    return (
        <>
            <div className='allproduct'>
                <div className="image">
                    <img src={product.imgUrl} alt="" />
                </div>
                <div className='div'>
                    <h2>{product.name}</h2>
                    <h3>{product.tital}</h3>
                    <p>₹{product.price}</p>
                    <StarRating rating={product.rating} />
                    {/* product Size functionality */}
                    <div className="product_sizes">
                        <p>Size</p>
                        <select value={selectSize} onChange={(e) => setSelectSize(e.target.value)}>
                            {
                                product.sizes.map((size) => (
                                    <option value={size} key={size}>
                                        <p>{size}</p>
                                    </option>

                                ))
                            }
                        </select>
                    </div>
                    {/* product quantity functionality */}
                    <div className="quantity">
                        <p>Qty</p>
                        <select value={quantitys} onChange={(e) => setQuantitys(e.target.value)}>
                            {
                                product.qtys.map((qty) => (
                                    <option value={qty} key={qty}>
                                        <p>{qty}</p>
                                    </option>
                                ))
                            }
                        </select>
                    </div>

                    <h1>{product.subTital}</h1>
                    {
                        isAuthenticated ? (
                            <button onClick={() => handleAdd(product.id)}>ADD TO CART</button>

                        ) : (
                            <button onClick={handleAuth}>ADD TO CART</button>

                        )
                    }
                </div>
            </div>
            {/* comment section */}
            <Feedbar />
            <div className="feed_result">
                {
                    resultData.length === 0
                        ?
                        <div className='datafound'><h1>Data not found</h1></div>
                        :
                        resultData.map((data, index) => (
                            <div className='task_show' key={index}>
                                <div className='task_display'>
                                    <p><span style={{ fontWeight: "900" }}>AdminName</span> : {data.adminName}</p>
                                    <p><span style={{ fontWeight: "900" }}>Comment : </span> {data.comment}</p>
                                </div>
                                <div className="deleteBtn">
                                    <AiFillDelete className='icon'
                                        onClick={() => handleRemove(data._id)}
                                    />
                                </div>
                            </div>
                        ))
                }
            </div>
        </>
    )
}

export default AllProduct