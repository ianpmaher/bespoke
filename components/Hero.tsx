// hero component for the home page

import Image from "next/image";
import EmblaCarousel from "./EmblaCarousel";

export default function Hero() {
    return (
        <div className="">
            <EmblaCarousel slides={[1, 2, 3, 4, 5, 6, 7, 32]} />
        </div>
    );
}