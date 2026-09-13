'use client';

import { Suspense, useEffect, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { ContactShadows, Environment, Html, OrbitControls, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

type ModelViewerProps = {
  url: string;
  width?: number;
  height?: number;
  modelXOffset?: number;
  modelYOffset?: number;
  enableMouseParallax?: boolean;
  enableHoverRotation?: boolean;
  environmentPreset?: string;
  fadeIn?: boolean;
  autoRotate?: boolean;
  autoRotateSpeed?: number;
  showScreenshotButton?: boolean;
};

function Loader() {
  return (
    <Html center>
      <div className="rounded-full border border-white/20 bg-slate-900/60 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.25em] text-white">
        Loading
      </div>
    </Html>
  );
}

function MascotModel({
  url,
  modelXOffset = 0,
  modelYOffset = 0,
  enableMouseParallax = true,
  enableHoverRotation = true,
  fadeIn = false,
  autoRotate = false,
  autoRotateSpeed = 0.35,
}: Omit<ModelViewerProps, 'width' | 'height' | 'showScreenshotButton' | 'environmentPreset'>) {
  const { scene } = useGLTF(url);
  const groupRef = useRef<THREE.Group | null>(null);
  const targetMove = useRef({ x: 0, y: 0 });
  const currentMove = useRef({ x: 0, y: 0 });
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (!groupRef.current) return;

    const clone = scene.clone();
    const box = new THREE.Box3().setFromObject(clone);
    const size = box.getSize(new THREE.Vector3());
    const center = box.getCenter(new THREE.Vector3());
    const maxDimension = Math.max(size.x, size.y, size.z) || 1;
    const scale = 3.2 / maxDimension;

    clone.position.sub(center);
    clone.scale.setScalar(scale);
    clone.position.x += modelXOffset;
    clone.position.y += modelYOffset;
    clone.position.z = 0.3;

    clone.traverse((node) => {
      if (node instanceof THREE.Mesh) {
        node.castShadow = true;
        node.receiveShadow = true;

        if (fadeIn) {
          const material = node.material as THREE.MeshStandardMaterial;
          if ('transparent' in material) material.transparent = true;
          if ('opacity' in material) material.opacity = 0;
        }
      }
    });

    groupRef.current.clear();
    groupRef.current.rotation.set(-0.55, 0.75, 0.12);
    groupRef.current.position.set(0, -0.1, 0);
    groupRef.current.add(clone);
    setIsReady(true);
  }, [scene, modelXOffset, modelYOffset, fadeIn]);

  useEffect(() => {
    if (!enableMouseParallax && !enableHoverRotation) return;

    const handlePointerMove = (event: PointerEvent) => {
      const nx = (event.clientX / window.innerWidth) * 2 - 1;
      const ny = (event.clientY / window.innerHeight) * 2 - 1;

      targetMove.current.x = enableMouseParallax ? -nx * 0.4 : 0;
      targetMove.current.y = enableHoverRotation ? ny * 0.35 : 0;
    };

    window.addEventListener('pointermove', handlePointerMove);
    return () => window.removeEventListener('pointermove', handlePointerMove);
  }, [enableMouseParallax, enableHoverRotation]);

  useEffect(() => {
    if (!fadeIn || !groupRef.current) return;

    let animationFrame = 0;
    const fade = () => {
      if (!groupRef.current) return;

      groupRef.current.traverse((node) => {
        if (node instanceof THREE.Mesh) {
          const material = node.material as THREE.MeshStandardMaterial;
          if ('opacity' in material) {
            const currentOpacity = Number(material.opacity ?? 1);
            material.opacity = Math.min(currentOpacity + 0.08, 1);
          }
        }
      });

      if (groupRef.current.children.length > 0) {
        const currentOpacity = groupRef.current.children[0].children.some(() => true);
        if (currentOpacity) {
          animationFrame = window.requestAnimationFrame(fade);
        }
      }
    };

    animationFrame = window.requestAnimationFrame(fade);
    return () => window.cancelAnimationFrame(animationFrame);
  }, [fadeIn]);

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    currentMove.current.x += (targetMove.current.x - currentMove.current.x) * 0.08;
    currentMove.current.y += (targetMove.current.y - currentMove.current.y) * 0.08;

    groupRef.current.rotation.y += autoRotate ? delta * autoRotateSpeed : 0;
    groupRef.current.rotation.y += currentMove.current.x * 0.35;
    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, -0.55 + currentMove.current.y, 0.08);

    if (isReady) {
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.9) * 0.04 + modelYOffset;
    }
  });

  return <group ref={groupRef} />;
}

export default function ModelViewer({
  url,
  width = 420,
  height = 420,
  modelXOffset = 0,
  modelYOffset = 0,
  enableMouseParallax = true,
  enableHoverRotation = true,
  environmentPreset = 'forest',
  fadeIn = false,
  autoRotate = false,
  autoRotateSpeed = 0.35,
  showScreenshotButton = false,
}: ModelViewerProps) {
  const [snapshotUrl, setSnapshotUrl] = useState<string | null>(null);
  const rendererRef = useRef<any>(null);
  const sceneRef = useRef<any>(null);
  const cameraRef = useRef<any>(null);

  const capture = () => {
    const gl = rendererRef.current;
    const scene = sceneRef.current;
    const camera = cameraRef.current;

    if (!gl || !scene || !camera) return;

    const data = gl.domElement.toDataURL('image/png');
    setSnapshotUrl(data);
  };

  return (
    <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-slate-900/20 shadow-2xl shadow-slate-950/20" style={{ width, height }}>
      {showScreenshotButton && (
        <button
          type="button"
          onClick={capture}
          className="absolute right-4 top-4 z-20 rounded-full border border-white/20 bg-slate-900/60 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.24em] text-white backdrop-blur-sm transition hover:bg-slate-800/80"
        >
          Screenshot
        </button>
      )}

      {snapshotUrl && (
        <div className="absolute inset-0 z-30 bg-black/50 backdrop-blur-sm">
          <img src={snapshotUrl} alt="Mascot screenshot" className="h-full w-full object-cover opacity-90" />
        </div>
      )}

      <Canvas
        shadows
        dpr={[1, 2]}
        camera={{ position: [0, 0.1, 4.8], fov: 30 }}
        onCreated={({ gl, scene, camera }) => {
          rendererRef.current = gl;
          sceneRef.current = scene;
          cameraRef.current = camera;
          gl.setClearColor('#000000', 0);
        }}
        style={{ touchAction: 'pan-y pinch-zoom' }}
      >
        <color attach="background" args={['#000000']} />
        <fog attach="fog" args={['#0b1220', 4, 10]} />

        <ambientLight intensity={1.1} />
        <directionalLight position={[2.5, 3, 4]} intensity={2.5} castShadow />
        <directionalLight position={[-4, 2, 3]} intensity={1.2} />

        <Suspense fallback={<Loader />}>
          <MascotModel
            url={url}
            modelXOffset={modelXOffset}
            modelYOffset={modelYOffset}
            enableMouseParallax={enableMouseParallax}
            enableHoverRotation={enableHoverRotation}
            fadeIn={fadeIn}
            autoRotate={autoRotate}
            autoRotateSpeed={autoRotateSpeed}
          />
        </Suspense>

        <ContactShadows position={[0, -1.1, 0]} opacity={0.28} scale={8} blur={1.8} far={4.2} />

        {environmentPreset !== 'none' && <Environment preset={environmentPreset as any} background={false} />}
        <OrbitControls enablePan={false} enableZoom={false} enableRotate={false} />
      </Canvas>
    </div>
  );
}
