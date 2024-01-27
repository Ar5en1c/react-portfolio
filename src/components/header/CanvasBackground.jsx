import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import "./CanvasBackground.css";

const ThreeCanvas = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    // Define the orbit radius and initial angle
    const orbitRadius = 10;
    const initialAngle = Math.PI / 4; // Initial orbit angle (45 degrees)

    // Set the initial camera position based on the orbit
    camera.position.x = orbitRadius * Math.cos(initialAngle);
    camera.position.y = orbitRadius * Math.sin(initialAngle);
    camera.position.z = 10; // Adjust the initial Z position as needed

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Particle system setup
    const particleGeometry = new THREE.BufferGeometry();
    const particles = [];
    const particleCount = 10000;

    // Initial position of the sun
    let sunAngle = 0;
    let starAngle = Math.PI; // Starting from the opposite position
    // const orbitRadius = 11; // Radius of the orbit

    // Create Sun-like Star
    const sunGeometry = new THREE.SphereGeometry(0.4, 32, 32); // 1 unit radius, adjust as needed
    const sunMaterial = new THREE.MeshBasicMaterial({ color: 0xe85d04 });
    const sunMesh = new THREE.Mesh(sunGeometry, sunMaterial);
    sunMesh.position.set(5, 7, -11); // Adjust position as needed
    scene.add(sunMesh);

    // Create a glow effect using sprite
    const spriteMaterial = new THREE.SpriteMaterial({
      map: new THREE.TextureLoader().load("../../assets/planet.png"), // Glow texture
      color: 0xfff,
      transparent: true,
      blending: THREE.AdditiveBlending,
    });
    const sprite = new THREE.Sprite(spriteMaterial);
    sprite.scale.set(5, 5, 1); // Scale up the sprite for glow effect
    sunMesh.add(sprite); // Add sprite to sunMesh to keep them together

    // Create Second Star (similar setup to the sun)
    const starGeometry = new THREE.SphereGeometry(0.3, 32, 32); // Adjust size as needed
    const starMaterial = new THREE.MeshBasicMaterial({ color: 0x4dd2ff }); // Different color
    const starMesh = new THREE.Mesh(starGeometry, starMaterial);
    starMesh.position.set(-5, -7, -15); // Initial position, adjust as needed
    scene.add(starMesh);

    // Create a glow effect for the second star (optional)
    const starSpriteMaterial = new THREE.SpriteMaterial({
      map: new THREE.TextureLoader().load("../../assets/planet.png"), // Reuse or different texture
      color: 0xfff,
      transparent: true,
      blending: THREE.AdditiveBlending,
    });
    const starSprite = new THREE.Sprite(starSpriteMaterial);
    starSprite.scale.set(3, 3, 1); // Adjust glow size as needed
    starMesh.add(starSprite);

    for (let i = 0; i < particleCount; i++) {
      const theta = Math.random() * Math.PI * 5;
      const radius = Math.random() * 25;

      const x = radius * Math.cos(theta);
      const y = radius * Math.sin(theta);
      const z = Math.random() * 3;

      particles.push(x, y, z);
    }

    particleGeometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(particles, 3)
    );

    const particleMaterial = new THREE.PointsMaterial({
      color: 0x424242,
      size: 0.05,
    });
    const particleSystem = new THREE.Points(particleGeometry, particleMaterial);

    scene.add(particleSystem);
    // camera.position.z = 10;

    // Set initial rotation of the particle system
    particleSystem.rotation.x = Math.PI / 5; // Adjust this value as needed
    particleSystem.rotation.y = Math.PI / 5; // Adjust this value as needed

    // OrbitControls setup
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;

    // Scroll event handler
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;

      // Calculate the orbit angle based on scroll position
      const orbitAngle =
        initialAngle + (Math.PI / 2) * (scrollPosition / maxScroll);

      // Update camera's position in the orbit
      camera.position.x = orbitRadius * Math.cos(orbitAngle);
      camera.position.y = orbitRadius * Math.sin(orbitAngle);

      camera.lookAt(scene.position); // Keep the camera looking at the center
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Function to handle window resize
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      // Update camera aspect ratio and projection matrix
      camera.aspect = width / height;
      camera.updateProjectionMatrix();

      // Update renderer size
      renderer.setSize(width, height);
    };

    // Add resize event listener
    window.addEventListener("resize", handleResize);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Slow rotation for the sun
      // Update the sun's position
      sunAngle += 0.001;
      sunMesh.position.x = orbitRadius * Math.cos(sunAngle);
      sunMesh.position.y = orbitRadius * Math.sin(sunAngle);

      // Update the second star's position in the opposite direction
      starAngle += 0.001; // Same speed, opposite direction
      starMesh.position.x = orbitRadius * Math.cos(starAngle);
      starMesh.position.y = orbitRadius * Math.sin(starAngle);

      controls.update();
      renderer.render(scene, camera);
    };

    // Start animation
    animate();

    // Cleanup
    return () => {
      mountRef.current.removeChild(renderer.domElement);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      scene.remove(particleSystem);
      particleGeometry.dispose();
      particleMaterial.dispose();
    };
  }, []);

  return <div ref={mountRef} className="three-canvas" />;
};

export default ThreeCanvas;
