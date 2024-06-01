import Image from "next/image";
import Product from "../Product";
import Nav from "./Nav";
import SteamyBread from "../svg/SteamyBread";
import Contacts from "../Contacts";

function Header() {
    return (
        <header className="flex flex-col justify-center items-center sticky bg-custom8008-caret-color w-3/4 sm:min-h-20 text-black p-2 rounded-2xl">
            <h1 className="text-4xl ">Bespoke Bakery</h1>
            <div className="flex items-center justify-evenly md:w-1/4">
                <h3 className="text-md md:text-xl">leaven | local</h3>
                <div className="self-end">
                    <SteamyBread />
                </div>
            </div>
            <Contacts />
        </header>
    );
}

export default Header;
