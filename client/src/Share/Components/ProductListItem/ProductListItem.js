import ProductDetail from '../ProductDetail/ProductDetail'
import './productListItem.css'

export default function ProductListItem(props) {
  const { item } = props
  return (
    <div className='col-2-4 product-lists-item'>
      <div className='thumb-item-frame'>
        <div className='thumb-item'
          style={{ background: `url("${item.thumbnail}")` }}
        >
          <div className='thumb-item-mask center-box'>
            <div className='thumb-item-actions'>
              <div className='thumb-item-action'>
                <i className='fa fa-heart center-box'></i>
              </div>
              <div className='thumb-item-action'>
                <i className='fa fa-cart-plus center-box'></i>
              </div>
              <label className='thumb-item-action' htmlFor='product-detail-check'>
                <i className='fa fa-search center-box'></i>
              </label>
              <input type="checkbox" className="product-detail-check hidden-check" name="product-detail-checkbox" id="product-detail-check" autoComplete="off" />
              <ProductDetail />
            </div>
          </div>
          <div className='sale-tag'>
            <div className='sale-tag-square'>
              <span> Sale </span>
              <span> {`${item.sale}%`} </span>
            </div>
            <div className='sale-tag-polygon'>
            </div>
          </div>
        </div>
      </div>
      <div className='thumb-item-name'>
        {item.title}
      </div>
      <div className='thumb-item-price-like row'>
        <span className='thumb-item-price col-8'>
          {`${item.currentPrice} đ`}
        </span>
        <span className='thumb-item-like col-4'>
          <i className='fa fa-heart center-box'></i>
          {item.likedQuantity}
        </span>
      </div>
      <div className='thumb-item-origin-price'>
        {`${item.originPrice} đ`}
      </div>
    </div>
  )
}
