import './purchaseProduct.css'

export default function PurchaseProduct() {
  return (
    <tr className="alert" role="alert">
        <td>
            <div className="img" style={{backgroundImage: 'url(' + 'assets/images/product-1.png' + ')'}} />
        </td>
        <td>
            <div className="email">
            <span>Sneakers Shoes 2020 For Men </span>
            <div>Fugiat voluptates</div>
            </div>
        </td>
        <td>300.000</td>
        <td className="quantity">
            {/* <div className="input-group">
            <input type="text" name="quantity" className="quantity form-control input-number" defaultValue={2} min={1} max={100} />
            </div> */}
            1
        </td>
        <td>300.000</td>
        <td>
            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true"><i className="fa fa-close" /></span>
            </button>
        </td>
    </tr>
  )
}
