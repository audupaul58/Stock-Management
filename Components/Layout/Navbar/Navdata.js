import { MdInventory, MdDarkMode, MdHome, MdOutlineProductionQuantityLimits, MdSettings, MdCategory } from "react-icons/md";

export const NavItem =( [
    {
        id : 1,
        logo : <MdHome/>,
        title: "Home Page",
        url: '/'
    
    },

    {
        id : 2,
        logo : <MdCategory/>,
        title: "Categories",
        url: '/categories'
    
    },

    {
        id : 3,
        logo : <MdInventory/>,
        title: "InVentory",
        url: '/InVentory'
    
    },

    {
        id : 4,
        logo : <MdOutlineProductionQuantityLimits/>,
        title: "Products",
        url: '/products'
    
    },

    {
        id : 5,
        logo : <MdSettings/>,
        title: "Settings",
        url: '/settings'
    
    }
])