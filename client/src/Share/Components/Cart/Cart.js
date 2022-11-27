import CartItem from '../CartItem/CartItem'
import './cart.css'

const fakePurchaseData = {
  list: [
    {
      id: 1,
      slug: 'dauxanh',
      image: 'assets/images/image-10.png',
      name: `Sneakers Shoes 2020 For Men Fugiat voluptates`,
      color: {
        name: 'Red',
        code: 'red'
      },
      size: 'L',
      price: 300000,
      quantity: 1,
    },
    {
      id: 1,
      slug: 'dauxanh',
      image: 'assets/images/product-1.png',
      name: `Sneakers Shoes 2020 For Men Fugiat voluptates`,
      color: {
        name: 'White',
        code: 'white'
      },
      size: 'L',
      price: 300000,
      quantity: 1,
    },
    {
      id: 1,
      slug: 'dauxanh',
      image: 'assets/images/image-10.png',
      name: `Sneakers Shoes 2020 For Men Fugiat voluptates`,
      color: {
        name: 'Green',
        code: 'green'
      },
      size: 'L',
      price: 300000,
      quantity: 1,
    },
    {
      id: 1,
      slug: 'dauxanh',
      image: 'assets/images/product-1.png',
      name: `Sneakers Shoes 2020 For Men Fugiat voluptates`,
      color: {
        name: 'Gray',
        code: 'gray'
      },
      size: 'L',
      price: 300000,
      quantity: 1,
    },
  ]
}

export default function Cart() {

  return (
    <label className="cart-frame">
      <label className="overlay" htmlFor="cart-check"></label>
      <div className="cart">
        <div className="cart-wrap">
          <div className="cart-top space-between">
            <div className="cart-title">
              Giỏ hàng:
            </div>
            <input type="checkbox" className="cart-check hidden-check" name="cart-checkbox" id="cart-check-close" autoComplete="off" defaultChecked />
            <label className="cart-close" htmlFor="cart-check" >
              <i className="fa fa-close"></i>
            </label>
          </div>
          <div className="cart-items">
            {fakePurchaseData.list.map((item, index) => (
              <CartItem key={index} data={item} />
            ))}
          </div>

          <div className="cart-bottom bottom">
            <div className="cart-total-price">
              Tổng tính:
              <span>600.000 đ</span>
            </div>
            <a href="./purchase" >
              <div className="btn-cart">
                Thanh toán
              </div>
            </a>
          </div>
        </div>
      </div>
    </label>
  )
}
