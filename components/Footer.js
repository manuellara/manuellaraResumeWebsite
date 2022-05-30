import React from 'react'

export default function Footer() {
    return (
        <footer className='border border-t-black mt-10 p-10'>
            <div className='flex justify-center py-2'>
                Manuel Lara &reg; {new Date().getFullYear()}
            </div>
            <div className='flex justify-center py-2'>
                Built with Next.js
            </div>
            <div className='flex justify-center py-2'>
                <a target="_blank" rel="noreferrer" href="https://www.buymeacoffee.com/manuellara">
                    <img className="rounded-full" src={process.env.NEXT_PUBLIC_BMAC} width={120} height={72} alt="Buy Me A Coffee" />
                </a>
            </div>
            <div className='flex justify-center py-2'>
                <a href="https://www.digitalocean.com/?refcode=530bd43c5b3e&utm_campaign=Referral_Invite&utm_medium=Referral_Program&utm_source=badge">
                    <img src="https://web-platforms.sfo2.digitaloceanspaces.com/WWW/Badge%202.svg" alt="DigitalOcean Referral Badge"  width={150}/>
                </a>
            </div>
        </footer>
    )
}
