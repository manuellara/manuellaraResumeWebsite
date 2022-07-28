import { useTheme } from 'next-themes'
import { Moon, Sun } from 'lucide-react'
import Link from 'next/link'
import Button from './Button'
import { useState, useEffect } from 'react'

export default function Navbar() {

    const { systemTheme, theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    function renderThemeChanger() {

        if (!mounted) return null

        const currentTheme = theme === 'system' ? systemTheme : theme

        if (currentTheme === 'dark') {
            return (
                <Button
                    className='bg-gray-200 dark:bg-gray-600'
                    onClick={() => setTheme('light')}>
                    <Sun />
                </Button>
            )
        }

        return (
            <Button
                className='bg-gray-200'
                onClick={() => setTheme('dark')}>
                <Moon />
            </Button>
        )
    }

    return (
        <header className='h-16 flex items-center justify-between'>
            <ul className='flex gap-4'>

                <Link href="/">
                    <a className='font-semibold text-gray-400 hover:text-gray-500'>
                        Home
                    </a>
                </Link>


                <a target="_blank" href="https://mannylara.medium.com/" className='font-semibold text-gray-400 hover:text-gray-500' rel="noopener noreferrer">
                    Blog
                </a>

            </ul>

            <div className='flex gap-4 items-center'>
                <a target="_blank" href='https://buymeacoffee.com/manuellara' rel="noopener noreferrer">
                    <img className='h-10 hover:ring-2 hover:ring-gray-300 hover:rounded-lg' src='https://upcdn.io/FW25akz6LiLRaZC5uR1Sj1z' />
                </a>

                {renderThemeChanger()}
            </div>


        </header>
    )
}
