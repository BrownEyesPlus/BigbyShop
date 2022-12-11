import './inputs.css'
import Input from './Input/Input'
import NewProduct from '../../Share/Components/NewProduct/NewProduct'

export default function Inputs() {
  return (
    <div className='admin-page'>
      <div className='inputs'>
        <div className='container'>
          <div className='admin-page-title'>
            Nhập hàng
          </div>
          < div className='admin-page-content'>
            <input type="checkbox" className="new-product-check hidden-check" name="new-product-checkbox" id="new-product-check" autoComplete="off" />
            <NewProduct />
            <table className='admin-table'>
              <tr className='admin-th'>
                <th>
                  Chọn sản phẩm
                </th>
                <th>Màu sắc</th>
                <th>Kích cỡ</th>
                <th>Số lượng</th>
                <th>Giá nhập/chiếc(vnđ)</th>
                <th className='th-actions'>

                </th>
              </tr>
              <tr className='admin-td'>
                <td>
                  <div className='admin-cell-td row'>
                    <img src='assets/images/image-10.png' alt='' />
                    <input list="brow" defaultValue='' />
                    {/* <label htmlFor='new-product-check'> */}
                    <label htmlFor='new-product-check' className='btn-admin-cell-td btn-new-product'>
                      <i className='fa fa-plus'></i>
                    </label>
                    {/* </label> */}
                  </div>

                  <datalist id="brow">
                    <option value="Internet Explorer">
                      <img src='assets/images/image-10.png' alt='' /> Áo đẹp ơi là đẹp &emsp; <i className='fa fa-search'></i>
                    </option>
                    <option value="Firefox">
                      78910
                    </option>
                    <option value="Chrome">
                      112233
                    </option>
                    <option value="Opera">
                      112244
                    </option>
                    <option value="Safari">
                      113355
                    </option>
                  </datalist>
                </td>
                <td>
                  <div className='admin-cell-td color-td row'>
                    <div className='admin-color-td' style={{ background: 'orange' }}>

                    </div>
                    <input list="admin-color" defaultValue='' />
                    <button className='btn-admin-cell-td'>
                      <i className='fa fa-plus'></i>
                    </button>
                  </div>

                  <datalist id="admin-color">
                    <option value="Cam">
                      Cam
                    </option>

                  </datalist>
                </td>
                <td>
                  <div className='admin-cell-td size-td row'>
                    <div className='admin-size-td'>
                      L
                    </div>
                    <input list="admin-size" defaultValue='L' />
                    <button className='btn-admin-cell-td'>
                      <i className='fa fa-plus'></i>
                    </button>
                  </div>
                  <datalist id="admin-size">
                    <option value="S">

                    </option>
                    <option value="M">

                    </option>
                    <option value="L">

                    </option>
                    <option value="XL">

                    </option>
                    <option value="XXL">

                    </option>
                  </datalist>
                </td>
                <td>
                  <div className='admin-cell-td quantity-td row'>
                    <input type="number" id="quantity" name="quantity" min={1} />
                  </div>
                </td>
                <td>
                  <div className='admin-cell-td money-td row'>
                    <input type="number" id="money" name="money" min={1} />
                  </div>
                </td>
                <td>
                  <div className='table-actions btn-input-plus'>
                    <button>
                      Nhập
                    </button>
                  </div>
                </td>
              </tr>
            </table>
          </div>

          <div className='inputs-history-title'>
            Lịch sử nhập hàng:
          </div>
          < div className='admin-page-content'>
            <table className='admin-table'>
              <tr className='admin-th'>
                <th>Tên sản phẩm</th>
                <th>Mã sản phẩm</th>
                <th>Số lượng</th>
                <th>Giá nhập (vnd)</th>
                <th>Ngày</th>
                <th className='th-actions'>Thao tác</th>
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
