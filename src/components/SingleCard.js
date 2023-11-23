import React from 'react'
import styled from 'styled-components'

const SingleCard = ({ item }) => {
    console.log(item)
    return (
        <Container bgImg={item.bg_image}>
            <p>{item.title}</p>
        </Container>
    )
}

export default SingleCard


const Container = styled.div`
    width:23%;
    background-image:${(props) => `url(/images/desktop/${props.bgImg})`};
    background-repeat:no-repeat;
    background-position:center center;
    background-size:cover;
    height:450px;
    position:relative;
    cursor:pointer;
    &::before{
        content:"";
        position:absolute;
        top:0px;
        left:0px;
        right:0px;
        bottom:0px;
        background-image:linear-gradient(to bottom,rgba(240, 248, 255, 0),black);
        background-blend-mode: screen;
        opacity:0.8;
    }
    & p{
        width:80%;
        color:var(--white_color);
        position:absolute;
        bottom:0px;
        left:0px;
        padding:20px;
        font-size:35px;
        text-transform:uppercase;
    }
    @media (max-width:1000px){
        width:100%;
        background-image:${(props) => `url(/images/desktop/${props.bgImg})`};
        background-repeat:no-repeat;
        background-position:top left;
        background-size:cover;
        height:120px;
        position:relative;
        cursor:pointer;
        &::before{
            content:"";
            position:absolute;
            top:0px;
            left:0px;
            right:0px;
            bottom:0px;
            background-image:linear-gradient(to bottom,rgba(240, 248, 255, 0),black);
            background-blend-mode: screen;
            opacity:0.8;
        }
        & p{
            width:44%;
            color:var(--white_color);
            position:absolute;
            bottom:20px;
            left:20px;
            font-size:1.5rem;
            text-transform:uppercase;
        }
    }
`