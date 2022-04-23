import './cartItem.css'

export default function CartItem() {
  return (
    <div className='cart-item'>
        <div className='cart-item-wrap row'>
            <div className='col-3'>
                <div className='cart-item-image'>
                    <img src='assets/images/image-10.png' alt='' />
                </div>
            </div>
            <div className='col-9 flex-column'>
                <div className='cart-item-content flex-column h-100'>
                    <div className='cart-item-name space-between'>
                        <span>Áo đẹp ơi là đẹp</span>
                        <i className='fa fa-close'></i>
                    </div>
                    <div className='color-size row'>
                        <div className='item-color'></div>
                        <div className='item-size'>L</div>
                    </div>

                    <div className='cart-item-price-quantity bottom space-between'>
                        <div className='item-price'>
                            300.000 đ
                        </div>
                        <div className='item-price row'>
                            <button type='submit'>
                                <i className='fa fa-minus'></i>
                            </button>
                             1 
                             <button type='submit'>
                                <i className='fa fa-plus'></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            
            
        </div>
    </div>
  )
}
