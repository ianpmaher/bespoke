// hero component for the home page

import Image from "next/image";

export default function Hero() {

    // function to change the image on interval
    const changeImage = () => {
        const images = [
            "https://picsum.photos/200/300",
            "https://picsum.photos/250/300",
            "https://picsum.photos/190/300",
        ];
        let i = 0;
        setInterval(() => {
            i = i === 2 ? 0 : i + 1;
            return images[i];
        }, 5000);
    };

    return (
        <section className="bg-sailing-lady bg-center bg- w-fit bg-no-repeat">
            <div className="flex gap-8">
                <Image src="https://picsum.photos/190/300" alt="hero image" width={200} height={300} className="rounded-xl object-fill" />
            </div>
        </section>
    );
}