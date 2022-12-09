import './orderDetail.css'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import PurchaseProduct from './PurchaseProduct/PurchaseProduct'
import { getOrderDetail } from '../../../lib'

export default function OrderDetail() {
  const { id } = useParams()

  const [orderDetail, setOrderDetail] = useState()

  useEffect(() => {
    const sendRequest = async () => {
      const response = await getOrderDetail(id)
      if (response) {
        setOrderDetail(response)
      }
    }
    sendRequest()
  }, [])

  const totalPrice = orderDetail?.reduce((total, value) => {
    return total + (value.product.price * value.quantity)
  }, 0)

  console.log(orderDetail)

  return (
    <div className='purchase'>
      <div className='top-page container' style={{ background: '#b7b7b7' }}>
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
                    {orderDetail?.map((item, index) => (
                      <PurchaseProduct data={item} key={index} />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className='purchase-detail col-4'>
              <div className='purchase-detail-wrap'>
                <div className='purchase-detail-client-name'>
                  Khách hàng: {orderDetail.user?.name}
                </div>
                <div className='purchase-detail-date'>
                  Ngày: 12/03/2022
                </div>
                <div className='purchase-detail-phone'>
                  <span>Số điện thoại: </span> 01234345798
                </div>
                <div className='purchase-detail-address mt-6px'>
                  <span>Địa chỉ nhận hàng: </span> {orderDetail[0]?.order.address1}
                </div>
                <hr className='mt-12px' />
                <div className='purchase-detail-price mt-12px'>
                  <div>Giá gốc:</div>
                  <div>{totalPrice} đ</div>
                </div>
                <div className='purchase-detail-price mt-6px'>
                  <div>Giảm giá:</div>
                  {/* {discou} */}
                  <div>{orderDetail?.discount?.discount || 0}%</div>
                </div>
                <div className='purchase-detail-price'>
                  <span>Giá thanh toán:</span>
                  <span>{totalPrice} đ</span>
                </div>

                <hr />

                <div>
                  <span>Trạng thái hóa đơn:</span>
                  <span className='ml-12px' style={{ color: 'orange', fontStyle: 'italic' }}>chờ duyệt</span>
                </div>

                <hr className='mt-12px' />

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
