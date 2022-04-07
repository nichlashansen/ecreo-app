import Navbar from "../Components/Navbar/Navbar";
import EmpployeeCard from '../Components/EmployeeCard';
import benKim from '../public/images/ben_parker.webp'
import { useEffect, useState } from "react";

export default () => {    
    const [users, setUsers] = useState([]);
    const getUsers = () =>{
        const users = fetch('/api/users')
        .then(res =>res.json())
        .then(data=>setUsers(data))
    };

useEffect(()=>{
    getUsers();
},[])
    return ( 
        <>
        <Navbar />
        <main className="md:ml-[250px]">
        {
                users.map((user)=> (
                <EmpployeeCard imgPath={benKim} name={user.name} subTitle={user.email} availabillity=''/>
                )
            )
        }

        </main>
        </>
    );
}