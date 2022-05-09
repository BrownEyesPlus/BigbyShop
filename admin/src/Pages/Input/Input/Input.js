import './input.css'

export default function Input() {
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
      <td>q345364562153</td>
      <td>123</td>
      <td>340.000</td>
      <td>12/12/2021</td>
      <td>
        <div className='table-actions admin-input'>
          <button className='table-read' style={{color: 'green'}}>
            <i className='fa fa-eye mr-6px'></i> Xem
          </button>
        </div>
      </td>
    </tr>
  )
}
