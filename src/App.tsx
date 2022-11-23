import React, {useState, KeyboardEvent} from 'react';
import './App.css';
import styled from "styled-components";
import { keyframes } from 'styled-components'

function App() {
    const [gifts, setGifts] = useState<Array<string | null>>([])
    const [gift, setGift] = useState<string>('')
    const [pickedGift, setPickedGift] = useState<string | null>()
    const onKeyDownHandler = (el: KeyboardEvent<HTMLDivElement>) => {
        el.key === 'Enter' && gift &&
        setGifts([...gifts, gift])
        setGift('')
    }
    const giftHandler = () => {
        setPickedGift(gifts[Math.floor(Math.random() * gifts.length)])
    }

    return (
        <Container>

            <SnowGlobe></SnowGlobe>
            <Base></Base>
            <BaseTop></BaseTop>
            <BaseBottom></BaseBottom>
            <House>
                <Roof></Roof>
                <Window></Window>
                <Chimmey>
                </Chimmey>
                <Snow>
                    <SnowFlake></SnowFlake>
                    <SnowFlake2></SnowFlake2>

                </Snow>
            </House>
            <Trees></Trees>

            <input

                onKeyDown={onKeyDownHandler}
                onChange={(e) => setGift(e.currentTarget.value)}/>
            <ul>{gifts.map((el, index) => {
                return (
                    <li key={index}>{el}</li>
                )
            })}</ul>
            <button onClick={giftHandler}>pick</button>
            <span>{pickedGift}</span>


        </Container>
    );
}
const breatheAnimation = keyframes`
0% {transform: translateY(-50px);opacity:0.9;}
100% {transform: translateY(100px);opacity:0.2;}
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`
const SnowGlobe = styled.div`
  height: 300px;
  width: 300px;
  border-radius: 50%;
  background-color: #ebeaf0;
  border: 2px solid #d7d5e1;
  z-index: -30;
  

  :before {
    position: absolute;
    content: "";
    height: 280px;
    width: 280px;
    border-radius: 50%;
    top: 10px;
    left: 10px;
    background: #ffffff
  }
;
  :after {
    position: absolute;
    content: '';
    height: 280px;
    width: 288px;
    border-radius: 50%;
    top: 17px;
    background: #ebeaf0;
  };

`
const Snow = styled.div`
  position: absolute;
  z-index:6;
`
const SnowFlake =styled.div`
  top: -130px;
  left: 60px;
  position: absolute;
  border-radius: 40%;
  background-color: #ffffff;
  width: 7px;
  height: 7px;
  filter: blur(1px);
  animation: fall 2.5s linear infinite;
  animation-name: ${breatheAnimation};
  box-shadow: 40px 40px white, -40px -20px white, 40px 60px white,
  100px 25px white, 70px 20px white, 60px 0px white, 50px 0px white,
  10px 40px #ffffff, -30px 40px #ffffff, -60px 20px #ffffff, -70px 40px #ffffff,
  -90px 0px #ffffff
`
const SnowFlake2 =styled.div`
  top: -110px;
  left: 50px;
  position: absolute;
  border-radius: 40%;
  background-color: #ffffff;
  width: 7px;
  height: 7px;
  filter: blur(1px);
  animation: fall 2.5s linear infinite;
  animation-name: ${breatheAnimation};
  box-shadow: 40px 40px white, -40px -20px white, 40px 60px white,
  100px 25px white, 70px 20px white, 60px 0px white, 50px 0px white,
  10px 40px #ffffff, -30px 40px #ffffff, -60px 20px #ffffff, -70px 40px #ffffff,
  -90px 0px #ffffff
`

