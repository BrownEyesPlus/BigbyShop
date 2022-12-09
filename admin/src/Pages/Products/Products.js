import './products.css'
import { useEffect, useState } from 'react'

import Product from './../../Share/Components/Product/Product.js'
import { getBaseProduct } from '../../lib'

export default function Products() {
  const [baseProducts, setBaseProducts] = useState()

  useEffect(() => {
    const sendRequest = async () => {
      const response = await getBaseProduct()
      if (response) {
        setBaseProducts(response.results)
      }
    }
    sendRequest()
  }, [])

  console.log(baseProducts)

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
                <th style={{ textAlign: 'center' }}>Tên sản phẩm</th>
                <th>Mã sản phẩm</th>
                <th>Tồn kho</th>
                <th>Giá</th>
                <th className='th-actions'>Thao tác</th>
              </tr>
              {baseProducts?.map((item, index) => (
                <Product data={item} key={index} />
              ))}
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
