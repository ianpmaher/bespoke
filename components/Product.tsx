"use client";

import React, { useEffect, useState } from "react";
import fetchJsonPlaceholderData from "@/app/utils/fetch-api";
import motion from "framer-motion";
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
        <div className="text-center ">
            {Object.keys(albums).map((albumId) => (
                <div className="mx-auto my-0" key={albumId}>
                    {/* <h2>{albumId}</h2> */}
                    <div className="columns-3 gap-4">
                        {[24, 32, 36, 32, 32, 32, 16, 16, 64].map((height, index) => (
                            <div
                                key={index}
                                className={`mb-4 h-${height} break-inside-avoid rounded-xl border-2 border-slate-400/10 bg-neutral-100 p-4 dark:bg-neutral-900`}
                            >
                                {albums[parseInt(albumId)].map((photo) => (
                                    <div
                                        key={photo.id}
                                        className="max-w-96 flex flex-col justify-start items-center hover:z-50 z-10 shadow-lg bg-custom8008-sub-color bg-opacity-100 w-1/2 rounded-sm p-1 object-contain"
                                    >
                                        <Image
                                            src={photo.thumbnailUrl}
                                            alt={photo.title}
                                            width={150}
                                            height={150}
                                            loading="lazy"
                                        />
                                        <p className="text-xs text-pretty md:text-md">{photo.title}</p>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Product;
