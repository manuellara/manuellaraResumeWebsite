import Head from "next/head"
import Footer from "./Footer"
import Navbar from "./Navbar"

export default function Layout({ children }) {
    return (
        <div className="">

            <Head>
                <title>Manuel Lara</title>
                <link rel="icon" href="/laptop.ico" />
            </Head>

            <div className="min-h-screen flex flex-col">
                <Navbar />

                <main className="flex-grow">
                    {children}
                </main>

                <Footer />
            </div>

        </div>
    )
}
