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
                <div className="flex mx-auto my-0" key={albumId}>
                    <h2>Album ID: {albumId}</h2>
                    <div className="flex overflow-x-scroll">
                        {albums[parseInt(albumId)].map((photo) => (
                            <div key={photo.id}>
                                <Image src={photo.thumbnailUrl} alt={photo.title} width={100} height={100} />
                                <p>{photo.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Product;
