import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from 'react-three-fiber';
import styled, { css } from 'styled-components'
import { useSpring, config, animated} from 'react-spring';
import Model from "./Model";
import Imagelink from "./Imagelink";
import { Gradient } from 'react-gradient';

import "./styles.css";

let currentTime = new Date();


const gradients = [
  ['#0BFFFF', '#5200FF'],
  ['#0BFFC4', '#0001FF'],
  ['#5200FF', '#0BFFC4']
  
];

let mobile = true;

if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
  mobile = true;
}else{
  mobile = false;
}

export default function App(props) {
  const [hovered, setHover] = useState(false);
  const big = useSpring({
    width: hovered ? "7vw" : "10vw",

    config: config.wobbly
  });

  const SGrid = styled.div`
  
  
  grid-template-columns: ${mobile? "auto": "auto auto auto" };
  //grid-template-rows: auto-fit;
  background-color: #ffffff;
  display: grid;
  z-index: 3;
  position: absolute;
  //width: 20%;
  left: ${mobile? "0vmax": "5vmax" };
  opacity:90%;
  mix-blend-mode: overlay;
  
  height: 100%;
  justify-self: top;
  
  padding: 12vmax 0 24vmax 0;
 // overflow: hidden;
  //grid-auto-flow: row
`
  const Simg2 = styled.img`
  width: 100%;
 // padding: 10px;
  z-index: 5;
  //background-color: grey;
  //position:absolute;
  margin-bottom: -10px;
      
     // left: 0.1vw;
  `
  const SCanvas = styled(Canvas)`
  position: fixed;
  top:0px;
  left:0px;
  height:100%;
  width:100%;
  overflow:none;
  overflow: hidden;
  
  z-index: 1;
  //background-image: url("./icons/studio.jpg");
  background:rgba(255,255,255,0.3);//#00CED3;
  `
  const SGradient = styled(Gradient)`
  width: 100%;
 
  z-index: -1;
  //background-color: grey;
  //fill: #6e40aa;
  //color: blue;
  //stroke: #909;
  //stroke-width: 10;
 

     // top: -4vw;
     // left: 0.1vw;
  `
  const Sbg = styled(Gradient)`
  height: 100%;
  margin: 0;
 
  //z-index: -1;
  //background-color: grey;
  //fill: #6e40aa;
  //color: blue;
  //stroke: #909;
  //stroke-width: 10;
 

     // top: -4vw;
     // left: 0.1vw;
  `
  const SOff = styled.div`
  position: absolute;
  top: 5vmax;
  width:100%;
  background-color: grey;
  overflow: hidden;
  `
  const Sidebar = styled.div`
  position: absolute;
  opacity: ${!mobile? "5%" : "30%"};
  width: ${!mobile? "100%":"90%"};
  height: 100%;
  right: 0;
  bottom: 100px;
  background-repeat: ${!mobile?"repeat" : "no-repeat"};
  //transform: translateX(85%) translateY(-25%) rotate(90deg) ;
  z-index: 0;
  background-image: url("./icons/wdolph.svg");

 

  `

  const h = [...Array(4)].map((_, i) => i);
  const v = [...Array(4)].map((_, i) => i);

  return (
    <>
    
    <SGrid >
    {!mobile  && (
    <SOff>
      
    <SGradient
                gradients={ gradients } // required
                property="background"
                duration={ 2400 }
                angle="180deg"
            >
              
    <Simg2 src={"./icons/dmask.png"} />

    </SGradient>
    
    </SOff>)
    }

    

    
    
      <Imagelink src={"./icons/applemusic.jpg"}  link={"https://music.apple.com/us/artist/dolphin-uppercut-avenger/1434403698"}/>
      <Imagelink src={"./icons/Spotify_Icon_RGB_Green.png"} link={"https://open.spotify.com/artist/5HW8NeRRGuxY7eCRCQhuTF?si=tGgoUgj6Q_GAsTFv3TkeYw"}/>
   
      <Imagelink src={"./icons/soundcloud.jpg"} link={"https://soundcloud.com/dolphinuppercut/sets/discography"}/>
      <Imagelink src={"./icons/bandcamp.jpg"} link={"https://dolphinuppercut.bandcamp.com/"}/>
      <Imagelink src={"./icons/youtube.jpg"} link={"https://www.youtube.com/channel/UCNXsYgjdpbAy7NLIyJ7g0vg"}/>
      <Imagelink src={"./icons/tiktok.jpg"} link={"https://www.tiktok.com/@dolphinuppercut"}/>
      <Imagelink src={"./icons/kofi.jpg"} link={"https://ko-fi.com/dolphinuppercut"}/>
      <Imagelink src={"./icons/twitter.jpg"}link={"https://twitter.com/DolphinUppercut"}/>
      <Imagelink src={"./icons/instagram.jpg"}  link={"https://www.instagram.com/dolphinuppercut/"}/>
      <Imagelink src={"./icons/discord.png"}  link={"https://www.instagram.com/dolphinuppercut/"}/>
    
      
    </SGrid>
    
   <Sidebar></Sidebar>
   <a href="https://michaellee.xyz" style={{position: "absolute" ,right:"20px", bottom: "0", color:"white", zIndex: "2", textDecoration: "none", opacity: "50%"}} target="_blank">&copy; {currentTime.getFullYear()} Michael Lee</a>
    <Sbg
        gradients={ gradients }
        property="background"
        duration={ 2400 }
        angle="180deg"
       
      >
    <SCanvas camera={{fov:30}}>
     
      <directionalLight color={ "#00CED3"} intensity={1.5}/>
      <ambientLight intensity={1.1}/>

      <Model />
      
      
 
    </SCanvas>
    
    </Sbg>
    
    </>
    /*
    <Canvas >
      <ambientLight intensity={0.5} />
     
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        
      <pointLight position={[-10, -10, -10]} />
      <Model/>
      <group>
      {v.map((j) => h.map((i) => <Box key={i} position={[i-(h.length*0.5),j-(v.length*0.5),0]}/>)) }
    
      </group>
  </Canvas>*/
  )
}
