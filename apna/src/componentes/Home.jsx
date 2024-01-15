import React from 'react'
import { Link } from 'react-router-dom'
import img from '../images/laptop.jpg'
const Home = () => {

  const demo = [
    {
      imgUrl: "https://rukminim2.flixcart.com/image/312/312/kp5sya80/screen-guard/tempered-glass/o/v/n/apple-macbook-air-m1-13-3-inch-lightwings-original-imag3gh5xftgbpg3.jpeg?q=70",
      name: "Mack Book Pro",
    },

    {
      imgUrl: "https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/d/d/p/-original-imaghxh8k9sm6hyk.jpeg?q=70",
      name: "Apple Watch",
    },

    {
      imgUrl: "https://m.media-amazon.com/images/I/61zmJ-F-6vL._AC_UL600_FMwebp_QL65_.jpg",
      name: "Best price Lehenga",
    },
  ]

  return (
    <>
      <div className='home_container'>
        <div className="home_text">
          <h1>Welcome to n shop!</h1>
          <p>I hope are you happy and injoy! 😄</p>
          <p>Best Quality Provided💁💖 </p>
          <Link to='/product'><button>Shop Now 😊</button></Link>
        </div>
        <div className="home_image">
          <img src={img} alt="" />
        </div>
      </div>

      <div className="page2">
        <h1>Demo</h1>
      </div>

      <div className="demo_image">
        {
          demo.map((demo) => (
            <div className='home_product_demo' key={demo.id}>
              <img src={demo.imgUrl} alt="iamges" />
              <h1>{demo.name}</h1>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default Home