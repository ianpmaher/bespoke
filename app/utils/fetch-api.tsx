// Fetch API to get data

const url = "https://jsonplaceholder.typicode.com/photos";

// interface to define the structure of the data object
interface Photo {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
}

// fetch API to get data

const fetchJsonPlaceholderData = async () => {
    const response = await fetch(url);

    // fetch only 50 photos

    const data: Photo[] = (await response.json()).slice(0,50) as Photo[]; // Type assertion to Photo[] type

    const albums = data.reduce((acc, photo) => {
        if (!acc[photo.albumId]) {
            acc[photo.albumId] = [];
        }
        acc[photo.albumId].push(photo);
        return acc;
    }, {} as { [key: number]: Photo[] });

    return albums;
};

export default fetchJsonPlaceholderData;
