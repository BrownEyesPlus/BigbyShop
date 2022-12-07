import './purchaseProduct.css'

export default function PurchaseProduct({ data }) {
  const {
    id,
    name,
    image,
    price,
    colorProduct,
    size,
    quantity,
  } = data

  // console.log(data)

  return (
    <tr className="alert" role="alert">
      <td>
        <div className="img" style={{ background: '#eee', textAlign: 'center' }} >
          <img src={colorProduct?.image} alt={name} style={{ height: '100%' }} />
        </div>
      </td>
      <td>
        <div className="email">
          <span>
            {name}
          </span>
          <div className="d-flex color-size" >
            <div
              className="item-color"
              style={{
                backgroundColor: colorProduct?.color.color_code,
                borderColor: (colorProduct?.color.color_code === 'white' || colorProduct?.color.color_code === '#fffff' ? 'gray' : 'white'),
                boxSizing: 'border-box',
              }}
            />
            <div className="item-size">
              {size}
            </div>
          </div>
        </div>
      </td>
      <td>
        {price}
      </td>
      <td className="quantity">
        {/* <div className="input-group">
            <input type="text" name="quantity" className="quantity form-control input-number" defaultValue={2} min={1} max={100} />
            </div> */}
        {quantity}
      </td>
      <td>
        {quantity * price}
      </td>
      <td>
        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true"><i className="fa fa-close" /></span>
        </button>
      </td>
    </tr>
  )
}
