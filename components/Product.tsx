"use client";

import React, { useEffect, useState } from "react";
import fetchJsonPlaceholderData from "@/app/utils/fetch-api";
import Image from "next/image";

// interface to define the structure of the data object
interface Photo {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
}

const Product = () => {
    // State to store the data
    const [albums, setAlbums] = useState<{ [key: number]: Photo[] }>({});

    // fetch data and set the state
    useEffect(() => {
        fetchJsonPlaceholderData().then((albums) => setAlbums(albums));
    }, []);

    return (
        <div className="">
            {Object.keys(albums).map((albumId) => (
                <div className="flex justify-center mx-auto my-0" key={albumId}>
                    {/* <h2>{albumId}</h2> */}
                    <div className="grid grid-cols-3 justify-items-center content-center place-content-evenly p-2 ">
                        {albums[parseInt(albumId)].map((photo) => (
                            <div key={photo.id} className="max-w-96 flex flex-col justify-center items-center hover:z-50 z-10 shadow-lg">
                                <Image src={photo.thumbnailUrl} alt={photo.title} width={150} height={150} />
                                <p className="text-xs">{photo.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Product;
