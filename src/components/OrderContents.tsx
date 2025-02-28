import { OrderItem } from "../types"

type OrderContentsProps = {
    order: OrderItem[]
}

export default function OrderContents({order}: OrderContentsProps) {
  return (
    <div>
        <h2 className="text-2xl font-bold">Consumo</h2>

        <div className="space-y-3 mt-5">
            {order.length === 0 
            ? <p>No hay nada en tu orden</p>
            : order.map( item => 
                <div key={item.id} className="flex justify-between items-center gap-2">
                    <p>{item.name} <strong>x{item.quantity}</strong></p>
                    <p>{item.price * item.quantity}</p>
                </div>
            )}
        </div>
    </div>
  )
}
