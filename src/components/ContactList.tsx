import Contact from './Contact';
import { useSelector } from 'react-redux';
import {useState,useEffect} from 'react';
interface Props {
    fetchData: () => void;
    list:any
}

const initialFormState: {
    id: string,
    name: string,
    family: string,
    email: string,
    phone: string,
    relative: string,
} = {
    id: '',
    name: "",
    family: "",
    email: "",
    phone: "",
    relative: ""
}

const ContactList = (props:Props) => {
    
    const [list,setList] = useState([]);
    useEffect(()=>{
       setList(props.list)
    },[props])
    
    return (
        <section className='w-full h-[50rem] '>
            <div className=' w-full  overflow-y-auto '>
                <div className='grid justify-center overflow-y-auto  gap-4 xl:grid-cols-2 w-full '>
                    {list.map((item: any,index) => <Contact  key={index}  {...{ ...item,fetchData:props.fetchData }} />)}
                </div>
            </div>

        </section>
    )
}

export default ContactList