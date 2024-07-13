import ContentContainer from "@/components/ContentContainer";
import Hero from "@/components/Hero";
import Product from "@/components/Product";
import Image from "next/image";
import ScrollYDiv from "@/components/ScrollDiv";

export default function Home() {
    return (
        <main className="flex flex-col py-32 w-full">
            <section className="flex flex-row h-full w-full justify-between items-center">
                <div className="flex rounded-lg shadow-md mx-auto">
                    <Hero />
                </div>
                <div className="  rounded-lg shadow-md mx-auto">
                    <ContentContainer />
                </div>
            </section>
            <section className="flex flex-row justify-between text-center my-4">
                <div className="  rounded-lg shadow-md p-1">
                    <p>Content for Box 3</p>
                </div>
                <div className="  rounded-lg shadow-md p-1">
                    <Product />
                </div>
                <div className="  rounded-lg shadow-md p-1">
                    <p>Content for Box 4</p>
                </div>
            </section>
            <div className="absolute">
                <ScrollYDiv className="absolute" />
            </div>
        </main>
    );
}
