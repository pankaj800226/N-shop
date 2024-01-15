
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { BsHandbagFill } from 'react-icons/bs'
// import { FaCarSide } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux'
import { search } from '../redux/search'
const Header = () => {
  const [active, setActive] = useState("nav__menu");
  const [toggleIcon, setToggleIcon] = useState("nav__toggler");
  const navToggle = () => {
    active === 'nav__menu' ? setActive('nav__menu nav__active') : setActive('nav__menu');

    toggleIcon === 'nav__toggler'
      ? setToggleIcon('nav__toggler toggle')
      : setToggleIcon("nav__toggler")
  };

  //   //redux functionality
  const dispatch = useDispatch()
  const CartItem = useSelector((state) => state.Cart.items)
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  const { user, isAuthenticated } = useAuth0();

  return (

    <>
      <nav className="nav">
        <Link to='/'><h2>N SHOP</h2></Link>

        <ul className={active}>
          <Link to="/cart" className="product">
            <BsHandbagFill />
            <sup className='sup'>{CartItem.length}</sup>
          </Link>
          {
            isAuthenticated ? (
              <p className="profile">{user?.email.charAt(0).toUpperCase()}</p>

            ) : (
              <p style={{ color: 'whitesmoke' }}>Loading...</p>
            )
          }
          <Link className="product" to='/product'>PRODUCT</Link>

          {
            isAuthenticated ? (
              <>

              </>

            ) : (
              <div></div>
            )
          }


          <div className="auth_btn">
            {
              isAuthenticated ? (
                <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                  LOGOUT
                </button>
              ) : (

                <button className='loginWithRedirect' onClick={() => loginWithRedirect()}>LOGIN</button>
              )
            }
          </div>

        </ul>




        <div className="inp">
          <input type="text" onChange={(e) => dispatch(search(e.target.value))} placeholder='Search product' />
        </div>
        <div onClick={navToggle} className={toggleIcon}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
    </>
  )
}

export default Header