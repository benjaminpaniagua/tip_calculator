import type {MenuItem} from '../types'

type MenuItemProps = {
    item: MenuItem
    addItem: (item: MenuItem) => void // Función que no recibe ningún argumento y no retorna nada
}

export default function MenuItem({item, addItem} : MenuItemProps) {
  return (
    <button className='border-2 border-teal-100 hover:bg-teal-100 transition duration-300 ease-in-out w-full p-3 flex justify-between items-center gap-2 rounded-2xl'
    onClick={() => addItem(item)}
    >
        <p>{item.name}</p>
        <p className='font-black'>{item.price}</p>
    </button>
  )
}
