import React from 'react'
import styled from 'styled-components'

const Footer = () => {
    return (
        <Container>
            <Logos>
                <Logo>
                    <img src="images/logo.svg"></img>
                </Logo>
                <NavBar>
                    <a href='#'><span>About</span></a>
                    <a href='#'><span>Careers</span></a>
                    <a href='#'><span>Events</span></a>
                    <a href='#'><span>Products</span></a>
                    <a href='#'><span>Support</span></a>
                </NavBar>

            </Logos>
            <BottomNavBar>
                <Social>
                    <img src="images/icon-facebook.svg"></img>
                    <img src="images/icon-twitter.svg"></img>
                    <img src="images/icon-pinterest.svg"></img>
                    <img src="images/icon-instagram.svg"></img>
                </Social>
                <RightsReserved>2021 Loopstudios. All rights reserved.</RightsReserved>
            </BottomNavBar>
        </Container>
    )
}

export default Footer


const Container = styled.div`
    background-color:var(--black_color);
    color:var(--white_color);
    padding:30px 100px;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    @media (max-width:1000px){
        display:flex;
        flex-direction:column;
        text-align:center;
    }

`

const Logos = styled.div`
    padding:8px 0px;
`
const Logo = styled.div`
    & img{
        width:150px;
    }
`
const Social = styled.div`
    &>img {
        padding:0px 0px 0px 15px;
    }`
const BottomNavBar = styled.div`
    flex-direction:row;
    padding:8px 0px;
    font-family:'Alata',sans-serif;
`
const NavBar = styled.div`
    margin-top:20px ;
    display:flex;
    flex-direction:row;
    & a{
        color:var(--white_color);
        text-decoration:none;
        margin-right:20px;
        font-family:'Alata',sans-serif;
        
    }
    @media (max-width:1000px){
        display:flex;
        flex-direction:column;
        & a{
            margin-bottom:20px;
        }
    }
`
const RightsReserved = styled.p`
    color:var(--dark_gray);
    font-size:18px;
    margin-top:20px ;
    font-family:'Alata',sans-serif;
`