"use client";

import { OrbitControls, useGLTF } from "@react-three/drei";
import { useRouter } from "next/navigation";
import * as THREE from "three";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useRef, useState} from "react";
import type { ThreeEvent } from "@react-three/fiber";

function HomeModel({
    onObjectClick,
}: {
    onObjectClick: (
        position: THREE.Vector3,
        direction: THREE.Vector3,
        url?: string
    ) => void;
}) {
    const { scene } = useGLTF("/models/home.glb");

    const laptop = scene.getObjectByName("laptop");
    const text = laptop?.getObjectByName("Text");

    const router = useRouter();
    const stars = useRef<THREE.Mesh[]>([]);
    const excludeEl = ["Ellipse_2_1", "Ellipse_1"];

    scene.traverse((child) => {
        console.log(child.name, "→", child.type);
        if (
            child instanceof THREE.Mesh &&
            child.name.startsWith("Ellipse") &&
            !excludeEl.includes(child.name)
        ) {
            child.userData.blinkOffset =
                Math.random() * Math.PI * 2;

            stars.current.push(child);
        }
    });

    useFrame((state) => {
        // ---------- TEXT ----------
        if (text) {
            text.visible =
                Math.floor(state.clock.elapsedTime * 2) % 2 === 0;
        }

        // ---------- STARS ----------
        stars.current.forEach((star) => {
            const offset = star.userData.blinkOffset;

            const opacity =
                0.35 +
                (Math.sin(
                    state.clock.elapsedTime * 3 + offset
                ) +
                    1) /
                    2 *
                    0.65;

            if (
                star.material instanceof THREE.MeshStandardMaterial
            ) {
                star.material.transparent = true;
                star.material.opacity = opacity;
            }
        });
    });

    return (
        <primitive
            object={scene}
            scale={1.2}
            position={[-5, -5, 10]}
            rotation={[0, -50, 0]}
            onClick={(event: ThreeEvent<MouseEvent>) => {
                event.stopPropagation();

                let object: THREE.Object3D | null = event.object;

                while (object) {
                    if (object.name === "laptop") {
                        console.log("💻 LAPTOP CLIQUÉ !");

                        const screen =
                            object.getObjectByName("screen");

                        if (screen) {
                            const screenPosition =
                                new THREE.Vector3();

                            const screenDirection =
                                new THREE.Vector3();

                            screen.getWorldPosition(
                                screenPosition
                            );

                            screen.getWorldDirection(
                                screenDirection
                            );

                            console.log(
                                "Screen position:",
                                screenPosition
                            );

                            console.log(
                                "Screen direction:",
                                screenDirection
                            );

                            onObjectClick(
                                screenPosition,
                                screenDirection
                            );
                        }

                        return;
                    }
                    if (object.name === "dolfie") {
                        console.log("🐱 DOLFIE CLIQUÉ !");

                        const dolfiePosition = new THREE.Vector3();
                        const dolfieDirection = new THREE.Vector3();

                        object.getWorldPosition(dolfiePosition);
                        object.getWorldDirection(dolfieDirection);

                        console.log("Dolfie position:", dolfiePosition);
                        console.log("Dolfie direction:", dolfieDirection);

                        onObjectClick(
                            dolfiePosition,
                            dolfieDirection,
                            "/hobbies"
                        );

                        return;
                    }

                    if (object.name === "github") {
                        setTimeout(() => {
                            window.open(
                                "https://github.com/linhnguyen0132",
                                "_blank"
                            );
                        }, 100);

                        break;
                    }

                    if (object.name === "linkedin") {
                        setTimeout(() => {
                            window.open(
                                "https://www.linkedin.com/in/linh-nguyen-0132/",
                                "_blank"
                            );
                        }, 100);

                        break;
                    }

                    object = object.parent;
                }
            }}
        />
    );
}


function CameraTransition({
    transitioning,
    screenPosition,
    screenDirection,
    onComplete,
}: {
    transitioning: boolean;
    screenPosition: THREE.Vector3 | null;
    screenDirection: THREE.Vector3 | null;
    onComplete: () => void;
}) {
    const { camera } = useThree();

    const startPosition = useRef(new THREE.Vector3());
    const targetPosition = useRef(new THREE.Vector3());
    const targetLookAt = useRef(new THREE.Vector3());

    const progress = useRef(0);
    const wasTransitioning = useRef(false);

    useFrame((_, delta) => {
        if (
            !transitioning ||
            !screenPosition ||
            !screenDirection
        ) {
            return;
        }

        if (!wasTransitioning.current) {
            wasTransitioning.current = true;
            progress.current = 0;

            startPosition.current.copy(camera.position);

            // On s'arrête juste devant l'écran
            targetPosition.current
                .copy(screenPosition)
                .add(
                    screenDirection
                        .clone()
                        .multiplyScalar(6)
                );

            targetLookAt.current.copy(screenPosition);
        }

        progress.current += delta / 1.2;

        const t = Math.min(progress.current, 1);

        // Mouvement smooth
        const eased = 1 - Math.pow(1 - t, 3);

        camera.position.lerpVectors(
            startPosition.current,
            targetPosition.current,
            eased
        );

        camera.lookAt(targetLookAt.current);

        if (t >= 1) {
            wasTransitioning.current = false;
            onComplete();
        }
    });

    return null;
}


export default function HomeScene() {
    const router = useRouter();

    const [transitioning, setTransitioning] =
        useState(false);

    const [screenPosition, setScreenPosition] =
        useState<THREE.Vector3 | null>(null);

    const [screenDirection, setScreenDirection] =
        useState<THREE.Vector3 | null>(null);

    const [targetUrl, setTargetUrl] =
        useState("/about");

    const handleObjectClick = (
        position: THREE.Vector3,
        direction: THREE.Vector3,
        url = "/about"
    ) => {
        setScreenPosition(position);
        setScreenDirection(direction);
        setTargetUrl(url);
        setTransitioning(true);
    };

    return (
        <main className="relative h-screen w-screen overflow-hidden">
            <Canvas
                className="h-full w-full"
                camera={{
                    position: [-25.5, 6, 40],
                    fov: 45,
                }}
            >
                <ambientLight intensity={1} />

                <HomeModel
                    onObjectClick={handleObjectClick}
                />

                <CameraTransition
                    transitioning={transitioning}
                    screenPosition={screenPosition}
                    screenDirection={screenDirection}
                    onComplete={() => {
                        router.push(targetUrl);
                    }}
                />

                <OrbitControls
                    enableZoom={true}
                    enablePan={false}
                    enabled={!transitioning}
                />
            </Canvas>
        </main>
    );
}