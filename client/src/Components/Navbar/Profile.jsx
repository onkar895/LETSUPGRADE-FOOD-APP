import { MenuItem } from "@mui/material"
import { Link } from "react-router-dom"
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';



export const Profile = ({account, setAccount, partner,setPartner}) => {

    const slicedName= (word)=> {

        return word.slice(0,6)
    }


    return(
        <>
          
          {
             account ? <Link style={{display:"flex", alignItems:'center',textDecoration:'none',color:'black'}}>{`${slicedName(account)}`}&nbsp;&nbsp;</Link>
             : partner? <Link  style={{display:"flex", alignItems:'center',textDecoration:'none',color:'black'}}>{`${slicedName(partner)}`}&nbsp;&nbsp;<SupervisorAccountIcon/></Link> :
             <Link  style={{display:"none"}}>{`${slicedName(partner)}`}&nbsp;&nbsp;<SupervisorAccountIcon/></Link>  
        }

        </>


    )

}

export default Profile