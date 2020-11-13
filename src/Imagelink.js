import React, { useRef, useState } from 'react';
import styled, { css } from 'styled-components'
import { useSpring, config, animated} from 'react-spring';

const Simg = styled(animated.img)`
  margin: 1vw;
  padding: 0.5vw;
  cursor: pointer;
  
  z-index: 4;
  width: 7vw;
 // transform: translateX(calc(-50%+223px));
  `

export default function Imagelink(props) {
    const [hovered, setHover] = useState(false);
    const big = useSpring({
     // padding: hovered ? "0.1vw" : "2vw",
      width: hovered ? "10vw" : "6vw",
  
      config: config.gentle
    });

    return (
       <div onPointerOver={(e) => setHover(true)}
       onPointerOut={(e) => setHover(false)}><a  href={props.link} target="_blank"><Simg src={props.src} style={big}  /></a></div>
    );
    
}