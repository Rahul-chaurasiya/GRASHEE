import Categories from "./components/categories/Categories"
import Navbar from "./components/navbar/Navbar"
import Home from "./pages/home/Home"

const App = () => {
  return (
    <div>
        <Navbar/>
        <Categories/>
        <main>
             <Home/>
        </main>
    </div>
  )
}

export default App
