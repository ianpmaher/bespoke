import ContentContainer from "@/components/ContentContainer";
import Hero from "@/components/Hero";
import Product from "@/components/Product";
import Image from "next/image";
import ScrollYDiv from "@/components/ScrollDiv";

export default function Home() {
    return (
        <main className="grid grid-cols-10 gap-2 mt-64 w-full">
            <div className=" col-span-8 md:col-span-6 lg:col-span-3 rounded-lg shadow-md p-1">
                <Hero />
            </div>
            <div className="col-span-8 md:col-span-6 lg:col-span-3  rounded-lg shadow-md p-1">
                <ContentContainer />
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-3  rounded-lg shadow-md p-1">
                <Product />
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-3  rounded-lg shadow-md p-1">
                <p>Content for Box 4</p>
            </div>
            <div className="">
                <ScrollYDiv className="fixed" />
            </div>
        </main>
    );
}
