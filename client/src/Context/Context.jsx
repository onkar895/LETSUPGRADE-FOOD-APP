import React, { createContext, useContext, useState } from "react";


const AppContext = React.createContext();

const AppProvider = ({children}) => {

    
    
    const[account,setAccount] = useState(null)
    
    const [partner,setPartner] = useState(null)
    const [total,setTotal] = useState(0)
    const[role,setRole]= useState();

    return(

        
        <AppContext.Provider value={{account, setAccount, partner,setPartner,total, setTotal,role,setRole}}>{children}</AppContext.Provider>


    )
}
       export const useGlobalContext = () => {
       return useContext(AppContext)}

       export { AppContext, AppProvider }


