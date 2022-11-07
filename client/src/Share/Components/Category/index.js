import './index.css'
import { NavLink } from 'react-router-dom'

import ProductListItem from '../ProductListItem/ProductListItem'

export default function Category({ backgroundColor, title, dataList }) {
  return (
    <div className='part category' style={{ background: backgroundColor ? 'linear-gradient(0deg, #F4F1E9, #F4F1E9), #FFFFFF' : 'transparent' }}>
      <div className='container'>
        <h2 className='category-title'>
          {title || 'Danh muc'}
        </h2>
        <div className='row product-lists'>
          {dataList.map((product, index) => (
            <ProductListItem
              key={index}
              data={product}
            />
          ))}
        </div>
        <NavLink to="/shop">
          <div className="btn-see-more">
            See more...
          </div>
        </NavLink>
      </div>
    </div>
  )
}

