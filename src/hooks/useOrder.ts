import { useState } from 'react'
import type { MenuItem, OrderItem } from '../types'

export default function useOrder() {


    const [order, setOrder] = useState<OrderItem[]>([]); //generics type to specify the type of the state

    const addItem = (item : MenuItem) => {
        console.log(item)
    }

    return {
        addItem
    }
}