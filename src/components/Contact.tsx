import React from 'react';
import { FaPen, FaTrash } from "react-icons/fa6";

const Contact = () => {
    return (
        <section className='min-w-[20rem] xl:min-w-full h-40 rounded-lg p-4 bg-info-content'>
            <div className='flex flex-col gap-2 w-full'>
                <div className='flex justify-between items-center w-full '>
                    <p className='text-lg'>Matin</p>
                    <div className='flex gap-2'>
                        <FaPen className='cursor-pointer' />
                        <FaTrash className='cursor-pointer' />
                    </div>
                </div>
                <p>Famliy</p>
                <p>0918 310 2170</p>
                <p>matinmmp@gmail.com</p>
            </div>
        </section>
    )
}

export default Contact