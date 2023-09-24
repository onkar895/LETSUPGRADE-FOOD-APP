/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react"
import Navbar from "../Components/Header/Navbar"
import HomeImage from "../Components/HomePage/HomeImage"
import { Main } from "./styles"
import Footer from "../Components/Footer/Footer"
import { verifyUser } from "../Redux/Actions"
import { useNavigate } from "react-router-dom"
import { useCookies } from "react-cookie"
import RestoCard from "../Components/HomePage/RestoCard"
import { toast } from 'react-toastify'


export const Home = () => {

    const navigate = useNavigate()
    const [cookies, setCookies] = useCookies(['access_token']);

    useEffect(() => {
        const verify = async () => {
            const response = await verifyUser()
            if (response) {
                if (!response.data.message === 'User Verified') {
                    navigate('/')
                }
                else {
                    console.log(response.data.message);
                }
            }
            else {
                toast.error('error while verifying the tokend')
            }
        }

        verify()
    }, [cookies])


    return (

        <Main style={{ backgroundColor: 'rgb(240, 240, 245)' }}>

            <Navbar />
            <HomeImage />
            <RestoCard />
            <Footer />

        </Main>


    )

}


export default Home