const Base = styled.div`
  position: relative;
  border-bottom: 50px solid #5e1620;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  height: 0;
  width: 242px;
  margin-top: -60px;
  z-index: -10;
  align-self: center;
  :after {
    position: absolute;
    content: "";
    top: 25px;
    left: -10px;
    width: 262px;
    height: 50px;
    border-radius: 125px / 25px;
    background: #5e1620;
  };
`
const BaseTop = styled.div`
  background-color: #ffffff;
  width: 242px;
  height: 40px;
  border-radius: 125px / 20px;
  margin-top: -72px;
  box-sizing: border-box;
  border-bottom: 8px solid #ebeaf0;
  z-index: -10;
  align-self: center;
`
const BaseBottom=styled.div`
  position: absolute;
  background-color: #9d2535;
  width: 275px;
  height: 60px;
  border-radius: 130px / 30px;
  top: 270px;
  z-index: -40;
  align-self: center;
`
const House = styled.div`
  position: absolute;
  z-index:2;
  width: 80px;
  height: 40px;
  background-color: #aca081;
  box-shadow: -40px 0 #8d826c;
  top:200px;
  left:95px;
  :before {
    content:"";
    position: absolute;
    background-color: #aca081;
    width:57.5px;
    height: 57.5px;
    transform: rotate(45deg);
    top:-28px;
    left:11px;
  };
  :after {
    content:"";
    position: absolute;
    background-color: #e7e7e7;
    box-shadow: -40px 0 #c0c0c0;
    width: 80px;
    height:20px;
    top:22px;
  }
  
`
const Roof =styled.div`
  position: absolute;
  background-color: rgba(0,0,0,0.2);
  width:40px;
  height: 5px;
  left:-40px;
  :before {
    content:"";
    position: absolute;
    background-color: white;
    border-radius: 5px 0px 0px 5px;
    width:50px;
    height: 43px;
    top:-43px;
    transform: skew(-45deg);
    left:13px;}
    :after {
      content:"";
      position: absolute;
      transform: skew(45deg);
      background-color: white;
      width: 7px;
      height: 43px;
      border-radius: 0 2px 5px 0;
      top:-43px;
      left:98px;
`
const Window = styled.div`
  position: absolute;
  width: 23px;
  height: 23px;
  background-color: #fff7c2;
  top: -5px;
  left: 30px;
  box-shadow: 10px 0 #810d2c, -10px 0 #810d2c;

  :before {
    content: "";
    position: absolute;
    width: 23px;
    height: 2px;
    background-color: #e8a871;
    top: 11px;
  }
;

  :after {
    content: "";
    position: absolute;
    width: 2px;
    height: 23px;
    background-color: #c5bb97;
    top: 0;
    left: 10.3px;
`
const Chimmey = styled.div`
  position: absolute;
  background-color: #8d826c;
  width:15px;
  height:30px;
  top:-45px;
  left:-25px;
  box-shadow: 0 -5px #625f56;
  z-index:3;
  :before {
    content:"";
    position: absolute;
    width:10px;
    height: 5px;
    background-color: #bfaf94;
    border-radius:10px;
    top: 15px;
    left: 60px;
    box-shadow: 5px 10px #bfaf94, -8px 15px #bfaf94, 
    -28px 25px #bfaf94, -32px 35px #bfaf94, 20px 17px #bfaf94, 
    30px 30px #bfaf94, 32px 40px #bfaf94,-28px 44px #bfaf94, 
    -50px 37px #7d7360, -55px 44px #7d7360, -70px 41px #7d7360;
`

const Trees = styled.div`
  position: absolute;
  height: 0;
  width: 0;
  border-left: 30px solid transparent;
  border-right: 30px solid transparent;
  border-bottom: 90px solid rgba(20, 87, 55, 0.58);
  top: 131px;
  left: 145px;

  :before {
    content: "";
    position: absolute;
    height: 0;
    width: 0;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: 70px solid #62827c;
    top: 25px;
    left: 25px;
  }

  :after {
    content: "";
    position: absolute;
    height: 0;
    width: 0;
    border-left: 30px solid transparent;
    border-right: 30px solid transparent;
    border-bottom: 90px solid #62827c;
    left: -140px;
    top: 20px;
  }

`

export default App;
