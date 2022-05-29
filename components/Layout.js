import Head from 'next/head'
import Footer from './Footer'

export default function Layout({ children }) {
    return (
        <div id="body">

            <Head>
                <title>
                    Manuel Lara
                </title>
                <link rel="shortcut icon" href="/laptop.ico" />
            </Head>

            <main className='container mx-auto max-w-xl py-8 px-5 min-h-screen'>
                {children}
            </main>

            <Footer />

        </div>
    )
}
