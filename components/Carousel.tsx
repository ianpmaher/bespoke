"use client";

import Image from "next/image";
import React, { useState } from "react";
import Card from "./Card";

interface CarouselProps {
    images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleNext = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePrev = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const previousImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    const nextImageIndex = (currentImageIndex + 1) % images.length;

    return (
        <div className="w-full h-full flex gap-4 static">
            <button onClick={handlePrev} className="text-2xl">⬅️</button>
            <Card variant="pictures">
                <Image src={images[previousImageIndex]} alt="Previous Carousel Image" width={150} height={150} className="rounded-xl" />
            </Card>
            <Card variant="pictures">
                <Image src={images[currentImageIndex]} alt="Carousel Image" width={300} height={300} className="rounded-xl" />
            </Card>
            <Card variant="pictures">
                <Image src={images[nextImageIndex]} alt="Next Carousel Image" width={150} height={150} className="rounded-xl" />
            </Card>
            <button onClick={handleNext} className="text-2xl">➡️</button>
        </div>
    );
};

export default Carousel;
