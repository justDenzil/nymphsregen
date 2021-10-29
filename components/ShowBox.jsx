import React, {Suspense} from 'react';
import { useGLTF, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber"
import Model from "./NymphsRegenBoxforBrowser"



//function Model() {
  //const { scene } = useGLTF("nymphsRegenBoxforBrowser.gltf")
  //return <primitive object={scene} />;
//}
  

export function ShowBox(props) {
  return (
    <div style = {{height:"60vh"}}>
      <Canvas camera={{position: [10, 18, 23], fov: 0.5 }} setPixelRatio="window.devicePixelRatio">
      <ambientLight intensity={0.5} />
      <pointLight color="white" intensity={1.5} position={[10, 10, 10]} />
        <OrbitControls 
        autoRotate
        enableZoom="false"/>
        <Suspense fallback={null}>
          <Model scale={[0.07,0.07,0.07]}/>
        </Suspense>
      </Canvas>
    </div>
  );
}