import Link from 'next/link'
import React from 'react'

function NotFound() {
    return (
        <section className='flex h-screen justify-center items-center'>
            <div>
                <h1 className='text-4xl font-bold'>NotFound</h1>
                <Link className='text-slate-400 text-2xl mt-5' href="/">Volver al inicio</Link>
            </div>
        </section>
    )
}

export default NotFound
