import MenuItem from "./components/MenuItem"
import OrderContents from "./components/OrderContents"
import { menuItems } from "./data/db"
import useOrder from "./hooks/useOrder"

function App() {

  const { order, addItem } = useOrder() 
  

  return (
    <>
      <header className="bg-teal-400 py-5">
        <h1 className="text-center text-3xl font-black">Calculadora de propinas y consumo</h1>
      </header>

      <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2 gap-4 justify-center">
        <div>
          <h2 className="text-2xl font-bold">Menú</h2>
          <div className="space-y-3 mt-5">
            {menuItems.map(item => (
              <MenuItem
                key={item.id}
                item={item}
                addItem={addItem}
              />
            ))}
          </div>
        </div>
        <div className="border border-dashed border-slate-300 p-5 rounded-md space-y-10">
          <OrderContents 
            order={order}
          />
        </div>
      </main>
    </>
  )
}

export default App
