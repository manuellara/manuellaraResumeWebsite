import React from 'react'

export default function Footer() {
    return (
        <footer className='border border-t-black mt-10 p-10'>

            <div className='flex justify-center py-2'>
                Manuel Lara &reg; {new Date().getFullYear()}
            </div>

            <div className='flex justify-center py-2 space-x-2 items-center'>
                <img src={process.env.NEXT_PUBLIC_NEXTJS} width={55} alt="Next.js logo" />
                <img src={process.env.NEXT_PUBLIC_TAILWIND} width={30} alt="TailwindCSS logo" />
                <img src={process.env.NEXT_PUBLIC_SUPABASE} width={30} alt="Supabase logo" />
            </div>

            {/* <div className='flex justify-center py-2'>
        <a target="_blank" rel="noreferrer" href="">
          <img src={process.env.NEXT_PUBLIC_DISCORD} width={120} alt="Discord logo" />
        </a>
      </div> */}

            <div className='flex justify-center py-2'>
                <a target="_blank" rel="noreferrer" href="https://www.buymeacoffee.com/manuellara">
                    <img src={process.env.NEXT_PUBLIC_BMAC} width={120} alt="Buy Me A Coffee" />
                </a>
            </div>

            <div className='flex justify-center py-2'>
                <a href="https://www.digitalocean.com/?refcode=530bd43c5b3e&utm_campaign=Referral_Invite&utm_medium=Referral_Program&utm_source=badge">
                    <img src="https://web-platforms.sfo2.digitaloceanspaces.com/WWW/Badge%202.svg" alt="DigitalOcean Referral Badge" width={150} />
                </a>
            </div>

        </footer>
    )
}
