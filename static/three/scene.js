import * as THREE from 'three'

import { OrbitControls } from 'https://unpkg.com/three@0.139.0/examples/jsm/controls/OrbitControls.js'
import { GLTFLoader } from 'https://unpkg.com/three@0.139.0/examples/jsm/loaders/GLTFLoader.js'
const canvas = document.querySelector('canvas.webgl')
// Scene
const scene = new THREE.Scene()
scene.background = new THREE.Color({
	backgroundColor: 0xcdcdcd
})
// Lights
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
scene.add(ambientLight)
const pointLight = new THREE.PointLight(0xffffff, 0.5)
pointLight.position.x = 2.8
pointLight.position.y = 1.1
pointLight.position.z = 3
scene.add(pointLight)

// GLTF loader
const gltfLoader = new GLTFLoader()

/**
 * Model
 */
gltfLoader.load('http://localhost:3000/three/E2.glb', (gltf) => {
	scene.add(gltf.scene)
})

/**
 * Sizes
 */
const sizes = {
	width: window.innerWidth,
	height: window.innerHeight
}

window.addEventListener('resize', () => {
	// Update sizes
	sizes.width = window.innerWidth
	sizes.height = window.innerHeight

	// Update camera
	camera.aspect = sizes.width / sizes.height
	camera.updateProjectionMatrix()

	// Update renderer
	renderer.setSize(sizes.width, sizes.height)
	renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height, 0.1, 100)
camera.position.x = 5
camera.position.y = 5
camera.position.z = 6

scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)

controls.update()

/**
 * Mouse
 */
const mouse = new THREE.Vector2()

window.addEventListener('mousemove', (event) => {
	mouse.x = (event.clientX / sizes.width) * 2 - 1
	mouse.y = -(event.clientY / sizes.height) * 2 + 1
})

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
	canvas: canvas,
	antialias: true
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.outputEncoding = THREE.sRGBEncoding

/**
 * Animate
 */
const clock = new THREE.Clock()
const tick = () => {
	const elapsedTime = clock.getElapsedTime()

	// Update controls
	controls.update()

	// Render
	renderer.render(scene, camera)

	// Call tick again on the next frame
	window.requestAnimationFrame(tick)
}

tick()
