import ProductDetail from '../ProductDetail/ProductDetail'
import './product.css'

export default function Product() {
  return (
    <tr className='admin-td'>
      <td> 
        <div className='table-product-name'>
          <div className='row'>
            <img src='./assets/images/image-10.png' alt=''/>
            <span>Áo đẹp ơi là đẹp</span>
          </div>
        </div>
      </td>
      <td>Maria Anders</td>
      <td>Germany</td>
      <td>Maria Anders</td>
      <td>
        <div className='table-actions'>
          <label htmlFor='product-detail-check' className='table-read' style={{color: 'green'}}>
            <i className='fa fa-eye'></i> 
          </label>
            <input type="checkbox" className="product-detail-check hidden-check" name="product-detail-checkbox" id="product-detail-check" autoComplete="off"/>
            <ProductDetail/>

          <button className='table-update'>
            <i className='fa fa-pencil-square-o'></i> 
          </button>
          <button className='table-delete' style={{color: 'brown'}}>
            <i className='fa fa-trash'></i> 
          </button>
        </div>
      </td>
    </tr>
  )
}
