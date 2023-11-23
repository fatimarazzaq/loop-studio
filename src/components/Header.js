import React, { useState } from 'react'
import styled from 'styled-components'

const Header = () => {
    const [burgerStatus, setBurgerStatus] = useState(false);
    return (
        <HeadContainer>
            <Logo>
                <img src="images/logo.svg"></img>
            </Logo>
            <DesktopNav>
                <a href='#'><span>About</span></a>
                <a href='#'><span>Careers</span></a>
                <a href='#'><span>Events</span></a>
                <a href='#'><span>Products</span></a>
                <a href='#'><span>Support</span></a>
            </DesktopNav>

            <MobileNav>
                <MobileNavIcon onClick={() => setBurgerStatus(true)}>
                    <img src="images/icon-hamburger.svg"></img>
                </MobileNavIcon>
                <NavBar show={burgerStatus}>
                    <BothLogos>
                        <PageLogo>
                            <img src="images/logo.svg"></img>
                        </PageLogo>
                        <MobileNavCloseIcon onClick={() => setBurgerStatus(false)}>
                            <img src="images/icon-close.svg"></img>
                        </MobileNavCloseIcon>
                    </BothLogos>
                    <NavBarInner>
                        <a href='#'><span>About</span></a>
                        <a href='#'><span>Careers</span></a>
                        <a href='#'><span>Events</span></a>
                        <a href='#'><span>Products</span></a>
                        <a href='#'><span>Support</span></a>
                    </NavBarInner>
                </NavBar>
            </MobileNav>
        </HeadContainer>
    )
}

export default Header


const HeadContainer = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:65px 0px;
    margin:0px 100px;
    z-index:100;
    @media (max-width:1000px){
        padding:40px 0px;
        margin:0px 35px;
    }
    `


const Logo = styled.div`
    @media (max-width:1000px){
        & > img{
            width:70%;
        }
    }
`



const DesktopNav = styled.div`
    margin-right:60px;
    a{
        color:var(--white_color);
        text-decoration:none;
        margin:0px 15px;
        span{
            font-family: 'Alata', sans-serif;
            font-size: 14px;
            letter-spacing: 1px;
            position: relative;
            margin-left: 5px;
            &::before{
                content: "";
                height: 2px;
                width: auto;
                background-color: white;
                left: 0px;
                right: 0px;
                bottom: -10px;
                position: absolute;
                opacity: 0;
                visibility: hidden;
                transform-origin: center center;
                transition: all 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94);
                transform: scaleX(0);
            }
            &:hover::before {
                opacity: 1;
                visibility: visible;
                transform: scaleX(40%);
              }
        }
        
    }

    @media (max-width:1000px){
        display:none;
    }

`



const MobileNav = styled.div`
    display : none;
    @media (max-width:1000px){
        display:block;
    }
`

const NavBar = styled.div`
    position:fixed;
    top:0px;
    left:0px;
    right:0px;
    bottom:0px;
    width:100%;
    height:100vh;
    background-color:var(--black_color);
    z-index:100;
    transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
    transition: all 0.5s;
`

const NavBarInner = styled.div`
    display:flex;
    flex-direction:column;
    margin:130px 50px 50px 30px;
    &>a{
        text-decoration:none;
        color:var(--dark_gray);
        padding:2px 0px;
        margin:3px 0px;
        font-size:22px;
        font-family:'Alata',sans-serif;
        text-transform:uppercase;
    }
`
const BothLogos = styled.div`
    display : none;
    @media (max-width:1000px){
        display:flex;
        justify-content:space-between;
        align-items:center;
        position:relative;
        margin:40px 35px;
        margin-bottom:0px;
    }

`

const PageLogo = styled.div`
    cursor:pointer;
    & > img{
        width:70%;
    }
`

const MobileNavCloseIcon = styled.div`
    cursor:pointer;
`

const MobileNavIcon = styled.div`
    display : none;
    @media (max-width:1000px){
        display:flex;
        justify-content:flex-end;
        cursor:pointer;
    }
`

