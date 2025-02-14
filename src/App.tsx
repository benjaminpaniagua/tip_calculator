import MenuItem from "./components/MenuItem"
import { menuItems } from "./data/db"

function App() {

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
              />
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold">Consumo</h2>
        </div>
      </main>
    </>
  )
}

export default App
