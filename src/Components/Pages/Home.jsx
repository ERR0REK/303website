import React from 'react'
import Navbar from '../Navbar/Navbar'
import Hero from '../Hero/Hero'

// Komponent Home nie przyjmuje już ŻADNYCH propsów!
export function Home() {
    return (
        <div>
            {/* Navbar i Hero same użyją hooka useTranslation, żeby pobrać język */}
            <Navbar />
            <Hero />
        </div>
    )
}