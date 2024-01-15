// import React, { useState } from 'react'
import Banner from './Banner'
import { productData } from './Productdata'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import HeartIcon from './HeartIcon'
import StarRating from './StarRating'
const Product = () => {
  const search = useSelector((state) => state.Search.search)

  return (
    <>
      <Banner />
      <div className="home_text">
        <h2>Top Product List</h2>
      </div>
      {/* <aside>
        <h2>hekko</h2>
      </aside> */}
      <div className='home'>
        {
          productData.filter((value) => {
            if (search === "") {
              return true;
            } else if (value.name.toLowerCase().includes(search.toLowerCase())) {
              return true;
            }
          }).map((product) => {
            return (
              <div className='products' key={product.id}>
                <Link to={`/Allproduct/${product.id}`}><img src={product.imgUrl} alt="iamges" /></Link>
                <h2>{product.name}</h2>
                <p>{product.tital}</p>
                <div className='star'>
                  <StarRating rating={product.rating} />
                </div>
                <div className='botton_price'>
                  <h3>₹ {product.price}</h3>
                  <HeartIcon />
                </div>

              </div>
            )
          })

        }
      </div>
    </>
  )
}

export default Product