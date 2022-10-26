import { Container, Button } from "react-bootstrap"
import styles from './Navbar.module.scss';
import { useTheme } from 'next-themes'
import { MdOutlineLightMode, MdDarkMode, MdHome } from "react-icons/md";
import {useEffect} from 'react'
import {NavItem} from './Navdata'
import Link from 'next/link'



const MyNavigation =() =>{

    

    console.log(NavItem)
    const { theme, setTheme } = useTheme('light')

    const ToggleTheme =()=>{
        setTheme((curr)=>curr === 'light'?'dark':'light')
    }

    useEffect(()=>{
        ToggleTheme()
    }, [])

    return(
        <Container fluid className={styles.navCont} >
            <Container className={styles.headItem}>
                <div className={styles.logoIcon}>
                    <MdHome/>
                    <h6>InVentory App</h6></div>
                   <div onClick={ToggleTheme}>{theme === 'dark'? <MdOutlineLightMode/>: <MdDarkMode/>}</div>
                <div>
             </div>
            </Container>
            <Container className={styles.sideItem}>
                {NavItem.map((item, index)=>(
                    <Link href={item.url} key={index}>
                        <div className={styles.item}>
                       <span className={styles.icologo}> {item.logo} </span>{item.title}
                        </div>
                    </Link>
                ))}
            </Container>
        </Container>
    )
}

export default MyNavigation

