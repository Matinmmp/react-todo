import React from 'react';
import Form from './components/Form';
import ContactList from './components/ContactList';


function App() {
    return (
        <div className="w-full h-screen"  >
            <div className='w-full grid lg:grid-cols-2 gap-4 p-8 py-20'>
                <div >
                    <Form />
                </div>
                <div >
                    <ContactList/>
                </div>
            </div>
        </div>
    );
}

export default App;
