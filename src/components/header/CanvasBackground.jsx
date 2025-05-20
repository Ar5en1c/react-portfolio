import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import "./CanvasBackground.css";

const ThreeCanvas = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    const orbitRadius = 12;
    const initialAngle = Math.PI / 4;

    camera.position.x = orbitRadius * Math.cos(initialAngle);
    camera.position.y = orbitRadius * Math.sin(initialAngle);
    camera.position.z = 10;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(renderer.domElement);

    // Particle system with improved aesthetics
    const particleGeometry = new THREE.BufferGeometry();
    const particles = [];
    const particleCount = 15000; // Increased particle count

    for (let i = 0; i < particleCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI * 2;
      const r = Math.random() * 30;

      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);

      particles.push(x, y, z);
    }

    particleGeometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(particles, 3)
    );

    // Create gradient colors for particles
    const colors = [];
    for (let i = 0; i < particleCount; i++) {
      const mixedColor = new THREE.Color();
      mixedColor.setHSL(Math.random() * 0.1 + 0.6, 0.8, 0.5); // Blue-ish hue
      colors.push(mixedColor.r, mixedColor.g, mixedColor.b);
    }
    particleGeometry.setAttribute(
      "color",
      new THREE.Float32BufferAttribute(colors, 3)
    );

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.03,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });

    const particleSystem = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particleSystem);

    // --- Add Sun-like planet at the center ---
    const sunGeometry = new THREE.SphereGeometry(0.45, 32, 32); // Smaller, more distant sun
    const sunMaterial = new THREE.MeshBasicMaterial({
      color: 0xff7e2d, // Reddish-orange
    });
    const sun = new THREE.Mesh(sunGeometry, sunMaterial);
    sun.position.set(0, 0, 0); // Move sun further back
    scene.add(sun);

    // Add glow effect to the sun
    const sunGlowMaterial = new THREE.MeshBasicMaterial({
      color: 0xffb347, // Soft orange glow
      transparent: true,
      opacity: 0.18,
    });
    const sunGlow = new THREE.Mesh(
      new THREE.SphereGeometry(0.85, 32, 32),
      sunGlowMaterial
    );
    sunGlow.position.set(0, 0, 0);
    scene.add(sunGlow);
    // --- End Sun ---

    // Smooth camera controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.enableZoom = false;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.5;

    // Smooth scroll interaction
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const scrollFactor = scrollPosition / maxScroll;

      particleSystem.rotation.y = scrollFactor * Math.PI;
      camera.position.y = initialAngle + scrollFactor * 5;
      camera.lookAt(scene.position);
    };

    window.addEventListener("scroll", handleScroll);

    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    window.addEventListener("resize", handleResize);

    const animate = () => {
      requestAnimationFrame(animate);

      particleSystem.rotation.y += 0.0005;
      particleSystem.rotation.x += 0.0002;

      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      mountRef.current?.removeChild(renderer.domElement);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);

      particleGeometry.dispose();
      particleMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="three-canvas" />;
};

export default ThreeCanvas;
