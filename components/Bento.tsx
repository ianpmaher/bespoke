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

const Bento = () => {
    // State to store the data
    const [albums, setAlbums] = useState<{ [key: number]: Photo[] }>({});

    // fetch data and set the state
    useEffect(() => {
        fetchJsonPlaceholderData().then((albums) => setAlbums(albums));
    }, []);

    return (
        <main className="grid grid-cols-10 gap-2 mt-64">
            <div className=" col-span-8 md:col-span-6 lg:col-span-3 rounded-lg shadow-md p-1">
                {Object.keys(albums).map((albumId) => (
                    <div className="mx-auto my-0" key={albumId}>
                        {/* <h2>{albumId}</h2> */}

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
        </main>
    );
};

export default Bento;
