import ProductDetail from '../ProductDetail/ProductDetail'
import './product.css'

export default function Product({ data }) {
  return (
    <tr className='admin-td'>
      <td>
        <div className='table-product-name'>
          <div className='row'>
            <img src={data?.image} alt='' />
            <span>
              {data?.name}
            </span>
          </div>
        </div>
      </td>
      <td>
        {data?.code_name}
      </td>
      <td>
        {data?.product_colors?.length}
      </td>
      <td>
        {data?.price}
      </td>
      <td>
        <div className='table-actions'>
          <label htmlFor='product-detail-check' className='table-read' style={{ color: 'green' }}>
            <i className='fa fa-eye'></i>
          </label>
          <input type="checkbox" className="product-detail-check hidden-check" name="product-detail-checkbox" id="product-detail-check" autoComplete="off" />
          <ProductDetail />

          <button className='table-update'>
            <i className='fa fa-pencil-square-o'></i>
          </button>
          <button className='table-delete' style={{ color: 'brown' }}>
            <i className='fa fa-trash'></i>
          </button>
        </div>
      </td>
    </tr>
  )
}
