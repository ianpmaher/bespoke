import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/Header";
import Nav from "@/components/shared/Nav";
import Sidebar from "@/components/shared/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Bespoke Custom Uniques",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <div className="styled-pattern bg-fixed scroll-smooth ">
                    <main className="max-w-[100vw] my-0 mx-auto bg-">
                        <section className="py-2 mb-2 flex justify-center">
                            <Header />
                        </section>
                        <div className="flex-1 flex flex-col sm:flex-row ">
                            <div className="flex-1 bg-blue-400 ">{children}</div>
                            <nav className="order-first w-1/12 bg-white">
                                <Nav />
                            </nav>
                            <aside className="w-1/12 bg-green-400">
                                <Sidebar />
                            </aside>
                        </div>
                    </main>
                </div>
            </body>
        </html>
    );
}
