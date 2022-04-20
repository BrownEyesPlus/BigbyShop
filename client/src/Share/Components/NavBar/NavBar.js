import './navbar.css'

export default function NavBar() {
  return (
    <div className='navbar center-box'>
        <div className='container'>
            <div className='row'>
                <div className='left-navbar'>
                    <div className='logo'>

                    </div>
                </div>
                <div className='right-navbar'>
                    <ul className='nav-items'>
                        <li className='nav-item'>
                            <a className='' href='#'>Home</a>
                        </li>
                        <li className='nav-item'>
                            <a className='' href='#'>Shop Now</a>
                        </li>
                        <li className='nav-item'>
                            <a className='' href='#'>Blog</a>
                        </li>
                        <li className='nav-item' style={{ width: '2px', background:'black', margin: '0px 15px'}}>
                            
                        </li>
                        <li className='nav-item'>
                            <a className='' href='#'>
                                <i className='fa fa-heart'/>
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a className='' href='#'>
                                <i className='fa fa-shopping-cart'/>
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a className='' href='#'>
                                <i className='fa fa-user-circle'/>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}
