"use client";
// Desc: Sidebar component for the dashboard
// advertisements and other information will be displayed here
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function Sidebar() {
    const images = [
        "https://picsum.photos/200/300",
        "https://picsum.photos/300/400",
        "https://picsum.photos/290/350",
        "https://picsum.photos/250/300",
        "https://picsum.photos/190/300",
        "https://picsum.photos/200/250",
        "https://picsum.photos/210/290",
        "https://picsum.photos/220/280",
        "https://picsum.photos/250/310",
        "https://picsum.photos/210/330",
        "https://picsum.photos/250/290",
        "https://picsum.photos/200/260",
        "https://picsum.photos/210/330",
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 10000);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <section className="fixed">
            <div className="flex gap-2 flex-wrap flex-col">
                <p className="text-center">Your ad here!</p>
                <div className="w-[95%] h-fit mx-auto">
                    <Image
                        key={currentImageIndex}
                        src={images[currentImageIndex]}
                        alt="ad placeholder"
                        width={200}
                        height={300}
                        className="rounded-xl object-fill"
                    />
                </div>
            </div>
        </section>
    );
}
