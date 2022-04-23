import './purchase.css'
import PurchaseProduct from './PurchaseProduct/PurchaseProduct'

export default function Purchase() {
  return (
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
                            <div className='purchase-detail-title'>
                                Thanh toán
                            </div>
                            <div className='purchase-detail-price'>
                                <div>Giá gốc:</div>
                                <div>1.200.000 đ</div>
                            </div>
                            <div className='purchase-detail-price'>
                                <span>Giá thanh toán:</span>
                                <span>1.200.000 đ</span>
                            </div>
                            <hr/>
                            <span>Địa chỉ nhận hàng:</span>
                            
                                <select className='purchase-address-select' name="cars" id="cars" >
                                    <option value="volvo">Volvo</option>
                                    <option value="saab">Saab</option>
                                    <option value="mercedes">Mercedes</option>
                                    <option value="audi">Audi</option>
                                </select>
                                <select className='purchase-address-select' name="cars" id="cars" >
                                    <option value="volvo">Volvo</option>
                                    <option value="saab">Saab</option>
                                    <option value="mercedes">Mercedes</option>
                                    <option value="audi">Audi</option>
                                </select>
                                <select className='purchase-address-select' name="cars" id="cars" >
                                    <option value="volvo">Volvo</option>
                                    <option value="saab">Saab</option>
                                    <option value="mercedes">Mercedes</option>
                                    <option value="audi">Audi</option>
                                </select>
                                
                                <textarea className='purchase-address-textarea' id="w3review" name="w3review" rows="4" cols="50">
                                </textarea>
                                <hr/>
                                <span>Phương thức thanh toán:</span>
                                <label className='purchase-method' htmlFor="method1">
                                    <input type="radio" className="purchase-method-radio" name="method" id="method1" autoComplete="off" value='value1'/>
                                    <label className="purchase-option" htmlFor="method1" >
                                        Thanh toán khi nhận hàng
                                    </label>
                                </label>
                                <label className='purchase-method' htmlFor="method2">
                                    <input type="radio" className="purchase-method-radio" name="method" id="method2" autoComplete="off" value='value1'/>
                                    <label className="purchase-option" htmlFor="method2" >
                                        Thanh toán online qua
                                    </label>
                                </label>
                                <hr/>
                                <button type='submit' className='btn-purchase'>
                                    Thanh toán
                                </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
