import './cartItem.css'

export default function CartItem({ data }) {
  const {
    slug,
    name,
    image,
    price,
    color,
    size,
    quantity,
  } = data

  return (
    <div className="cart-item">
      <div className="cart-item-wrap row">
        <div className="col-3">
          <div className="cart-item-image">
            <img src={image} alt={name} />
          </div>
        </div>
        <div className="col-9 flex-column">
          <div className="cart-item-content flex-column h-100">
            <div className="cart-item-name space-between">
              <span>
                {name}
              </span>
              <i className="fa fa-close"></i>
            </div>
            <div className="color-size row">
              <div
                className="item-color"
                style={{
                  backgroundColor: color.code,
                  borderColor: (color.code === 'white' || color.code === '#fffff' ? 'gray' : 'white'),
                  boxSizing: 'border-box',
                }}
              />
              <div className="item-size">
                {size}
              </div>
            </div>

            <div className="cart-item-price-quantity bottom space-between">
              <div className="item-price">
                {`${price} đ`}
              </div>
              <div className="item-price row">
                <button type="submit">
                  <i className="fa fa-minus"></i>
                </button>
                1
                <button type="submit">
                  <i className="fa fa-plus"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
