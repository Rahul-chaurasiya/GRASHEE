
import { Menu, ShoppingCart, UserRound } from "lucide-react"
import Search from "../search/Search"
import { useDevice } from "../../context/DeviceContext"
import Logo from "../logo/Logo"
import { IoIosHeart } from "react-icons/io"
import { IoCart } from "react-icons/io5"


const MobileNavbar = () => {
    return (
        <nav className="p-4">
            <ul className="flex justify-between items-center">
                <li>
                    <ul className="flex items-center gap-2">
                        <li className="flex"><button><Menu /></button></li>
                        <li className="h-5 relative -top-0.4"><a href="/"><Logo /></a></li>
                    </ul>
                </li>
                <li>
                    <ul className="flex items-center gap-2">
                        <li className="flex text-purple-800"><button><IoCart size={24} /></button></li>
                        <li className="flex"><button><IoIosHeart size={24} color="red" /></button></li>
                    </ul>
                </li>
            </ul>
        </nav>
    )
}

const LargeScreenNavbar = () => {
    return (
        <nav className="px-4 border-b-1 border-gray-400">
            <ul className="flex items-center  p-3 gap-4">
                <li className="font-bold text-2xl text-purple-700">Grashee</li>
                <li className="flex-1"><Search /></li>
                <li className="flex">
                    <button className="h-10 hover:text-purple-700 px-4 flex items-center justify-center">
                        Work with us
                    </button>
                </li>
                <li>
                    <button className="h-10 hover:text-purple-700 w-10 flex flex-col items-center justify-center">
                        <span><UserRound size={24} /></span>
                        Profile
                    </button>
                </li>
                <li>
                    <button className="h-10 hover:text-purple-700 w-10 flex-col flex items-center justify-center">
                        <span> <ShoppingCart size={24} /></span>
                        Cart
                    </button>
                </li>

            </ul>
        </nav>
    )
}


const Navbar = () => {
    const { isMobile } = useDevice()
    return (
        <nav id="navbar-wrapper">{
            isMobile ? <MobileNavbar /> : <LargeScreenNavbar />
        }</nav>

    )
}

export default Navbar
