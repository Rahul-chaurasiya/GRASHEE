import CategoriesNav from "./components/categories-nav/CategoriesNav"
import Navbar from "./components/navbar/Navbar"
import { useDevice } from "./context/DeviceContext"
import Home from "./pages/home/Home"

const App = () => {
  const{isMobile}=useDevice()
  return (
    <div>
        <Navbar/>
        {!isMobile && <CategoriesNav/>}
        <main>
             <Home/>
        </main>
    </div>
  )
}

export default App
