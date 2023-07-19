import React from 'react'

const Form = () => {
    return (
        <section className='max-w-lg mx-auto  p-4 rounded-lg bg-white bg-opacity-5 backdrop-blur-3xl'>
            <form className='flex flex-col gap-6'>
                <h1 className='text-primary my-7 text-3xl text-center'>Contact management</h1>
                <input type="text" placeholder="Name..." className="input input-bordered input-primary w-full  " />
                <input type="text" placeholder="Family" className="input input-bordered input-primary w-full  " />
                <input type="number" placeholder="Phone" className="input input-bordered input-primary w-full  " />
                <select className="select select-primary select-bordered w-full  ">
                    <option disabled selected>Who shot first?</option>
                    <option>Han Solo</option>
                    <option>Greedo</option>
                </select>
                <input type="email" placeholder="email" className="input input-bordered input-primary w-full  " />
                <button className="btn btn-primary my-4">Add</button>
            </form>
        </section>
    )
}

export default Form