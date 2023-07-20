import { useReducer, useState, useEffect } from 'react';
import Form from './components/Form';
import ContactList from './components/ContactList';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { contactListActions } from './store/contact';
import { dataActions } from './store/data';
import { useDispatch } from 'react-redux';


function App() {

    const dispatch = useDispatch();
    const [list,setList] = useState([]);

    const fetchData = () => {
        let contactList: string | null = localStorage.getItem('contactList');
        if (!contactList?.length) {
            localStorage.setItem('contactList', JSON.stringify([]));
            return
        }
        const list = JSON.parse(String(contactList));
        dispatch(contactListActions.getList(list));
        console.log(list);
        setList(list);
    }

    useEffect(() => {
       fetchData()
    }, [])

    return (
        <div className="w-full h-screen"  >
            <div className='w-full grid lg:grid-cols-2 gap-4 p-8 py-20'>
                <div >
                    <Form {...{ fetchData: fetchData }} />
                </div>
                <div >
                    <ContactList {...{ fetchData: fetchData,list:list }} />
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}

export default App;
