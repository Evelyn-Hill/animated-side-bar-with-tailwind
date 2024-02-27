import SideBar from "../../componenets/SideBar";
  import { BsPlus, BsFillLightningFill, BsGearFill } from 'react-icons/bs'
import { FaFire, FaPoo } from 'react-icons/fa'

const SideBarIcon = ( { icon, text ='tooltip' } ) => {
    return (
        <div className="sidebar-icon group">
            { icon }

            <span className="sidebar-tooltip group-hover:scale-100"> {text} </span>
        </div>
    );
}



export default function Home() {
  return (
  <div className="flex">
        <div className="fixed top-0 left-0 h-screen w-32 m-0 flex-col
        bg-gray-900 text-white shadow-lg">

            <SideBarIcon icon={<FaFire size="56"/>} />
            <SideBarIcon icon={<BsPlus size="64"/>} />
            <SideBarIcon icon={<BsFillLightningFill size="40"/>} />
            <SideBarIcon icon={<FaPoo size="40"/>} />           
        </div>
 </div>
);


}


