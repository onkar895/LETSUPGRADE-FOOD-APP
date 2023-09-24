/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom"
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';


export const Profile = ({ account, partner }) => {

    const slicedName = (word) => {

        return word.slice(0, 6)
    }

    return (
        <>
            {
                account
                    ?
                    <Link style={{ display: "flex", alignItems: 'center', textDecoration: 'none', color: 'white', fontWeight: 'bold' }}>
                        {`${slicedName(account)}`}&nbsp;&nbsp;
                    </Link>
                    : partner ?
                        <Link style={{ display: "flex", alignItems: 'center', textDecoration: 'none', color: 'white', fontWeight: 'bold' }}>
                            {`${slicedName(partner)}`}&nbsp;&nbsp;
                            <SupervisedUserCircleIcon />
                        </Link> :
                        <Link style={{ display: "none" }}>
                            {`${slicedName(partner)}`}&nbsp;&nbsp;
                            <SupervisedUserCircleIcon />
                        </Link>
            }
        </>


    )

}

export default Profile