import Head from 'next/head'

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

            <footer>
                <div>
                    Manuel Lara &reg; {new Date().getFullYear()}
                </div>
                <div>
                    Next.js <b>·</b> DigitalOcean
                </div>
                <div className='flex justify-center py-2'>
                    <a target="_blank" rel="noreferrer" href="https://www.buymeacoffee.com/manuellara">
                        <img className="rounded-full" src={process.env.NEXT_PUBLIC_BMAC} width={120} height={72} alt="Buy Me A Coffee" />
                    </a>
                </div>
            </footer>

        </div>
    )
}
