import { ORDER } from '../../../Constants'
import './purchaseOrder.css'

export default function PurchaseOrder({ data }) {
  const {
    id,
    uuid,
    status,
    total_price,
    created_at,
    updated_at
  } = data

  return (
    <tr className="alert" role="alert">
      <td>
        <></>
      </td>
      <td>
        <div className="email">
          <span>
            {uuid}
          </span>
        </div>
      </td>
      <td>
        <div className={`order-status ${ORDER.status[status].style}`}>
          {ORDER.status[status].name}
        </div>
      </td>
      <td className="order-price">
        {total_price}
      </td>
      <td>
        {created_at}
      </td>
      <td>
        {updated_at}
      </td>
    </tr>
  )
}
