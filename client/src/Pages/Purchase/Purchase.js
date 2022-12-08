import { useSelector } from 'react-redux'
import './purchase.css'
import PurchaseProduct from './PurchaseProduct/PurchaseProduct'

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

export default function Purchase() {

  const cart = useSelector(state => state.app.cart)

  const totalPrice = cart.reduce((total, value) => {
    return total + (value.price * value.quantity)
  }, 0)

  return (
    <div className="purchase">
      <div className="container" >
        <div className="wrap top-page" style={{ background: "#b7b7b7" }}>
          Đơn đặt hàng
        </div>
      </div>
      <div className="container">
        <div className="purchase-wrap">
          <div className="row">
            <div className="purchase-products col-8">
              <div className="table-wrap">
                <table className="table">
                  <thead className="thead-primary">
                    <tr>
                      <th>&nbsp;</th>
                      <th>Sản phẩm</th>
                      <th>Giá tiền (vnd)</th>
                      <th>Số lượng</th>
                      <th>Tổng tiền (vnd)</th>
                      <th>&nbsp;</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart?.map((item, index) => (
                      <PurchaseProduct key={index} data={item} />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="purchase-detail col-4">
              <div className="purchase-detail-wrap">
                <div className="purchase-detail-title">
                  Thanh toán
                </div>
                <div className="purchase-detail-price">
                  <div>Giá gốc:</div>
                  <div>
                    {`${totalPrice} đ`}
                  </div>
                </div>
                <div className="purchase-detail-price">
                  <span>Giá thanh toán:</span>
                  <span>
                    {`${totalPrice} đ`}
                  </span>
                </div>
                <hr />
                <span>Địa chỉ nhận hàng:</span>

                <select className="purchase-address-select" name="cars" id="cars" >
                  <option value="volvo" disabled>Tỉnh/ Thành Phố</option>
                  <option value="saab">Hồ Chí Minh</option>
                  <option value="mercedes">Hà Giang</option>
                  <option value="audi">Cần Thơ</option>
                </select>
                <select className="purchase-address-select" name="cars" id="cars" >
                  <option value="volvo">Volvo</option>
                  <option value="saab">Saab</option>
                  <option value="mercedes">Mercedes</option>
                  <option value="audi">Audi</option>
                </select>
                <select className="purchase-address-select" name="cars" id="cars" >
                  <option value="volvo">Volvo</option>
                  <option value="saab">Saab</option>
                  <option value="mercedes">Mercedes</option>
                  <option value="audi">Audi</option>
                </select>

                <textarea className="purchase-address-textarea" id="w3review" name="w3review" rows="4" cols="50">
                </textarea>
                <hr />
                <span>Phương thức thanh toán:</span>
                <label className="purchase-method" htmlFor="method1">
                  <input type="radio" className="purchase-method-radio" name="method" id="method1" autoComplete="off" value="value1" />
                  <label className="purchase-option" htmlFor="method1" >
                    Thanh toán khi nhận hàng
                  </label>
                </label>
                <label className="purchase-method" htmlFor="method2">
                  <input type="radio" className="purchase-method-radio" name="method" id="method2" autoComplete="off" value="value1" />
                  <label className="purchase-option" htmlFor="method2" >
                    Thanh toán online qua
                  </label>
                </label>
                <hr />
                <button type="submit" className="btn-purchase">
                  Thanh toán
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
