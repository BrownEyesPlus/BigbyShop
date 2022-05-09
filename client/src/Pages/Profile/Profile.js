import './profile.css'
import PurchaseOrder from './PurchaseOrder/PurchaseOrder'

export default function Profile() {
  return (
    <div className='profile'>
        <div className='top-page container'>
            Trang cá nhân
        </div> 
        <div className='container'>
            <div className='profile-wrap'>
                <div className='profile-detail'>
                    <div className='row'>
                        <div className='col-3'>
                            <div className='profile-image-frame'>
                                <img className='profile-image' src='assets/images/bigby1.jpg'/>
                            </div>
                            
                        </div>
                        <div className='col-9'>
                            <div className='profile-detail-content'>
                                <div className='profile-detail-title'>
                                    Thông tin cá nhân:
                                </div>
                                <div className='profile-row'>
                                    <span>Họ tên: </span> Phạm Mỹ Linh
                                </div>
                                <div className='profile-row'>
                                    <span>Giới tính: </span> Nam
                                </div>
                                <div className='profile-row'>
                                    <span>Năm sinh: </span> 1998
                                </div>
                                <div className='profile-row'>
                                    <span>Điện thoại: </span> 0327123388
                                </div>
                                <div className='profile-row'>
                                    <span>Email: </span> linhmypham98@gmail.com
                                </div>
                                <div className='profile-row'>
                                    <span>Địa chỉ: </span> số 34, ngõ 3, xóm Đông, Cổ Dương, Tiên Dương, Hà Nội
                                </div>

                                <div className='profile-actions'>
                                    <button className='profile-action btn-edit-profile'>
                                        Chỉnh sửa thông tin cá nhân
                                    </button>
                                    <button className='profile-action btn-change-password'>
                                        Đổi mật khẩu
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='container purchase-history'>
            <div className='purchase-history-title'>
                Lịch sử mua sắm:
            </div>
            <div className="table-wrap">
                <table className="table">
                <thead className="thead-primary">
                    <tr>
                    <th>&nbsp;</th>
                    <th>Mã đơn hàng</th>
                    <th>Trạng thái</th>
                    <th>Giá trị (vnd)</th>
                    <th>Ngày ghi nhận</th>
                    <th>Cập nhận cuối</th>
                    <th>&nbsp;</th>
                    </tr>
                </thead>
                <tbody>
                    <PurchaseOrder/>
                    <PurchaseOrder/>
                    <PurchaseOrder/>
                    <PurchaseOrder/>
                </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}
