import ContentContainer from "@/components/ContentContainer";
import Hero from "@/components/Hero";
import Product from "@/components/Product";
import Image from "next/image";
import ScrollYDiv from "@/components/ScrollDiv";

export default function Home() {

    return (
        <main className="flex min-h-screen flex-col items-center gap-2 ">
            <article className="h-screen">
                <Hero />
            </article>
            <article className="h-screen">
                <ContentContainer />
            </article>
            <article>
                <Product />
            </article>
            <div>
                <ScrollYDiv className="fixed" />
            </div>
        </main>
    );
}
