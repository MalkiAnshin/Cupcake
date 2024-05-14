"use client";

import React, { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
// @ts-ignore
import * as random from "maath/random/dist/maath-random.esm";
import { log } from "three/examples/jsm/nodes/Nodes.js";

const StarBackground = (props) => {
  console.log("A");
  const ref = useRef();
  console.log("B");
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(5001), { radius: 0.9 })
  );
  console.log("C");

  useFrame((state, delta) => {
  console.log("D");
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
  {console.log("E")}
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
  {console.log("F")}
        <PointMaterial
          transparent
          color="#fff"
          size={0.002}
          sizeAttenuation={true}
          dethWrite={false} // כאן ייתכן שטעות כי כנראה הכוונה היא ל "depthWrite" במקום "dethWrite"
        />
  {console.log("G")}
      </Points>
  {console.log("H")}
    </group>
  );
};

function StarsCanvas(){
  return(
  <div className="w-full h-auto fixed inset-0 z-[1] ">
    <Canvas camera={{ position: [0, 0, 1] }}>
      {console.log(1)}
      <Suspense fallback={null}>
      {console.log(2)}
        <StarBackground />
      {console.log(3)}
      </Suspense>
      {console.log(4)}
    </Canvas>
    {console.log(5)}
  </div>
  )
};

export default StarsCanvas
