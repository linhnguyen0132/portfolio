"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Suspense } from "react";

type Model3DProps = {
    model: string;
    scale?: number;
    position?: [number, number, number];
    rotation?: [number, number, number];
};


// ==================== MODEL SETTINGS ====================

const COMPUTER_MODEL = "retro_computer.glb";


// ==================== 3D MODEL ====================

function Model({
    model,
    scale = 1,
    position = [0, 0, 0],
    rotation = [0, 0, 0],
}: Model3DProps) {

    const { scene } = useGLTF(model);

    return (
        <primitive
            object={scene}
            scale={scale}
            position={position}
            rotation={rotation}
        />
    );
}


// ==================== MODEL VIEWER ====================

export default function Model3D({
    model,
    scale = 1,
    position = [0, 0, 0],
    rotation = [0, 0, 0],
}: Model3DProps) {

    return (
        <div className="h-72 w-full">

            <Canvas
                camera={{
                    position: [4, 0, 4],
                    fov: 45,
                    zoom: 1.5,
                }}
            >

                <Suspense fallback={null}>

                    {/* Lighting */}
                    <ambientLight intensity={2} />

                    <directionalLight
                        position={[3, 3, 3]}
                        intensity={2}
                    />

                    {/* 3D model */}
                    <Model
                        model={model}
                        scale={scale}
                        position={position}
                        rotation={rotation}
                    />

                    {/* Mouse controls */}
                    <OrbitControls
                        enableZoom={false}
                        enablePan={false}
                    />

                </Suspense>

            </Canvas>

        </div>
    );
}