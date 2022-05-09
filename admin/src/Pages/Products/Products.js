import './products.css'
import Product from './../../Share/Components/Product/Product.js'

export default function Products() {
  return (
    <div className='admin-page'>
      <div className='products'> 
          <div className='container'>
              <div className='admin-page-title'>
                  Sản phẩm
              </div>
              < div className='admin-page-content'>
                <table className='admin-table'>
                  <tr className='admin-th'>
                    <th style={{textAlign: 'center'}}>Tên sản phẩm</th>
                    <th>Mã sản phẩm</th>
                    <th>Tồn kho</th>
                    <th>Giá</th>
                    <th className='th-actions'>Thao tác</th>
                  </tr>
                  <Product/>
                  <Product/>
                  <Product/>
                  <Product/>
                  <Product/>
                  <Product/>
                  <Product/>
                  <Product/>
                  <Product/>
                  <Product/>               
                </table>
              </div>
          </div>
      </div>
    </div>
  )
}
