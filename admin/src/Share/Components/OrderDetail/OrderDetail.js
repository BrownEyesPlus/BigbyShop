import './orderDetail.css'
import PurchaseProduct from './PurchaseProduct/PurchaseProduct'

export default function OrderDetail() {
  return (
    // <div className='order-detail-frame'>
        <div className='purchase'>
            <div className='top-page container' style={{background: '#b7b7b7'}}>
                Đơn đặt hàng
            </div>  
            <div className='container'>
                <div className='purchase-wrap'>
                    
                    <div className='row'>
                        <div className='purchase-products col-8'>
                            <div className="table-wrap">
                                <table className="table">
                                <thead className="thead-primary">
                                    <tr>
                                    <th>&nbsp;</th>
                                    
                                    <th>Sản phẩm</th>
                                    <th>Giá tiền (vnd)</th>
                                    <th>Số lượng</th>
                                    <th>Tổng tiền (vnd)</th>
                                    <th>&nbsp;</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <PurchaseProduct/>
                                    <PurchaseProduct/>
                                    <PurchaseProduct/>
                                    <PurchaseProduct/>
                                </tbody>
                                </table>
                            </div>
                        </div>
                        <div className='purchase-detail col-4'>
                            <div className='purchase-detail-wrap'>
                                <div className='purchase-detail-client-name'>
                                    Khách hàng: Anh My
                                </div>
                                <div className='purchase-detail-date'>
                                    Ngày: 12/03/2022
                                </div>
                                <div className='purchase-detail-phone'>
                                    <span>Số điện thoại: </span> 01234345798
                                </div>
                                <div className='purchase-detail-address mt-6px'>
                                    <span>Địa chỉ nhận hàng: </span> số 99, đường 99, phố Quarter, phường Precinct, quận Town, thành phố City
                                </div>
                                <hr className='mt-12px'/>
                                <div className='purchase-detail-price mt-12px'>
                                    <div>Giá gốc:</div>
                                    <div>1.200.000 đ</div>
                                </div>
                                <div className='purchase-detail-price mt-6px'>
                                    <div>Giảm giá:</div>
                                    <div>30%</div>
                                </div>
                                <div className='purchase-detail-price'>
                                    <span>Giá thanh toán:</span>
                                    <span>1.200.000 đ</span>
                                </div>

                                <hr/>

                                <div>
                                    <span>Trạng thái hóa đơn:</span> 
                                    <span className='ml-12px' style={{color: 'orange', fontStyle: 'italic'}}>chờ duyệt</span>
                                </div>
                                
                                <hr className='mt-12px'/>

                                <div type='submit' className='purchase-detail-actions space-between mt-12px'>
                                    <div className='col-6'>
                                        <button type='submit' className='btn-purchase-detail btn-cancel-order'>
                                            Hủy đơn
                                        </button>
                                    </div>
                                    <div className='col-6'>
                                        <button type='submit' className='btn-purchase-detail btn-update-order'>
                                            Cập nhật
                                        </button>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    // </div>
    
  )
}
