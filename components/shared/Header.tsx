import Product from "../Product";
import Nav from "./Nav";

function Header() {
    return (
        <header className="flex flex-col justify-center items-center sticky mb-10">
            <h1 className="text-2xl ">Bespoke Customs</h1>
            <h3 className="italic">cool tees</h3>
            <Nav />
        </header>
    );
}

export default Header;