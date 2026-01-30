import React, { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

const StarParticles = ({ count = 2000 }) => {
    const points = useMemo(() => {
        const p = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            // Spread particles across a wide volume
            p[i * 3] = (Math.random() - 0.5) * 25; // x
            p[i * 3 + 1] = (Math.random() - 0.5) * 25; // y
            p[i * 3 + 2] = (Math.random() - 0.5) * 25; // z
        }
        return p;
    }, [count]);

    const pointsRef = useRef();

    useFrame((state, delta) => {
        if (pointsRef.current) {
            // Slow rotation for background ambience
            pointsRef.current.rotation.x -= delta / 50;
            pointsRef.current.rotation.y -= delta / 60;
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={pointsRef} positions={points} stride={3} frustumCulled={false}>
                <PointMaterial
                    transparent
                    color="#ffffff"
                    size={0.04} 
                    sizeAttenuation={true}
                    depthWrite={false}
                    blending={THREE.AdditiveBlending}
                    opacity={0.8}
                />
            </Points>
        </group>
    );
};

const StarBackground = () => {
    const [isMobile, setIsMobile] = React.useState(false);

    React.useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768 || /Mobi|Android/i.test(navigator.userAgent));
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <div style={{ 
            position: 'fixed', 
            top: 0, 
            left: 0, 
            width: '100vw', 
            height: '100vh', 
            zIndex: -1, 
            pointerEvents: 'none',
            background: 'transparent' // Let the CSS gradient show through
        }}>
            <Canvas camera={{ position: [0, 0, 1] }} dpr={isMobile ? [1, 1] : [1, 2]}>
                <Suspense fallback={null}>
                    <StarParticles count={isMobile ? 500 : 2000} />
                </Suspense>
            </Canvas>
        </div>
    );
};

export default StarBackground;
