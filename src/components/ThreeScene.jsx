import React, { Suspense, useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Points, PointMaterial, PresentationControls, ContactShadows, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

const NuclearCore = ({ isMobile }) => {
    const meshRef = useRef();

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        if (meshRef.current) {
             meshRef.current.rotation.x = Math.cos(time / 4) * 0.2;
            meshRef.current.rotation.y = Math.sin(time / 2) * 0.2;
            meshRef.current.position.y = Math.sin(time) * 0.1;
        }
    });

    return (
        <Float speed={5} rotationIntensity={2} floatIntensity={2}>
            <mesh ref={meshRef}>
                {/* Reduce geometry detail on mobile */}
                <icosahedronGeometry args={[1, isMobile ? 4 : 15]} />
                {/* Nuclear Orange Core */}
                <MeshDistortMaterial
                    color="#ff6700"
                    speed={3}
                    distort={0.5}
                    radius={1}
                    metalness={0.9}
                    roughness={0.1}
                    emissive="#331500"
                    emissiveIntensity={1}
                />
            </mesh>
            {/* Outer Glow Ring - Gold/Yellow */}
            <mesh rotation={[Math.PI / 2, 0, 0]}>
                <torusGeometry args={[1.5, 0.02, 16, 100]} />
                <meshStandardMaterial color="#ffb700" emissive="#ffb700" emissiveIntensity={2} />
            </mesh>
        </Float>
    );
};

const Particles = ({ count = 500 }) => {
    const points = useMemo(() => {
        const p = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            p[i * 3] = (Math.random() - 0.5) * 10;
            p[i * 3 + 1] = (Math.random() - 0.5) * 10;
            p[i * 3 + 2] = (Math.random() - 0.5) * 10;
        }
        return p;
    }, [count]);

    const pointsRef = useRef();

    useFrame((state) => {
        if (pointsRef.current) {
             const time = state.clock.getElapsedTime();
             pointsRef.current.rotation.y = time * 0.05;
        }
    });

    return (
        <Points ref={pointsRef} positions={points} stride={3} frustumCulled={false}>
            <PointMaterial
                transparent
                color="#ffffff"
                size={0.05}
                sizeAttenuation={true}
                depthWrite={false}
                blending={THREE.AdditiveBlending}
                opacity={0.6}
            />
        </Points>
    );
};

const ThreeScene = () => {
    const [isMobile, setIsMobile] = React.useState(false);

    React.useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768 || /Mobi|Android/i.test(navigator.userAgent));
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Adjust position and scale based on device
    // On mobile, lift it up slightly centered [0, 0.5, 0] to avoid being hidden behind bottom text
    const groupPosition = isMobile ? [0, 1, 0] : [2, 0, 0];
    const groupScale = isMobile ? 0.4 : 1;

    // Mobile Optimization: Lower pixel ratio, fewer shadows, fewer particles
    const dpr = isMobile ? [1, 1] : [1, 2];

    return (
        <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, zIndex: 0, pointerEvents: 'none' }}>
            <Canvas shadows={!isMobile} dpr={dpr}>
                <PerspectiveCamera makeDefault position={[0, 0, isMobile ? 7 : 5]} fov={50} />

                <ambientLight intensity={0.2} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow={!isMobile} />
                {/* Nuclear Theme Lights */}
                <pointLight position={[-10, -10, -10]} intensity={1} color="#ffb700" />
                <pointLight position={[10, 10, 10]} intensity={2} color="#ff6700" />

                <Suspense fallback={null}>
                    <PresentationControls
                        global
                        config={{ mass: 2, tension: 500 }}
                        snap={{ mass: 4, tension: 1500 }}
                        rotation={[0, 0, 0]}
                        polar={[-Math.PI / 4, Math.PI / 4]}
                        azimuth={[-Math.PI / 4, Math.PI / 4]}
                        enabled={!isMobile} // Disable rotation on mobile for performance
                    >
                        <group position={groupPosition} scale={groupScale}>
                            <NuclearCore isMobile={isMobile} />
                        </group>
                    </PresentationControls>
                    <Particles count={isMobile ? 150 : 500} />
                     <ContactShadows
                        position={[isMobile ? 0 : 2, -2.5, 0]}
                        opacity={0.4}
                        scale={10}
                        blur={2}
                        far={4.5}
                        color="#ff6700"
                        frames={isMobile ? 1 : Infinity} // Static shadow on mobile
                    />
                </Suspense>
            </Canvas>
        </div>
    );
};

export default ThreeScene;
