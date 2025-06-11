
import { ShoppingCart, UserRound } from "lucide-react"
import Search from "../search/Search"


const Navbar = () => {
    return (
        <nav>
            <ul className="flex items-center border-b-1 border-gray-400 p-3 gap-3">
                <li className="font-bold text-2xl text-purple-700">Grashee</li>
                <li className="flex-1"><Search /></li>
                <li>
                    <button className="h-10 hover:text-purple-700 px-4 flex items-center justify-center">
                        Work with us
                    </button>
                </li>
                <li>
                    <button className="h-10 hover:text-purple-700 w-10 flex items-center justify-center">
                        <UserRound />
                    </button>
                </li>
                <li>
                    <button className="h-10 hover:text-purple-700 w-10 flex items-center justify-center">
                        <ShoppingCart />
                    </button>
                </li>

            </ul>
        </nav>
    )
}

export default Navbar
