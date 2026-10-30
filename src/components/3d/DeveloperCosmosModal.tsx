'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { X, ExternalLink, Orbit, Layers, Award, Briefcase, Code } from 'lucide-react';
import { PROJECTS_DATA, EXPERIENCES_DATA, HACKATHONS_DATA, SKILLS_DATA } from '@/data/portfolioData';
import { soundFx } from '@/lib/sound';

interface DeveloperCosmosModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateToSection: (sectionId: string) => void;
}

interface CosmosNodeData {
  id: string;
  name: string;
  type: 'project' | 'experience' | 'achievement' | 'skill';
  targetSection: string;
  detail: string;
  tech?: string[];
  position: [number, number, number];
  color: string;
}

export default function DeveloperCosmosModal({
  isOpen,
  onClose,
  onNavigateToSection,
}: DeveloperCosmosModalProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const [selectedNode, setSelectedNode] = useState<CosmosNodeData | null>(null);

  useEffect(() => {
    if (!isOpen) return;

    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0b0e0c);
    scene.fog = new THREE.FogExp2(0x0b0e0c, 0.002);

    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    camera.position.set(0, 70, 200);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Nodes dataset
    const nodes: CosmosNodeData[] = [
      // Projects
      ...PROJECTS_DATA.map((p, idx) => {
        const angle = (idx / PROJECTS_DATA.length) * Math.PI * 2;
        const radius = 65;
        return {
          id: p.id,
          name: p.title,
          type: 'project' as const,
          targetSection: 'projects',
          detail: p.summary,
          tech: p.technologies,
          position: [Math.cos(angle) * radius, (Math.random() - 0.5) * 15, Math.sin(angle) * radius] as [number, number, number],
          color: '#C7F36B',
        };
      }),
      // Experience
      ...EXPERIENCES_DATA.map((e, idx) => {
        const angle = (idx / EXPERIENCES_DATA.length) * Math.PI * 2 + 0.5;
        const radius = 105;
        return {
          id: e.id,
          name: `${e.role} @ ${e.organization}`,
          type: 'experience' as const,
          targetSection: 'experience',
          detail: e.highlights[0],
          tech: e.technologies,
          position: [Math.cos(angle) * radius, (Math.random() - 0.5) * 20, Math.sin(angle) * radius] as [number, number, number],
          color: '#A9D957',
        };
      }),
      // Achievements
      ...HACKATHONS_DATA.slice(0, 3).map((h, idx) => {
        const angle = (idx / 3) * Math.PI * 2 + 1.2;
        const radius = 145;
        return {
          id: h.id,
          name: h.title,
          type: 'achievement' as const,
          targetSection: 'achievements',
          detail: h.achievement,
          tech: h.technologies,
          position: [Math.cos(angle) * radius, (Math.random() - 0.5) * 25, Math.sin(angle) * radius] as [number, number, number],
          color: '#F0F3ED',
        };
      }),
    ];

    // Node Meshes
    const nodeMeshes: THREE.Mesh[] = [];
    const interactiveGroup = new THREE.Group();
    scene.add(interactiveGroup);

    // Starfield background
    const starCount = 600;
    const starGeo = new THREE.BufferGeometry();
    const starPos = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount * 3; i++) {
      starPos[i] = (Math.random() - 0.5) * 600;
    }
    starGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
    const starMat = new THREE.PointsMaterial({ color: 0x3b4a3e, size: 1.5, transparent: true, opacity: 0.6 });
    const stars = new THREE.Points(starGeo, starMat);
    scene.add(stars);

    // Orbital guide rings
    [65, 105, 145].forEach((r) => {
      const ringGeo = new THREE.BufferGeometry();
      const pts: THREE.Vector3[] = [];
      for (let i = 0; i <= 64; i++) {
        const th = (i / 64) * Math.PI * 2;
        pts.push(new THREE.Vector3(Math.cos(th) * r, 0, Math.sin(th) * r));
      }
      ringGeo.setFromPoints(pts);
      const ringLine = new THREE.Line(ringGeo, new THREE.LineBasicMaterial({ color: 0x29332b, transparent: true, opacity: 0.5 }));
      scene.add(ringLine);
    });

    // Central sun / core identity
    const sunGeo = new THREE.IcosahedronGeometry(7, 2);
    const sunMat = new THREE.MeshBasicMaterial({ color: 0xc7f36b, wireframe: true });
    const sun = new THREE.Mesh(sunGeo, sunMat);
    scene.add(sun);

    // Create interactive meshes for each node
    nodes.forEach((data) => {
      const geo =
        data.type === 'project'
          ? new THREE.BoxGeometry(4.5, 4.5, 4.5)
          : data.type === 'experience'
          ? new THREE.OctahedronGeometry(3.8)
          : new THREE.TetrahedronGeometry(4);

      const mat = new THREE.MeshBasicMaterial({
        color: new THREE.Color(data.color),
        wireframe: true,
      });

      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.set(...data.position);
      mesh.userData = data;
      interactiveGroup.add(mesh);
      nodeMeshes.push(mesh);
    });

    // Raycaster for mouse interaction
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const handlePointerDown = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(nodeMeshes);

      if (intersects.length > 0) {
        const clickedMesh = intersects[0].object as THREE.Mesh;
        const nodeData = clickedMesh.userData as CosmosNodeData;
        setSelectedNode(nodeData);
        soundFx.playSelect();
      }
    };

    container.addEventListener('pointerdown', handlePointerDown);

    // Mouse drag rotation
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };

    const handleMouseDown = (e: MouseEvent) => {
      isDragging = true;
      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const deltaX = e.clientX - previousMousePosition.x;
      const deltaY = e.clientY - previousMousePosition.y;

      interactiveGroup.rotation.y += deltaX * 0.005;
      interactiveGroup.rotation.x += deltaY * 0.005;

      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const handleMouseUp = () => {
      isDragging = false;
    };

    container.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    // Resize
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    // Keydown Esc to close
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);

    // Animation Loop
    let reqId: number;
    const animate = () => {
      reqId = requestAnimationFrame(animate);
      if (!isDragging) {
        interactiveGroup.rotation.y += 0.0015;
      }
      sun.rotation.y += 0.006;
      sun.rotation.x += 0.004;

      nodeMeshes.forEach((m) => {
        m.rotation.x += 0.01;
        m.rotation.y += 0.012;
      });

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(reqId);
      container.removeEventListener('pointerdown', handlePointerDown);
      container.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('keydown', handleKeyDown);

      renderer.dispose();
      sunGeo.dispose();
      sunMat.dispose();
      starGeo.dispose();
      starMat.dispose();
      nodeMeshes.forEach((m) => {
        m.geometry.dispose();
        if (Array.isArray(m.material)) {
          m.material.forEach((mat) => mat.dispose());
        } else {
          m.material.dispose();
        }
      });
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Interactive 3D Developer Cosmos"
      className="fixed inset-0 z-50 bg-bg-primary/95 backdrop-blur-xl flex flex-col animate-in fade-in duration-300"
    >
      {/* Top Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-border-subtle bg-bg-primary/80">
        <div className="flex items-center gap-3">
          <Orbit className="w-5 h-5 text-accent-primary animate-spin" style={{ animationDuration: '8s' }} />
          <div>
            <h2 className="font-heading font-bold text-sm tracking-wide text-text-primary uppercase">
              Interactive Developer Universe // Cosmos Telemetry
            </h2>
            <p className="font-mono text-xs text-text-muted">
              Empirical orbital map · Drag to rotate · Click nodes to inspect field artifacts
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-4 font-mono text-xs text-text-secondary">
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 border border-accent-primary bg-accent-primary/20" /> Projects (Inner Ring)
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 border border-accent-secondary bg-accent-secondary/20" /> Experience (Mid Ring)
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 border border-text-primary bg-text-primary/20" /> Achievements (Outer Ring)
            </span>
          </div>

          <button
            onClick={() => {
              soundFx.playClick();
              onClose();
            }}
            className="p-2 rounded border border-border-subtle text-text-secondary hover:text-accent-primary hover:border-accent-primary transition-colors focus:outline-none focus:ring-1 focus:ring-accent-primary"
            aria-label="Close 3D Cosmos"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* 3D Canvas Viewport */}
      <div className="relative flex-1 w-full h-full overflow-hidden">
        <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

        {/* Selected Node Overlay Card */}
        {selectedNode && (
          <div className="absolute bottom-6 left-6 right-6 md:right-auto md:w-96 p-5 rounded-lg border border-accent-primary/50 bg-bg-secondary/95 backdrop-blur-md shadow-2xl corner-bracket animate-in slide-in-from-bottom-4 duration-200">
            <div className="flex items-center justify-between mb-2">
              <span className="inline-flex items-center gap-1.5 font-mono text-xs uppercase px-2 py-0.5 rounded border border-accent-primary/30 text-accent-primary bg-accent-primary/10">
                {selectedNode.type === 'project' && <Layers className="w-3.5 h-3.5" />}
                {selectedNode.type === 'experience' && <Briefcase className="w-3.5 h-3.5" />}
                {selectedNode.type === 'achievement' && <Award className="w-3.5 h-3.5" />}
                {selectedNode.type}
              </span>
              <button
                onClick={() => setSelectedNode(null)}
                className="text-text-muted hover:text-text-primary text-xs font-mono"
              >
                [ESC DISMISS]
              </button>
            </div>

            <h3 className="font-heading font-bold text-base text-text-primary mb-1">
              {selectedNode.name}
            </h3>

            <p className="font-sans text-xs text-text-secondary line-clamp-3 mb-3">
              {selectedNode.detail}
            </p>

            {selectedNode.tech && (
              <div className="flex flex-wrap gap-1.5 mb-4">
                {selectedNode.tech.slice(0, 4).map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[10px] text-text-muted bg-bg-elevated px-2 py-0.5 rounded border border-border-subtle"
                  >
                    {t}
                  </span>
                ))}
              </div>
            )}

            <button
              onClick={() => {
                soundFx.playClick();
                onNavigateToSection(selectedNode.targetSection);
                onClose();
              }}
              className="w-full inline-flex items-center justify-center gap-2 font-mono text-xs font-semibold py-2 px-3 rounded bg-accent-primary text-bg-primary hover:bg-accent-secondary transition-colors"
            >
              <span>View Full Entry in #{selectedNode.targetSection}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

        {/* Instructions badge */}
        <div className="absolute top-4 left-6 pointer-events-none hidden sm:block">
          <div className="font-mono text-[11px] text-text-muted bg-bg-primary/70 backdrop-blur border border-border-subtle px-3 py-1.5 rounded">
            Left Click + Drag: Orbit Camera · Click wireframe geometries to inspect field records
          </div>
        </div>
      </div>
    </div>
  );
}
