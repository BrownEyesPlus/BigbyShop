// import OrderDetail from '../../../Share/Components/OrderDetail/OrderDetail'
import './order.css'

export default function Order() {
  return (
    <tr className='admin-td'>
      <td> 
        <div className='table-client-name'>
          <div className='row'>
            <img src='./assets/images/bigby1.jpg' alt=''/>
            <span>Phạm Mỹ Linh</span>
          </div>
        </div>
      </td>
      <td>12/3/2022</td>
      <td>1.200.000</td>
      <td>1232534641423</td>
      <td>Chờ duyệt</td>
      <td>
        <div className='table-actions'>
          <a href='/orderdetail'>
          <button className='table-read' style={{color: 'green'}}>
            <i className='fa fa-eye'></i> 
          </button>
          </a>
          {/* <OrderDetail/> */}
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
