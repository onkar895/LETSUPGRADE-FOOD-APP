/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react"
import { useGlobalContext } from "../../Context/Context"
import { SummaryContainer } from "./styles"
import { useState } from "react"
import { Box, Typography } from "@mui/material"


export const Total = ({ data }) => {
    const { total, setTotal } = useGlobalContext()
    const [price, setPrice] = useState(0)
    const [discount, setDiscount] = useState(0)

    useEffect(() => {
        totalamount()
    }, [data, total])


    const totalamount = () => {
        let price = 0;
        let discount = 0;

        data?.cart?.map((item) => {

            return (
                discount += (item?.productPrice * 25) / 100,
                price += item?.productPrice
            )
        })
        setPrice(price)
        setDiscount(discount)
        setTotal(price - discount + 29)

    }



    return (

        <SummaryContainer>
            <Box><Typography variant="h5" sx={{ fontFamily: "Trebuchet MS", fontWeight: 'bold' }}>Order Summary</Typography></Box>
            <Box><Typography sx={{ fontFamily: "Trebuchet MS", }}>Price:&nbsp;&nbsp;</Typography><div><Typography sx={{ fontFamily: "Trebuchet MS", fontWeight: 'bold' }}>₹ {price}</Typography></div></Box>
            <Box><Typography sx={{ fontFamily: "Trebuchet MS", }}>Delivery Charges:&nbsp;&nbsp;</Typography ><div> <Typography sx={{ fontFamily: "Trebuchet MS", fontWeight: 'bold' }}>+ ₹ {40}</Typography></div></Box>
            <Box style={{ fontFamily: "Trebuchet MS", }}><Typography >Discount:&nbsp;&nbsp;</Typography><div><Typography sx={{ fontFamily: "Trebuchet MS", fontWeight: 'bold' }}>- ₹ {discount}</Typography></div></Box>
            <hr />
            <Box><Typography sx={{ fontWeight: 'bold', fontFamily: "Trebuchet MS" }}>Total Amount:&nbsp;&nbsp;</Typography><div><Typography sx={{ fontFamily: "Trebuchet MS", fontWeight: 'bold' }}>₹ {total}</Typography></div></Box>
        </SummaryContainer>

    )

}

export default Total