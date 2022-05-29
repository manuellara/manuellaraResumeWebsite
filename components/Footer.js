import React from 'react'

export default function Footer() {
    return (
        <footer className='border border-t-black mt-10 p-10'>
            <div className='flex justify-center'>
                Manuel Lara &reg; {new Date().getFullYear()}
            </div>
            <div className='flex justify-center'>
                Next.js <b>·</b> DigitalOcean
            </div>
            <div className='flex justify-center py-2'>
                <a target="_blank" rel="noreferrer" href="https://www.buymeacoffee.com/manuellara">
                    <img className="rounded-full border-2 border-black" src={process.env.NEXT_PUBLIC_BMAC} width={120} height={72} alt="Buy Me A Coffee" />
                </a>
            </div>
        </footer>
    )
}
