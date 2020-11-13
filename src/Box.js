import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from 'react-three-fiber'
import {useSpring, config, animated as a} from 'react-spring/three'


function Box(props) {
    // This reference will give us direct access to the mesh
    
    
    const mesh = useRef()
   
    // Set up state for the hovered and active state
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)
    const max = Math.random()*10;
    const min = Math.random()*5;

    const props2 = useSpring({
      scale: hovered? [max,max,max] : [min,min,min],
   
     config: config.wobbly
   });
  
    // Rotate mesh every frame, this is outside of React without overhead
    useFrame(() => {
     mesh.current.rotation.x = mesh.current.rotation.y += 0.002
    })
  
    return (
      <a.mesh
       {...props}
        ref={mesh}
        rotation={[0,Math.random()*360,0]}
      
        onClick={(e) => setActive(!active)}
        onPointerOver={(e) => setHover(true)}
        onPointerOut={(e) => setHover(false)}  {...props2}>
        <boxBufferGeometry args={[1, 1, 1]} />
        <meshStandardMaterial wireframe={true} color={hovered ? 'hotpink' : 'black'} />
      </a.mesh>
    )
  }
  export default Box;