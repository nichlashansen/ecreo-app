import { useEffect, useState } from "react";
import reactDom from "react-dom";

export default function AbsenseModel({show, onClose}){
    const [isBrowser, setIsBrowser] = useState(false);

    useEffect(() => {
        setIsBrowser(true);
    },[]);

    const handleClose = () =>{
        //if using <a> tag in modal, remember to prevent default
        onClose();
    }

    const AbsenseModelContent = show ? (
    //content for the model, somewhere to close if
    <div>Test</div>
    ): null;


    if(isBrowser){
        return reactDom.createPortal(
            AbsenseModelContent,
            document.getElementById('absenseModal')
        )
    }
}