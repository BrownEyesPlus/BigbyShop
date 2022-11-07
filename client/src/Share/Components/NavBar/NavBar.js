import './navbar.css'
import { NavLink } from 'react-router-dom'

import Cart from '../Cart/Cart'

export default function NavBar() {
  return (
    <div className='navbar center-box'>
      <div className='container'>
        <div className='row'>
          <div className='left-navbar'>
            <NavLink to="/">
              <div className='logo'>

              </div>
            </NavLink>
          </div>
          <div className='right-navbar'>
            <ul className='nav-items'>
              <li className='nav-item'>
                <a className='' href='/'>Home</a>
              </li>
              <li className='nav-item'>
                <a className='' href='/shop'>Shop Now</a>
              </li>
              <li className='nav-item'>
                <a className='' href='/blogspage'>Blog</a>
              </li>
              <li className='nav-item' style={{ width: '2px', background: 'black', margin: '0px 15px' }}>

              </li>
              <li className='nav-item'>
                <a className='' href='/favourite'>
                  <i className='fa fa-heart' />
                </a>
              </li>
              <li className='nav-item'>
                <label className="cart-open" htmlFor="cart-check" style={{ fontSize: '24px', cursor: 'pointer', marginBottom: '3px', marginLeft: '6px', marginRight: '6px' }}>
                  <i className='fa fa-shopping-cart' />
                </label>
                <input type="checkbox" className="cart-check hidden-check" name="cart-checkbox" id="cart-check" autoComplete="off" />
                <Cart />
              </li>
              <li className='nav-item'>
                <a className='' href='/profile'>
                  <i className='fa fa-user-circle' />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div >
  )
}
