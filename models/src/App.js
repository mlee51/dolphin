import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from 'react-three-fiber'
import { useSpring, config, animated as a } from 'react-spring/three'
import Box from "./Box";
import Cube from "./Cube";
import Model from "./Model";
import "./styles.css";

export default function App() {
  const [active, setActive] = useState(false);
  const props2 = useSpring({
    position: active ? [0, 0, 3] : [0, 0, 0],

    config: config.wobbly
  });

  const h = [...Array(4)].map((_, i) => i);
  const v = [...Array(4)].map((_, i) => i);

  return (
    
    <Canvas style={{ background: "#ffffff" }}>
      <directionalLight intensity={0.5}/>
      <Model position={[0,0,3]} />
 
     
      
      {/*v.map((j) => h.map((i) => <Box key={i} position={[i-(h.length*0.5),j-(v.length*0.5),0]}/>))*/ }
    </Canvas>
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
