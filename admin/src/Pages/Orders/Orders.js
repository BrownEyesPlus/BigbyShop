import Order from './Order/Order'
import './orders.css'

export default function Orders() {
  return (
    <div className='admin-page'>
        <div className='orders'>
            <div className='container'>
                <div className='admin-page-title'>
                    Đơn hàng
                </div>
                < div className='admin-page-content'>
                <table className='admin-table'>
                  <tr className='admin-th'>
                    <th style={{textAlign: 'center'}}>khách hàng</th>
                    <th>Ngày</th>
                    <th>Đơn giá</th>
                    <th>Mã đơn</th>
                    <th>Trạng thái</th>
                    <th className='th-actions'>Thao tác</th>
                  </tr>
                    <Order/>
                    <Order/>      
                    <Order/>
                    <Order/>
                    <Order/>
                    <Order/>
                    <Order/>
                </table>
              </div>
            </div>
        </div>
    </div>
  )
}
