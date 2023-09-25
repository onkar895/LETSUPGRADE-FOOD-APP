/* eslint-disable no-unused-vars */
import styled from '@emotion/styled'
import { Box } from '@mui/material'

export const Navbar = styled(Box)(({theme}) => ({
  width: '100%',

  display: 'flex',
  overflow: 'hidden',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: 'black',
  height: '4rem',

  '& div': {
    display: 'flex',
    justifyContent: 'space-between',
    cursor: 'pointer'

  },

  '& div>a': {
    textDecoration: 'none',
    display: 'flex',
    flexDirection: 'row',
    color: 'black'
  }

}))
export const Left = styled(Box)(({theme}) => ({
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0.4rem 0.3rem',
  '& div': {
    padding: '1rem 1rem 0.6rem 0.3rem',
    '& p': {
      fontWeight: 600
    }
  }

}))
export const Right = styled(Box)(({theme}) => ({
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0.4rem 0.3rem',
  '& div': {
    padding: '0.7rem 0.7rem 0.3rem 0.8rem'

  }

}))
export const LogoContainer = styled(Box)(({theme}) => ({
  width: '5rem',
  height: '100%',

  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'

}))
export const CartBody = styled(Box)(({theme}) => ({
  width: '100%',

  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'

}))
export const Main = styled(Box)(({theme}) => ({
  width: '100%',

  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'column',
  backgroundColor: '#f1f1f6'

}))
export const TopHalf = styled(Box)(({theme}) => ({
  width: '100%',
  height: '100%',
  padding: '1rem 2rem',
  '& div': {
    height: '100%',
    justifyContent: 'center',
    width: '100%',
    padding: '0.5rem'
  },
  '& div > img': {
    width: '25rem'

  }

}))
export const BottomHalf = styled(Box)(({theme}) => ({

}))
export const ButtonContainer = styled(Box)(({theme}) => ({

}))
export const CartContainer = styled(Box)(({theme}) => ({
  width: '100%',
  height: '100%',
  display: 'flex',
  gap: '1rem',
  flexDirection: 'column',
  justifyContent: 'space-between',
  padding: '1rem 3rem',
  alignItems: 'center',
  whiteSpace: 'nowrap',
  '& div': {
    padding: '0.5rem 0.8rem'
  }

}))
export const LeftSide = styled(Box)(({theme}) => ({
  width: '44vw',
  display: 'flex',
  flexDirection: 'row',
  textAlign: 'left',
  alignItems: 'center',
  backgroundColor: 'white',
  padding: '1rem 1rem',
  marginTop: '0.5rem',
  border: '1px solid orange',
  borderRadius: '5px',

  '& >div': {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column'

  },
  '& div>button': {
    marginTop: '0.5rem'

  }

}))
export const SummaryContainer = styled(Box)(({theme}) => ({
  backgroundColor: 'white',
  width: '44vw',
  alignItems: 'center',
  justifyContent: 'center',
  border: '1px solid orange',
  borderRadius: '5px',
  marginLeft: '12px',
  textAlign: 'left',

  '& div': {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  }

}))

export const NameContainer = styled(Box)(({theme}) => ({
  '& div p': {
    fontSize: '13px',
    color: '#93959f'

  }

}))
export const ImageContainer = styled(Box)(({theme}) => ({
  width: '10rem',
  overflow: 'hidden',

  '& img': {
    borderRadius: '8px',
    width: '100%',
    objectFit: 'cover'
  }
}))

export const TotalContainer = styled(Box)(({theme}) => ({
  display: 'flex',
  flexDirection: 'column'
}))
