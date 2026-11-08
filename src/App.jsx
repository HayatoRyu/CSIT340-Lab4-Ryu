import Todos from './components/Todos.jsx'
import Info from './components/Info.jsx'
 
function App() {
  return (
    <div className="min-h-screen bg-[#f5f5f5] py-8 font-light text-[#111]">
      <Todos />
      <Info name="Hayato G. Ryu" />
    </div>
  )
}
 
export default App