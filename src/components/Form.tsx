import React from 'react';
import { useReducer, useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { editActions } from '../store/edit';
import { useDispatch } from 'react-redux';

interface Props {
    fetchData: () => void;
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

const reletiveList: Array<string> = ['friend', 'family', 'teammate', 'enemy'];

const formReducer = (state: typeof initialFormState, action: any) => {
    if (action.type === 'change') {
        return { ...state, [action.name]: action.value }
    }
    if (action.type === 'id') {
        console.log(action.id);

        return { ...state, id: action.id }
    }
    if (action.type === 'all') {
        return action.state;
    }

    if (action.type === 'clean') return {
        id: '',
        name: "",
        family: "",
        email: "",
        phone: "",
        relative: ""
    }
    return state
}

const Form = (props: Props) => {
    const editId = useSelector((state: any) => state.edit).id;
    const dispatchEdit = useDispatch();
    const [isEdit, setIsEdit] = useState(false);
    const [formState, dispatch] = useReducer(formReducer, initialFormState);
    const [isValid, setIsValid] = useState(false);
    const formValidation: any = {};
    const notify = () => toast("Added");

    const handleChange = (e: any) => {
        dispatch({ type: 'change', name: e.target.name, value: e.target.value });
        setIsValid(validationForm())
    }

    const validationForm = () => {
        const textReg = new RegExp('^[a-zA-Z]{2,}$');
        const numberReg = new RegExp("^(\\+98|0)?9\\d{9}$");
        const emailReg = new RegExp('^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$');

        if (!textReg.test(formState.name)) {
            formValidation.name = 'name should be more than two words and should use A Z';
            return false;
        }
        if (!textReg.test(formState.family)) {
            formValidation.name = 'family should be more than two words and should use A Z';
            return false;
        }
        if (!numberReg.test(formState.phone)) {
            formValidation.phone = 'phoen number should start with 09 and should be 11 digits';
            return false;
        }
        if (!emailReg.test(formState.email)) {
            formValidation.email = "email is not in corect format";
            return false;
        }
        if (Object.keys(formValidation).length === 0) return true;
        return true;
    }

    const postData = () => {
        const contactList: Array<typeof initialFormState> = JSON.parse(String(localStorage.getItem('contactList')));
        formState.id = crypto.randomUUID();
        contactList.push(formState);
        localStorage.setItem('contactList', JSON.stringify(contactList))
    }

    const editData = () => {
        const contactList = JSON.parse(String(localStorage.getItem('contactList')));
        const contactPos = contactList.findIndex((item: typeof initialFormState) => item.id === editId);

        contactList[contactPos].name = formState.name;
        contactList[contactPos].family = formState.family;
        contactList[contactPos].id = formState.id;
        contactList[contactPos].email = formState.email;
        contactList[contactPos].phone = formState.phone;
        contactList[contactPos].relative = formState.relative;

        localStorage.setItem('contactList', JSON.stringify(contactList));
        dispatchEdit(editActions.getId(''))
    }

    useEffect(() => {
        setIsValid(validationForm());
    }, [validationForm])


    useEffect(() => {
        const contactList: Array<typeof initialFormState> = JSON.parse(String(localStorage.getItem('contactList')));
        const contact = contactList.find((item: typeof initialFormState) => item.id === editId);
        if (editId) {
            setIsEdit(true);
            dispatch({ type: 'all', state: contact })
        }
    }, [editId])

    const handleSubmit = (e: any) => {
        dispatch({ type: 'clean' });
        notify();
        e.preventDefault();
        if (editId) {
            editData();
            props.fetchData();
            setIsEdit(false);
            return;
        }
        postData();
        props.fetchData();
    }

    return (
        <section className='max-w-lg mx-auto  p-4 rounded-lg bg-black bg-opacity-10 backdrop-blur-3xl'>
            <form className='flex flex-col gap-6' onSubmit={handleSubmit}>
                <h1 className='text-primary my-7 text-3xl text-center'>Contact management</h1>

                <input name='name' value={formState.name} onChange={handleChange}
                    type="text" placeholder="Name..." className="input input-bordered input-primary w-full  " />

                <input name='family' type="text" value={formState.family} onChange={handleChange}
                    placeholder="Family" className="input input-bordered input-primary w-full  " />

                <input name='phone' type="text" value={formState.phone} onChange={handleChange}
                    placeholder="Phone" className="input input-bordered input-primary w-full  " />

                <select name='relative' value={formState.relative} onChange={handleChange}
                    className="select select-primary select-bordered w-full  ">
                    {reletiveList.map((item, index) => <option value={item} key={index}>{item}</option>)}
                </select>

                <input name='email' type="email" value={formState.email} onChange={handleChange}
                    placeholder="email" className="input input-bordered input-primary w-full  " />

                <button className={`btn btn-primary my-4 ${!isValid && 'btn-disabled'}`}>{isEdit ? 'Edit' : "Add"}</button>
            </form>
        </section>
    )
}

export default Form