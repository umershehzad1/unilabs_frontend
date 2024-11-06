import { Image   } from "react-bootstrap";
import { IoSettingsOutline } from "react-icons/io5";
import { HiOutlineGlobeAlt } from "react-icons/hi2";

export const SidebarMenus = [
    {
        
        icon: <Image src="/dashboard/home.png" style={{width:"25px"}} fluid />,
        path: "/dashboard",
        label: "Dashboard",
    },
    {
        
        icon: <Image src="/dashboard/shoppingCart.png" style={{width:"27px"}} fluid />,
        path: "/dashboard/buytoken",
        label: "Buy Token",
    },
    {
        
        icon: <Image src="/dashboard/transaction.png" style={{width:"25px"}} fluid />,
        path: "/dashboard/transactions",
        label: "Transactions",
    },
    {
        
        icon: <Image src="/dashboard/rupeesCoin.png" style={{width:"27px"}} fluid />,
        path: "/dashboard/myTokens",
        label: "My Tokens",
    },
    {
        
        icon: <IoSettingsOutline color="white" size={27} />,
        path: "/dashboard/profile",
        label: "Profile",
    },
    {
        
        icon: <HiOutlineGlobeAlt color="white" size={27} />,
        path: "/",
        label: "Main Site",
    },
   
];
