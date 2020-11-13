import React, { Suspense, useRef, useState } from "react";
import { Canvas, useLoader, useFrame } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useGLTF } from "@react-three/drei";
import {useSpring, config, animated as a} from "react-spring/three";
import "./styles.css";

function Loading() {
  return (
    <mesh visible position={[0, 0, 0]} rotation={[0, 0, 0]}>
      <sphereGeometry attach="geometry" args={[1, 16, 16]} />
      <meshStandardMaterial
        attach="material"
        color="white"
        transparent
        opacity={0.6}
        roughness={1}
        metalness={0}
      />
    </mesh>
  );
}

function ArWing(props) {
  const group = useRef();
  const gltf = useGLTF("models/dolphin.glb");
  const [hovered, setHover] = useState(false);
  const props2 = useSpring({
    scale: hovered? [2,2,2] : [1.5,1.5,1.5],
    
 
   config: config.wobbly
 });
  const spin = 0;
  let inc = 0;
  
  // useFrame will run outside of react in animation frames to optimize updates.
  useFrame(() => {
    inc += 0.01;
    group.current.rotation.x = group.current.rotation.y  = !hovered? group.current.rotation.y = (group.current.rotation.y + 0.01) % 6.28 : group.current.rotation.y = group.current.rotation.y * 1.01;
    group.current.rotation.x += 0.005;
   
    if(!hovered){

    
    group.current.children[0].material.opacity = Math.abs(Math.sin(inc+ group.current.rotation.y))*0.2;
    group.current.rotation.z = group.current.rotation.y ;
    group.current.rotation.z += 0.05;
  }

  
    //console.log(group.current.rotation.y);
  });
  //return <primitive object={gltf} dispose={null} />
  return (
    // Add a ref to the group. This gives us a hook to manipulate the properties of this geometry in the useFrame callback.
    <group ref={group} {...props}>
      <a.mesh position={[0,0,0]}  scale={props2.scale} visible geometry={gltf.nodes.DOLPHIN.geometry} onPointerOver={(e) => setHover(true)}
        onPointerOut={(e) => setHover(false)}   >
        <meshStandardMaterial
          wireframe={!hovered}
          wireframeLinewidth={1.01}
          attach="material"
          color="white" 
          transparent//"#00CED3"//"blue"
          opacity={hovered?0.3:0.1}
          roughness={100.1}
          metalness={hovered?0:10.5}
          
        />
      </a.mesh>
    </group>
  );
}

export default function Model() {
  const h = [...Array(14)].map((_, i) => i);
  const v = [...Array(1)].map((_, i) => i);


  return (
    
      <Suspense fallback={<Loading />}>
        {v.map((j) => h.map((i) => <ArWing key={i} position={[(h.length*0.2)+(i*0.5)-(h.length*0.5)+0.5,j-(v.length*0.5)+0.1,0]}/>))}
      </Suspense>
   
  );
}