import { useEffect, useState } from "react";
import reactDom from "react-dom";
import { XIcon } from "@heroicons/react/solid";
import AbsenseForm from "./Forms/AbsenseForm";

export default function AbsenseModal({show, onClose}){
    const [isBrowser, setIsBrowser] = useState(false);

    useEffect(() => {
        setIsBrowser(true);
    },[]);

    const handleClose = () =>{
        onClose();
    }

    const AbsenseModelContent = show ? (
    //content for the model, somewhere to close if
    <div className="absolute top-0 left-0 w-screen h-screen justify-center items-center align-middle bg-slate-700/60 flex" onClick={() => handleClose()}>
        <div className="bg-white w-[600px] h-[700px] rounded-xl p-4" onClick={(e) => e.stopPropagation()}>
            <XIcon onClick={() => handleClose()} className="w-6 mt-2 ml-auto cursor-pointer"/>
            <h1 className="text-4xl text-center mt-3">Fraværs Registrering</h1>
            <AbsenseForm close={()=>handleClose()}/>
        </div>

    </div>
    ): null;


    if(isBrowser){
        return reactDom.createPortal(
            AbsenseModelContent,
            document.getElementById('absenseModal')
        )
    } else { return null;}
}