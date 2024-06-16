import Image from "next/image";
import Product from "../Product";
import Nav from "./Nav";
import SteamyBread from "../svg/SteamyBread";
import Contacts from "../Contacts";
import SteamyCoffee from "../svg/SteamyCoffee";
import Link from "next/link";

function Header() {
    return (
        <header className=" flex flex-row justify-center items-center bg-modernDolchLight-main-color w-full sm:min-h-30 text-black rounded-2xl outline outline-modernDolchLight-text-color">
            <div className="flex items-center justify-evenly md:w-1/4 py-2">
                <SteamyBread />
                <SteamyCoffee />
            </div>
            <Link href="/">
                <h1 className="text-3xl md:text-4xl">Bespoke Bakery</h1>
                <div className="flex items-center justify-evenly md:w-1/4">
                    <h3 className="text-md md:text-xl">leaven | local</h3>
                </div>
            </Link>
            <Contacts />
        </header>
    );
}

export default Header;
