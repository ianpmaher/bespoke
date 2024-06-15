import Image from "next/image";
import Product from "../Product";
import Nav from "./Nav";
import SteamyBread from "../svg/SteamyBread";
import Contacts from "../Contacts";
import SteamyCoffee from "../svg/SteamyCoffee";

function Header() {
    return (
        <header className="fixed flex flex-row justify-center items-center md:z-50 bg-modernDolchLight-main-color w-3/4 sm:min-h-30 text-black p-2 rounded-2xl">
            <div className="flex items-center justify-evenly md:w-1/4">
                <SteamyBread />
                <SteamyCoffee />
            </div>
            <h1 className="text-3xl md:text-4xl">Bespoke Bakery</h1>
            <div className="flex items-center justify-evenly md:w-1/4">
                <h3 className="text-md md:text-xl">leaven | local</h3>
            </div>
            <Contacts />
        </header>
    );
}

export default Header;
