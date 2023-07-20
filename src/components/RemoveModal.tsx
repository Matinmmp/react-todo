import React from 'react'

interface Props{
    handleConfirm:()=>void;
    closeModal:(flag:boolean)=>void;
    name:string
}

function RemoveModal(props:Props) {

    return (
        <div className=" absolute top-[30%] min-w-[30rem] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <div className="modal-box">
                <h3 className="font-bold text-red-600 text-lg">Notice</h3>
                <p className="py-4">do you want delete {props.name} ?</p>
                <div className="modal-action flex justify-between">

                    <button onClick={props.handleConfirm} className="btn btn-error">Yes</button>

                    <button onClick={() => props.closeModal(false)} className="btn">No</button>
                </div>
            </div>
        </div >
    )
}

export default RemoveModal
