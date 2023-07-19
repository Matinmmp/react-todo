import React from 'react'
import Contact from './Contact'

const ContactList = () => {
    return (
        <section className='w-full h-full'>
            <div className='grid justify-center gap-4 xl:grid-cols-2 w-full h-full'>
                <div className='overflow-y-auto w-full h-full'>
                    <Contact />
                </div>
            </div>
        </section>
    )
}

export default ContactList