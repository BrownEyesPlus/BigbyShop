import CartItem from '../CartItem/CartItem'
import './cart.css'

export default function Cart() {
  return (
    <label className='cart-frame'>
        <div className='cart'>
            <div className='cart-wrap'>
                <div className='cart-top space-between'>
                    <div className='cart-title'>
                        Giỏ hàng:
                    </div>
                    <input type="checkbox" className="cart-check hidden-check" name="cart-checkbox" id="cart-check-close" autoComplete="off" defaultChecked/>
                    <label className="cart-close" htmlFor="cart-check" >
                        <i className='fa fa-close'></i>
                    </label>
                </div>

                <div className='cart-items'>
                    <CartItem/>
                    <CartItem/>
                    <CartItem/>
                    <CartItem/>
                </div>

                <div className='cart-bottom bottom'>
                    <div className='cart-total-price'>
                        Tổng tính:  <span>600.000 đ</span>
                    </div>
                    <a href='./purchase' >
                        <div className='btn-cart'>
                            Thanh toán
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </label>
  )
}
