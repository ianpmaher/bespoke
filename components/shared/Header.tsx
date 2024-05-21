import Product from "../Product";
import Nav from "./Nav";

function Header() {
    return (
        <header className="flex flex-col justify-center items-center sticky bg-custom8008-caret-color w-3/4 text-black p-2 rounded-2xl">
            <h1 className="text-2xl ">Bespoke Customs</h1>
            <h3 className="italic">cool tees</h3>
            {/* <Nav /> */}
        </header>
    );
}

export default Header;