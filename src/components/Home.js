import React from 'react'
import styled from "styled-components"
import Header from './Header'
import SingleCard from './SingleCard'
import Footer from './Footer'


const Home = () => {
    const card_list = [
        {
            title: "Deep earth",
            bg_image: "image-deep-earth.jpg"
        },
        {
            title: "Night Arcade",
            bg_image: "image-night-arcade.jpg"
        },
        {
            title: "Soccer team VR",
            bg_image: "image-soccer-team.jpg"
        },
        {
            title: "The Grid",
            bg_image: "image-grid.jpg"
        },
        {
            title: "From up above VR",
            bg_image: "image-from-above.jpg"
        },
        {
            title: "Pocket Borealis",
            bg_image: "image-pocket-borealis.jpg"
        },
        {
            title: "The Curiosity",
            bg_image: "image-curiosity.jpg"
        },
        {
            title: "Make the Fisheye",
            bg_image: "image-fisheye.jpg"
        }
    ]

    return (
        <>
            <Container>
                <Header />
                <Title>
                    <div>
                        <p>
                            IMMERSIVE<br></br> EXPERIENCES<br></br> THAT DELIVER
                        </p>
                    </div>
                </Title>
            </Container>

            <Section2>
                <VRImgDiv className='img-div'>
                    <img src="images/desktop/image-interactive.jpg"></img>
                </VRImgDiv>
                <VRText className='text-div'>
                    <p className='heading'>The Leader in interactive vr</p>
                    <p className='para'>Founder in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations has transformed businessess through digital experiences that bind to their brand.</p>
                </VRText>
            </Section2>


            <Section3>
                <Sec3_heading>
                    <p>Our creators</p>
                    <button class="mobile_hidden">See All</button>
                </Sec3_heading>
                <Sec3_cards>
                    {
                        card_list.map((item, index) => <SingleCard key={index} item={item} />)
                    }
                    <button class="DesktopHidden">See All</button>
                </Sec3_cards>
            </Section3>

            <Footer />
        </>
    )
}

export default Home


const Container = styled.div`
    width:100%;
    height:100vh;
    background-image:url("images/desktop/image-hero.jpg");
    background-repeat:no-repeat;
    backgound-position:center center;
    backgound-size:cover;
`

const Title = styled.div`
    position:relative !important;
    margin:50px 100px;
    color:var(--white_color);
    div{
        width:600px;
        padding:35px 80px 35px 35px;
        border:2px solid var(--white_color);
    }
    p{
        letter-spacing:2px;
        font-size:4rem;
        font-weight:Light 300;
        line-height:70px;
    }

    @media (max-width:1000px){
        position:relative !important;
        margin:50px 30px;
        margin-top:80px;
        color:var(--white_color);
        div{
            width:300px;
            padding:20px 30px 20px 30px;
            border:2px solid var(--white_color);
        }
        p{
            letter-spacing:2px;
            font-size:2rem;
            font-weight:Light 300;
            line-height:45px;
        }
    }
`


const Section2 = styled.div`
    margin:150px 100px;
    position:relative;
    @media (max-width:1000px){
        margin:50px 30px;
        dislay:flex;
        flex-direction:column;
        &>div{
        }
        &>.img-div{
            &>img{
                width:100%;
            }
        }
        &>.text-div{
            position:relative;
            width:100%;
            padding:10px;
            margin:30px 0px;
            top:0px;
            right:0px;
            bottom:0px;
            left:0px;
            &> .heading{
                padding:15px 0px;
                text-transform:uppercase;
                font-size: 1.9rem;
                color:var(--black_color);
                text-align:center;
            }
            &>.para{
                font-family: 'Alata', sans-serif;
                color:var(--dark_gray);
                padding:10px 0px;
                text-align:center;
                line-spacing:50px;
                line-height:20px;
            }   
        }
    }
`

const VRImgDiv = styled.div` 

`

const VRText = styled.div`
    width:550px;
    padding:60px;
    position:absolute;
    top:180px;
    right:85px !important;
    background-color:var(--white_color);
    &> .heading{
        padding:30px 0px;
        padding-left:30px;
        text-transform:uppercase;
        font-size: 3rem;
        color:var(--black_color);
        text-align:left;
    }
    &>.para{
        font-family: 'Alata', sans-serif;
        color:var(--dark_gray);
        padding:10px 0px;
        padding-left:30px;
        line-spacing:50px;
        text-align:left;
        line-height:20px;
    }   

`


const Section3 = styled.div`
    margin:150px 100px;
    button {
        font-family:'Alata', sans-serif;
        text-transform:uppercase;
        letter-spacing:3.5px;
        font-size:0.9rem;
        background-color:transparent;
        padding:8px 40px;
        border-radius:2px;
        border:2px solid var(--dark_gray);
        cursor:pointer;
        color:var(--black_color);
        display:block;
    }
    & > div > button.DesktopHidden{
        display:none;
    }
    @media (max-width:1000px){
        margin:80px 10px;
        & > div> button.mobile_hidden{
            display:none;
        }
        & > div > button.DesktopHidden{
            display:block;
        }
    }

`


const Sec3_heading = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin:90px 0px;
    
    & p {
        font-size:3.3rem;
        text-transform:uppercase;
    }
    & button{
        font-family:'Alata', sans-serif;
        text-transform:uppercase;
        letter-spacing:3.5px;
        font-size:0.9rem;
        background-color:transparent;
        padding:8px 40px;
        border-radius:2px;
        border:2px solid var(--dark_gray);
        cursor:pointer;
        color:var(--black_color);
        display:block;
    }
    @media (max-width:1000px){
        display:block;
        text-align:center;
        margin:55px 0px;
        & p {
            font-size:2.3rem;
            text-transform:uppercase;
            padding:0px 0px;
        }
        & button{
            display:none;
        }
    }
`



const Sec3_cards = styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content:space-between;
    align-items:center;
    & > div{
        margin-bottom:35px;
    }
    @media (max-width:1000px){
        margin:0px 20px;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        & > div{
            margin-bottom:30px;
        }
    }
`