import './inputs.css'
import { useEffect, useState } from 'react'

import Input from './Input/Input'
import NewProduct from '../../Share/Components/NewProduct/NewProduct'
import { getBaseProduct, getSizes } from '../../lib'
import NewItem from './NewItem'

export default function Inputs() {

  const [baseProducts, setBaseProducts] = useState()
  const [baseProduct, setBaseProduct] = useState()
  const [productColors, setProductColors] = useState()
  const [productColor, setProductColor] = useState()
  const [sizes, setSizes] = useState()
  const [size, setSize] = useState()
  const [quantity, setQuantity] = useState()
  const [price, setPrice] = useState()
  const [inputDetails, setInputDetails] = useState([])

  useEffect(() => {
    const sendRequest = async () => {
      const response = await getBaseProduct()
      const response2 = await getSizes()
      if (response) {
        setBaseProducts(response.results)
      }
      if (response2) {
        setSizes(response2.results)
      }
    }
    sendRequest()
  }, [])

  const handleSetBaseProduct = (id) => {
    const isExist = baseProducts.find(x => x.id === Number(id))
    if (isExist && id) {
      setBaseProduct(baseProducts.find(x => x.id === Number(id)))
      setProductColors(baseProducts.find(x => x.id === Number(id))?.product_colors)
      setProductColor(baseProducts.find(x => x.id === Number(id))?.product_colors[0])
    }
  }

  const handleSetProductColor = (id) => {
    console.log(id)
    if (productColors?.find(x => x.id === Number(id)) && id) {
      setProductColor(productColors?.find(x => x.id === Number(id)))
    }
  }

  const handleAddProduct = () => {

  }

  const handleAddToInput = () => {
    const isValid = productColors && productColor
    if (isValid) {
      const newInputDetail = {
        base_product: baseProduct?.id,
        product_color: productColor?.id,
        size: size.id,
        quantity,
        price,
      }
      const isExist = inputDetails.find(x => Number(x.product_color) === Number(productColor?.id) && Number(x.size) === Number(size.id))
      if (isExist) {
        setInputDetails(inputDetails.map(item => {
          if ((Number(item.product_color) === Number(productColor?.id) && Number(item.size) === Number(size.id)))
            return {
              ...item, quantity: item.quantity + newInputDetail.quantity
            }
          return item
        }))
      } else {
        setInputDetails([...inputDetails, newInputDetail])
      }
    }
    else {
      console.log('loi xay ra')
    }
  }

  const handleSetSize = (id) => {
    const isExist = sizes?.find(x => x.id === Number(id))
    if (isExist)
      setSize(isExist)
  }

  console.log(sizes, size)
  // console.log(baseProducts?.product_colors)
  console.log(inputDetails)

  return (
    <div className="admin-page">
      <div className="inputs">
        <div className="container">
          <div className="admin-page-title">
            Nhập hàng
          </div>
          < div className="admin-page-content">
            <input type="checkbox" className="new-product-check hidden-check" name="new-product-checkbox" id="new-product-check" autoComplete="off" />
            <NewProduct />
            <table className="admin-table">
              <tr className="admin-th">
                <th>Chọn sản phẩm</th>
                <th>Màu sắc</th>
                <th>Kích cỡ</th>
                <th>Số lượng</th>
                <th>Giá nhập/chiếc(vnđ)</th>
                <th className="th-actions" />
              </tr>
              {inputDetails?.map((item, index) => (
                <NewItem
                  productColor={productColors?.find(x => x.id === Number(item.product_color))}
                  baseProduct={baseProducts?.find(x => x.id === Number(item.base_product))}
                  size={sizes?.find(x => x.id === Number(item.size))}
                  quantity={item.quantity}
                  price={item.price}
                  key={index}
                />
              ))}
              <tr className="admin-td">
                <td>
                  <div className="admin-cell-td row product-img">
                    <img src={productColor?.image?.replace('http://127.0.0.1:8000/products/', 'http://127.0.0.1:8000/static/products/') || '/images/common/default-thumbnail.jpg'} alt="" />
                    <input
                      list="base_products"
                      defaultValue=""
                      onChange={e => handleSetBaseProduct(e.target.value)}
                    />
                    <label htmlFor="new-product-check" className="btn-admin-cell-td btn-new-product">
                      <i className="fa fa-plus"></i>
                    </label>
                  </div>
                  <datalist id="base_products">
                    {baseProducts?.map((item, index) => (
                      <option
                        value={item.id}
                        key={index}
                      >
                        {item.name} &emsp;
                      </option>
                    ))}
                  </datalist>
                </td>
                <td>
                  <div className="admin-cell-td color-td row">
                    <div
                      className="admin-color-td"
                      style={{ background: productColor?.color.color_code || "#eee" }}
                    />
                    <input
                      list="admin-color1"
                      defaultValue=""
                      onChange={e => handleSetProductColor(e.target.value)}
                    />
                    <button className="btn-admin-cell-td">
                      <i className="fa fa-plus"></i>
                    </button>
                  </div>
                  <datalist id="admin-color1">
                    {productColors?.map((item, index) => (
                      <option value={item.id} key={index}>
                        {item.color.name}
                      </option>
                    ))}
                  </datalist>
                </td>
                <td>
                  <div className="admin-cell-td size-td row">
                    <div className="admin-size-td">
                      L
                    </div>
                    <input
                      list="admin-size"
                      onChange={e => handleSetSize(e.target.value)}
                    />
                    <button className="btn-admin-cell-td">
                      <i className="fa fa-plus"></i>
                    </button>
                  </div>
                  <datalist id="admin-size">
                    {sizes?.map((item, index) => (
                      <option value={item.id} key={index}>
                        {item.name}
                      </option>
                    ))}

                  </datalist>
                </td>
                <td>
                  <div className="admin-cell-td quantity-td row">
                    <input
                      type="number"
                      id="quantity"
                      name="quantity"
                      min={1}
                      onChange={e => setQuantity(Number(e.target.value))}
                    />
                  </div>
                </td>
                <td>
                  <div className="admin-cell-td money-td row">
                    <input
                      type="number"
                      id="money"
                      name="money"
                      min={1}
                      onChange={e => setPrice(Number(e.target.value))}
                    />
                  </div>
                </td>
                <td>
                  <div className="table-actions btn-input-plus">
                    <button
                      title="Thêm vào đơn"
                      onClick={handleAddToInput}
                    >
                      Thêm
                    </button>
                  </div>
                </td>
              </tr>
            </table>
          </div>

          <div className="inputs-history-title">
            Lịch sử nhập hàng:
          </div>
          < div className="admin-page-content">
            <table className="admin-table">
              <tr className="admin-th">
                <th>Tên sản phẩm</th>
                <th>Mã sản phẩm</th>
                <th>Số lượng</th>
                <th>Giá nhập (vnd)</th>
                <th>Ngày</th>
                <th className="th-actions">Thao tác</th>
              </tr>
              <Input />
              <Input />
              <Input />
              <Input />
              <Input />
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
