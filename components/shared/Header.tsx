import Image from "next/image";
import Product from "../Product";
import Nav from "./Nav";
import SteamyBread from "../svg/SteamyBread";

function Header() {
    return (
        <header className="flex flex-col justify-center items-center sticky bg-custom8008-caret-color w-3/4 sm:min-h-20 text-black p-2 rounded-2xl">
            <h1 className="text-4xl ">Bespoke Bakery</h1>
            <div className="flex items-center justify-evenly w-1/4">
                <h3 className="text-xl">leaven | local</h3>
                <div className="self-end">
                    <SteamyBread />
                </div>
            </div>
            {/* <Nav /> */}
        </header>
    );
}

export default Header;
