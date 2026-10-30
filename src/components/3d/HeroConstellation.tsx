'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export default function HeroConstellation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasWebGL, setHasWebGL] = useState(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleMotionChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };
    mediaQuery.addEventListener('change', handleMotionChange);

    const container = containerRef.current;
    if (!container) return;

    // Check WebGL availability
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) {
        setHasWebGL(false);
        return;
      }
    } catch {
      setHasWebGL(false);
      return;
    }

    let animationFrameId: number;
    let width = container.clientWidth || window.innerWidth;
    let height = container.clientHeight || window.innerHeight;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x0b0e0c, 0.0018);

    const camera = new THREE.PerspectiveCamera(55, width / height, 0.1, 1000);
    camera.position.z = 240;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Group to hold all 3D entities
    const universeGroup = new THREE.Group();
    scene.add(universeGroup);

    // 1. Core Particle Constellation
    const particleCount = 750;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const scales = new Float32Array(particleCount);

    const primaryColor = new THREE.Color('#C7F36B');
    const secondaryColor = new THREE.Color('#A9D957');
    const mutedColor = new THREE.Color('#29332B');

    for (let i = 0; i < particleCount; i++) {
      // Create layered spherical and orbital distribution
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      const radius = 60 + Math.random() * 110;

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);

      const mix = Math.random();
      const nodeColor = mix > 0.65 ? primaryColor : mix > 0.3 ? secondaryColor : mutedColor;
      colors[i * 3] = nodeColor.r;
      colors[i * 3 + 1] = nodeColor.g;
      colors[i * 3 + 2] = nodeColor.b;

      scales[i] = Math.random() * 2.5 + 1.2;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Particle Material
    const pMaterial = new THREE.PointsMaterial({
      size: 2.2,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(geometry, pMaterial);
    universeGroup.add(particles);

    // 2. Orbital Rings (Technical telemetry look)
    const ringGroup = new THREE.Group();
    const ringMat = new THREE.LineBasicMaterial({
      color: 0xc7f36b,
      transparent: true,
      opacity: 0.22,
    });

    const createOrbitRing = (radius: number, tiltX: number, tiltY: number) => {
      const ringGeo = new THREE.BufferGeometry();
      const points: THREE.Vector3[] = [];
      const segments = 64;
      for (let i = 0; i <= segments; i++) {
        const theta = (i / segments) * Math.PI * 2;
        points.push(new THREE.Vector3(Math.cos(theta) * radius, 0, Math.sin(theta) * radius));
      }
      ringGeo.setFromPoints(points);
      const line = new THREE.Line(ringGeo, ringMat);
      line.rotation.x = tiltX;
      line.rotation.y = tiltY;
      return line;
    };

    const ring1 = createOrbitRing(100, Math.PI / 4, 0);
    const ring2 = createOrbitRing(130, -Math.PI / 3.5, Math.PI / 6);
    const ring3 = createOrbitRing(70, Math.PI / 2.2, -Math.PI / 8);

    ringGroup.add(ring1);
    ringGroup.add(ring2);
    ringGroup.add(ring3);
    universeGroup.add(ringGroup);

    // 3. Central Beacon Node
    const centerGeo = new THREE.SphereGeometry(3.5, 16, 16);
    const centerMat = new THREE.MeshBasicMaterial({
      color: 0xc7f36b,
      wireframe: true,
      transparent: true,
      opacity: 0.7,
    });
    const centerNode = new THREE.Mesh(centerGeo, centerMat);
    universeGroup.add(centerNode);

    // Mouse Interaction
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / width) * 2 - 1;
      const y = -((e.clientY - rect.top) / height) * 2 + 1;
      targetX = x * 0.45;
      targetY = y * 0.35;
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });

    // Resize handler
    const onResize = () => {
      if (!container) return;
      width = container.clientWidth;
      height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', onResize);

    // Animation Loop
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const delta = clock.getDelta();

      // Damping mouse rotation
      currentX += (targetX - currentX) * 0.05;
      currentY += (targetY - currentY) * 0.05;

      if (!mediaQuery.matches) {
        universeGroup.rotation.y += delta * 0.12;
        ringGroup.rotation.y += delta * 0.08;
        ringGroup.rotation.z += delta * 0.04;
        centerNode.rotation.y += delta * 0.3;
        centerNode.rotation.x += delta * 0.2;
      }

      universeGroup.rotation.x = currentY;
      universeGroup.rotation.y += currentX * 0.02;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      mediaQuery.removeEventListener('change', handleMotionChange);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(animationFrameId);

      geometry.dispose();
      pMaterial.dispose();
      centerGeo.dispose();
      centerMat.dispose();
      ringMat.dispose();
      renderer.dispose();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  if (!hasWebGL) {
    return (
      <div className="w-full h-full flex items-center justify-center border border-border-subtle bg-bg-secondary/40 rounded-lg p-6">
        <div className="text-center font-mono text-xs text-text-muted">
          <span className="inline-block w-2 h-2 rounded-full bg-accent-primary animate-ping mr-2" />
          WebGL Constellation Inactive · Fallback Matrix Online
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full min-h-[380px] lg:min-h-[500px]">
      <div ref={containerRef} className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing" />
      {/* Editorial telemetry label */}
      <div className="absolute bottom-3 left-3 z-10 flex items-center gap-2 font-mono text-[11px] text-text-muted bg-bg-primary/80 backdrop-blur-md px-2.5 py-1 border border-border-subtle rounded">
        <span className="w-1.5 h-1.5 rounded-full bg-accent-primary animate-pulse" />
        <span>ORBITAL_FIELD // 3D_CONSTELLATION</span>
        <span className="text-accent-primary/60 hidden sm:inline">· INTERACTIVE</span>
      </div>
    </div>
  );
}
