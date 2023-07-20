import {useState} from 'react';
import { FaPen, FaTrash } from "react-icons/fa6";
import RemoveModal from './RemoveModal';
import { useSelector } from 'react-redux';
import { editActions } from '../store/edit';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

interface Props{
    fetchData:()=>void,
    id:string,
    name: string,
    family: string,
    email: string,
    phone: string,
    relative: string,
}

const Contact = (props:Props) => {
    const [showDeleteModal,setShowDeleteModal] = useState(false);
    const notify = () => toast("Deleted");
  
    const dispatch = useDispatch()

    const handleDelete=()=>{
        setShowDeleteModal(false);
        let contactList : Array<Props>= JSON.parse(String(localStorage.getItem('contactList')));
        contactList = contactList.filter((item:Props)=> item.id !== props.id);
        localStorage.setItem("contactList",JSON.stringify(contactList));
        props.fetchData();
        notify();
    }

    const handleEdit =()=>{
        console.log(props.id);
        
        dispatch(editActions.getId(props.id) );
    }

    return (
        <section className='min-w-[20rem] max-w-[30rem] xl:min-w-full h-40 rounded-lg p-4 bg-info-content'>
            <div className='flex flex-col gap-2 w-full'>
                <div className='flex justify-between items-center w-full '>
                    <p className='text-lg'>{props.name}</p>
                    <div className='flex gap-2'>
                        <FaPen onClick={handleEdit} className='cursor-pointer' />
                        <FaTrash onClick={()=>setShowDeleteModal(true)} className='cursor-pointer' />
                        {showDeleteModal && <RemoveModal {...{handleConfirm:handleDelete,closeModal:setShowDeleteModal,name:props.name}}/>}
                    </div>
                </div>
                <p>{props.family}</p>
                <p>{props.relative}</p>
                <p>{props.email}</p>
            </div>
        </section>
    )
}

export default Contact