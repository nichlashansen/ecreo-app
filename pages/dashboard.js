import Navbar from "../Components/Navbar/Navbar";
import EmpployeeCard from '../Components/EmployeeCard';
import benKim from '../public/images/ben_parker.webp'
import marieMari from '../public/images/Marie_mari.webp'

export default () => {    
    return ( 
        <>
        <Navbar />
        <main className="md:ml-[250px]">
            <EmpployeeCard imgPath={benKim} name="Ben Kim" subTitle="superman@ecreo.dk" availabillity='0'/>
            <EmpployeeCard imgPath={marieMari} name="Marie Mari" subTitle="altidimøde@ecreo.dk"/>

        </main>
        </>
    );
}