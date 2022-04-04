import { useState, useEffect } from "react"

export default function AbsenseForm(props){
    const [todaysDate] = new Date().toISOString("en-US").split('T')[0];
    const [isCheckbox,setIsCheckbox] = useState(true);
    const [absenseReason,setAbsenseReason] = useState('online')
    const [absenseDate,setAbsenseDate] = useState(todaysDate)
    const [absenseStartTime,setAbsenseStartTime] = useState('')
    const [absenseEndTime,setAbsenseEndTime] = useState('')
    const [absenseComment,setAbsenseComment] = useState('')

    const handleSubmit= (e) => {
        e.preventDefault()
        const absenseRegistration = {absenseReason,absenseDate,absenseStartTime,absenseEndTime,absenseComment};
        fetch('http://localhost:3000/api/absense/updateAbsense', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(absenseRegistration)
        }).then(()=>{
            console.log('success')
            props.close();
        })
    }

    return(
        <form className="m-5" onSubmit={handleSubmit}>
            <label className="block text-gray-700 text-md font-bold mb-2" htmlFor="status">
                Vælg Fraværsårsag
            </label>
            <select value={absenseReason} onChange={(e) => setAbsenseReason(e.target.value)} className="shadow-md appearance-none border rounded w-50 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="status">
                <option value="online" selected >Jeg er Online</option>
                <option value="sick">Jeg er Syg</option>
            </select>
            
            <div className="flex">
            <span className="mr-6">
                <label className="block text-gray-700 text-md font-bold my-3" htmlFor="datePicker">
                    Vælg dato
                </label><span className="flex pt-1">
                <input value={absenseDate} onChange={(e) => setAbsenseDate(e.target.value)} type="date" name="absenseDate" id="datePicker" className="shadow-md appearance-none border rounded w-50 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                 <label htmlFor="allDay" className="pl-4 block text-gray-700 text-sm font-bold my-3">Hele dagen?</label>
            <input type="checkbox" id="allDay" className="h-6 w-6 rounded-md align-middle ml-3 mt-2" defaultChecked 
            onClick={() => {setIsCheckbox(!isCheckbox),!isCheckbox? setAbsenseStartTime('00:00'): setAbsenseStartTime('08:00'), !isCheckbox?setAbsenseEndTime('23:59'):setAbsenseEndTime('12:00')}}/>
                 </span>
            </span>
            </div>
           {!isCheckbox ?
           <div className="flex"> <span className="mr-2">
            <label className="block text-gray-700 text-md font-bold my-3" htmlFor="startTime">
                Vælg Start tid
            </label>
            <input value={absenseStartTime} onChange={(e)=>setAbsenseStartTime(e.target.value)} type="time" name="startTime" id="startTime" className="shadow-md appearance-none border rounded w-50 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </span>
            <span className="mx-2">
            <label className="block text-gray-700 text-md font-bold my-3" htmlFor="endTime">
                Vælg Slut tid
            </label>
            <input value={absenseEndTime} onChange={(e)=>setAbsenseEndTime(e.target.value)} type="time" name="endTime" id="endTime" className="mr-4 shadow-md appearance-none border rounded w-50 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
             </span></div> : null }
                 <label className="block text-gray-700 text-md font-bold mt-4 mb-2" htmlFor="comments">
                Evt. Bemærkninger
            </label>
            <textarea value={absenseComment} onChange={(e)=>setAbsenseComment(e.target.value)} id="comments" className="w-[400px] h-[150px] border-2 shadow"></textarea>
            <button type="submit" className="mt-4 block py-3 px-4 bg-ecreo text-white rounded-lg shadow hover:bg-ecreo/90">Registrer Fravær</button>
        </form>

    )
}