import ContentContainer from "@/components/ContentContainer";
import Hero from "@/components/Hero";
import Product from "@/components/Product";
import Image from "next/image";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center ">
            <article className="">
                <Hero />
            </article>
            <article>
                <ContentContainer />
            </article>
        </main>
    );
}
