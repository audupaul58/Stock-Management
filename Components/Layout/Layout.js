import React, { useState, createContext} from 'react'
import styles from './Layout.module.scss';
import MyNavigation from './Navbar/Navbar';
import Sidebar from './Sideber'
import { GiHamburgerMenu, GiCancel } from "react-icons/gi";


const ThemeContext = createContext(null)

const Layout = ({children}) => {

  const [show, setShow] = useState(true)
  
  const [theme, setTheme] = useState(true)

  const toggleTheme =()=>{
    setTheme(!theme)
  }

  const handleSideShow = ()=>{
    setShow(!show)
  }

  return (
   <section className={styles.contsec}>
    <ThemeContext.Provider value={toggleTheme}>
   
        <div className={styles.heading}>
          <div onClick={handleSideShow} className={styles.hambuger}>{show ? <GiCancel/>: <GiHamburgerMenu/>}</div>
          <h6>Haly Slimaty</h6>

        </div>
   
    <div className={styles.comSec} >
      <sidebar>
        {show && <MyNavigation/>}
      </sidebar>
    <main>
        {children}
    </main>
    </div>
   
    </ThemeContext.Provider>
   </section>
  )
}

export default Layout