// app/fonts.ts
import { Rubik, Itim } from 'next/font/google'

const rubik = Rubik({
    subsets: ['latin'],
    variable: '--font-rubik',
})

const itim = Itim({
    subsets: ['latin'],
    variable: '--font-itim',
    weight: '400', // Add the weight property with the value '400'
})

export const fonts = {
    rubik,
    itim,
}