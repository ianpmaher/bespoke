// app/page.tsx
import Layout from "./layout";

const Bento = () => {
    return (
        <Layout>
            <div className="grid grid-cols-12 gap-4">
                <div className="col-span-12 md:col-span-6 lg:col-span-3 bg-white rounded-lg shadow-md p-4">
                    <h2 className="text-xl font-bold mb-2">Box 1</h2>
                    <p>Content for Box 1</p>
                </div>
                <div className="col-span-12 md:col-span-6 lg:col-span-3 bg-white rounded-lg shadow-md p-4">
                    <h2 className="text-xl font-bold mb-2">Box 2</h2>
                    <p>Content for Box 2</p>
                </div>
                <div className="col-span-12 md:col-span-6 lg:col-span-3 bg-white rounded-lg shadow-md p-4">
                    <h2 className="text-xl font-bold mb-2">Box 3</h2>
                    <p>Content for Box 3</p>
                </div>
                <div className="col-span-12 md:col-span-6 lg:col-span-3 bg-white rounded-lg shadow-md p-4">
                    <h2 className="text-xl font-bold mb-2">Box 4</h2>
                    <p>Content for Box 4</p>
                </div>
                <div className="col-span-12 md:col-span-6 lg:col-span-3 bg-white rounded-lg shadow-md p-4">
                    <h2 className="text-xl font-bold mb-2">Box 5</h2>
                    <p>Content for Box 5</p>
                </div>
                <div className="col-span-12 md:col-span-6 lg:col-span-3 bg-white rounded-lg shadow-md p-4">
                    <h2 className="text-xl font-bold mb-2">Box 6</h2>
                    <p>Content for Box 6</p>
                </div>
                <div className="col-span-12 md:col-span-6 lg:col-span-3 bg-white rounded-lg shadow-md p-4">
                    <h2 className="text-xl font-bold mb-2">Box 7</h2>
                    <p>Content for Box 7</p>
                </div>
                <div className="col-span-12 md:col-span-6 lg:col-span-3 bg-white rounded-lg shadow-md p-4">
                    <h2 className="text-xl font-bold mb-2">Box 8</h2>
                    <p>Content for Box 8</p>
                </div>
                <div className="col-span-12 md:col-span-6 lg:col-span-3 bg-white rounded-lg shadow-md p-4">
                    <h2 className="text-xl font-bold mb-2">Box 9</h2>
                    <p>Content for Box 9</p>
                </div>
                <div className="col-span-12 md:col-span-6 lg:col-span-3 bg-white rounded-lg shadow-md p-4">
                    <h2 className="text-xl font-bold mb-2">Box 10</h2>
                    <p>Content for Box 10</p>
                </div>
            </div>
            <h1 className="text-3xl font-bold">Bento</h1>
        </Layout>
    );
};

export default Bento;
