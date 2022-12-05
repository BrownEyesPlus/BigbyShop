import './navbar.css'
import { NavLink } from 'react-router-dom'

import Cart from '../Cart/Cart'
import { LINK } from '../../../Constants'
import { useSelector } from 'react-redux'

export default function NavBar() {
  const pathname = (window.location.pathname)

  const cart = useSelector(state => state.app.cart)
  const cartCount = cart.reduce(
    (accumulator, currentValue) => accumulator + currentValue.quantity,
    0
  );

  return (
    <div className="navbar center-box">
      <div className="container">
        <div className="row">
          <div className="left-navbar">
            <NavLink to="/">
              <div className="logo">

              </div>
            </NavLink>
          </div>
          <div className="right-navbar">
            <ul className="nav-items">
              {LINK.nav.main.map((item, index) => (
                <li
                  key={index}
                  className={`nav-item ${pathname === item.url ? 'active' : ''}`}
                >
                  <a href={item.url}>
                    {item.name}
                  </a>
                </li>
              ))}

              <li className="nav-item" style={{ width: "2px", background: "black", margin: "0px 15px" }} />

              <li
                className={`nav-item ${'/favourite' === pathname ? 'active' : ''}`}
              >
                <a href="/favourite">
                  <i className="fa fa-heart" />
                </a>
              </li>
              <li className="nav-item">
                <label className="cart-open" htmlFor="cart-check" style={{ fontSize: "24px", cursor: "pointer", marginBottom: "3px", marginLeft: "6px", marginRight: "6px" }}>
                  <i className="fa fa-shopping-cart" />
                  {cartCount > 0 && (
                    <div className="cart-count">
                      <span>{cartCount}</span>
                    </div>
                  )}
                </label>
                <input type="checkbox" className="cart-check hidden-check" name="cart-checkbox" id="cart-check" autoComplete="off" />
                <Cart />
              </li>
              <li
                className={`nav-item ${'/profile' === pathname ? 'active' : ''}`}
              >
                <a href="/profile">
                  <i className="fa fa-user-circle" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div >
  )
}
