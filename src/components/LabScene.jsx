
import React, { useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import { Float, PerspectiveCamera, Environment, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

const Crystal = ({ position, rotation, scale, color }) => {
    return (
        <Float speed={2} rotationIntensity={2} floatIntensity={1}>
            <mesh position={position} rotation={rotation} scale={scale}>
                <octahedronGeometry args={[1, 0]} />
                <meshPhysicalMaterial
                    color={color}
                    thickness={2.0}
                    roughness={0.15}
                    clearcoat={1}
                    clearcoatRoughness={0.1}
                    transmission={0.95}
                    ior={1.45}
                    attenuationTint={color}
                    attenuationDistance={1.0}
                />
            </mesh>
        </Float>
    );
};

// Benzene Rings (Hexagons) - Iconic chemical structure from the intro
const BenzeneRing = ({ position, rotation, scale }) => {
    return (
        <Float speed={1} rotationIntensity={1.5} floatIntensity={1}>
            <mesh position={position} rotation={rotation} scale={scale}>
                {/* Radius 1.5, Tube 0.04, RadialSegments 8, TubularSegments 6 (Hexagon) */}
                <torusGeometry args={[1.5, 0.04, 8, 6]} />
                <meshBasicMaterial color="#ffb700" transparent opacity={0.3} side={THREE.DoubleSide} />
            </mesh>
        </Float>
    );
};

// Floating "Plus" signs representing ionic bonds / chemical math
const BondSign = ({ position, rotation, scale }) => {
    return (
        <Float speed={0.5} rotationIntensity={1} floatIntensity={0.5}>
            <group position={position} rotation={rotation} scale={scale}>
                <mesh>
                    <boxGeometry args={[1, 0.1, 0.1]} />
                    <meshBasicMaterial color="#ff6700" transparent opacity={0.2} />
                </mesh>
                <mesh rotation={[0, 0, Math.PI / 2]}>
                    <boxGeometry args={[1, 0.1, 0.1]} />
                    <meshBasicMaterial color="#ff6700" transparent opacity={0.2} />
                </mesh>
            </group>
        </Float>
    );
};

// Chemical Fumes / Vapor
const Fumes = () => {
    const particles = useMemo(() => {
        return Array.from({ length: 20 }).map(() => ({
            position: [
                (Math.random() - 0.5) * 15,
                (Math.random() - 0.5) * 10 - 5,
                (Math.random() - 0.5) * 5
            ],
            scale: Math.random() * 2 + 1,
            speed: Math.random() * 0.2 + 0.1
        }));
    }, []);

    return (
        <group>
            {particles.map((data, i) => (
                <Float key={`fume-${i}`} speed={data.speed} rotationIntensity={0.5} floatIntensity={0.5}>
                    <mesh position={data.position}>
                        <sphereGeometry args={[data.scale, 16, 16]} />
                        <meshBasicMaterial
                            color="#ff4500"
                            transparent
                            opacity={0.05}
                            depthWrite={false}
                            blending={THREE.AdditiveBlending}
                        />
                    </mesh>
                </Float>
            ))}
        </group>
    );
};

export default function LabScene() {
    // Crystals (Radioactive Debris)
    const crystals = useMemo(() => {
        return Array.from({ length: 25 }).map((_, i) => ({
            position: [
                (Math.random() - 0.5) * 18,
                (Math.random() - 0.5) * 18,
                (Math.random() - 0.5) * 12
            ],
            rotation: [
                Math.random() * Math.PI,
                Math.random() * Math.PI,
                Math.random() * Math.PI
            ],
            scale: [
                Math.random() * 0.4 + 0.2, // Smaller
                Math.random() * 0.6 + 0.2,
                Math.random() * 0.4 + 0.2
            ],
            color: '#ffaa00' // Radioactive Orange
        }));
    }, []);

    // Benzene Rings
    const rings = useMemo(() => {
        return Array.from({ length: 8 }).map((_, i) => ({
            position: [
                (Math.random() - 0.5) * 20,
                (Math.random() - 0.5) * 20,
                (Math.random() - 0.5) * 10 - 2 // Be careful not to block view too much
            ],
            rotation: [0, 0, Math.random() * Math.PI], // Rotate mostly on Z for intro look
            scale: Math.random() * 0.5 + 0.5
        }));
    }, []);

    // Floating Bond Signs
    const bonds = useMemo(() => {
        return Array.from({ length: 12 }).map((_, i) => ({
            position: [
                (Math.random() - 0.5) * 25,
                (Math.random() - 0.5) * 25,
                (Math.random() - 0.5) * 15
            ],
            rotation: [Math.random(), Math.random(), Math.random()],
            scale: 0.3
        }));
    }, []);

    return (
        <div className="lab-scene-container" style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -1, pointerEvents: 'none' }}>
            <Canvas dpr={[1, 2]}>
                <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={45} />

                <ambientLight intensity={0.4} />
                <pointLight position={[10, 10, 10]} intensity={1.5} color="#ff8c00" />
                <pointLight position={[-10, -5, -10]} intensity={1} color="#ff4500" />

                {/* Render Crystals */}
                {crystals.map((crystal, i) => (
                    <Crystal key={`cry-${i}`} {...crystal} />
                ))}

                {/* Render Iconic Benzene Rings */}
                {rings.map((ring, i) => (
                    <BenzeneRing key={`ring-${i}`} {...ring} />
                ))}

                {/* Render Bond Signs */}
                {bonds.map((bond, i) => (
                    <BondSign key={`bond-${i}`} {...bond} />
                ))}

                <Fumes />

                <Sparkles count={60} scale={15} size={2} speed={0.4} opacity={0.4} color="#ff6700" />

                <Environment preset="night" />
                <fog attach="fog" args={['#050404', 8, 30]} />
            </Canvas>
        </div>
    );
}
