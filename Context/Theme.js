import { createContext, useState } from "react";

const ToggleTheme = createContext(null)

export const ToggleThemes = ({children})=>{

    const [theme, setTheme] = useState(true)

    
return(
    <ToggleTheme.Provider value={theme}>
                {children}
    </ToggleTheme.Provider>

)
}


export default ToggleThemes