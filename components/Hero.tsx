// hero component for the home page

import Image from "next/image";

export default function Hero() {
    return (
        <div className="flex gap-8">
            <img src="https://picsum.photos/190/300" alt="hero image" width={200} height={300} className="rounded-xl" />
            <img src="https://picsum.photos/250/300" alt="hero image" width={200} height={300} className="rounded-xl" />
            <img src="https://picsum.photos/200/300" alt="hero image" width={200} height={300} className="rounded-xl" />
        </div>
    );
}