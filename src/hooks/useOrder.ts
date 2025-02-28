import { useState } from 'react'
import type { MenuItem, OrderItem } from '../types'

export default function useOrder() {


    const [order, setOrder] = useState<OrderItem[]>([]); //generics type to specify the type of the state

    const addItem = (item : MenuItem) => {
        const itemExist = order.find(orderItem => orderItem.id === item.id) //check if the item is already in the order
        if(itemExist) {
            const updatedOrder = order.map(orderItem => 
                orderItem.id === item.id 
                ? { ...orderItem, quantity: orderItem.quantity + 1 } 
                : orderItem
            ) //if the item exist, update the quantity property
            setOrder(updatedOrder) //update the order state with the updated order
        } else {
            const newItem = { ...item, quantity: 1 } //add the quantity and item : MenuItem property to the new object called newItem 
            setOrder ([...order, newItem]) //update the order state with the new item
        }
    }
    return {
        order,
        addItem,
    }
}