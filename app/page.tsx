import ContentContainer from "@/components/ContentContainer";
import Hero from "@/components/Hero";
import Product from "@/components/Product";
import Image from "next/image";
import ScrollYDiv from "@/components/ScrollDiv";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center gap-2 ">
            <article className="">
                <Hero />
            </article>
            <article>
                <ContentContainer />
            </article>
            <div>
                <ScrollYDiv className="fixed" />
            </div>
        </main>
    );
}
