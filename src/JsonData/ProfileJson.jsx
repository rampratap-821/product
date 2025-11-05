import { title } from "framer-motion/client";
import { CgProfile } from "react-icons/cg";
import { GiRotaryPhone } from "react-icons/gi";
import { MdAttachEmail } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { FaMapMarkerAlt } from "react-icons/fa";
 

export const ProfileData = [
    {
        id:1,
        title:"FullName",
        name:"rampratap", 
        icon:< CgProfile></CgProfile>      
    },
     {
        id:2,
        title:"Phone Number",
        name:"9520791411", 
        icon:<GiRotaryPhone></GiRotaryPhone>      
    },
      {
        id:3,
        title:"Delivery Address",
        name:"Bahadurpur Rajpoot",
        icon:<FaMapMarkerAlt></FaMapMarkerAlt>

    },
      {
        id:4,
        title:"Email Address",
        name:"ram8218253@gmail.com", 
        icon:< MdAttachEmail></MdAttachEmail>      
    },
      {
        id:5,
        title:"Member Since",
        name:"January", 
        icon:<SlCalender></SlCalender>      
    },

]