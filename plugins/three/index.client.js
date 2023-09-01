export default function (context, inject) {
	// Loading State Variables
	let scriptLoading = true
	let scriptLoaded = false

	// Add Script to document
	addScript()
	inject('script', { showFeature })

	// Add initScript method to window
	window.initScript = initScript

	function addScript() {
		const script = document.createElement('script')
		script.src = 'https://unpkg.com/es-module-shims@1.3.6/dist/es-module-shims.js'
		script.async = true
		document.head.appendChild(script)

		const three = document.createElement('script')
		three.type = 'importmap'
		three.text = `{
			"imports": {
				"three": "https://unpkg.com/three@0.139.0/build/three.module.js"
			}
		}`
		document.head.appendChild(three)

		const code = document.createElement('script')
		code.type = 'module'
		code.src = 'http://localhost:3000/three/scene.js'
		script.async = true
		document.head.appendChild(code)
	}

	function initScript() {
		scriptLoaded = true
		scriptLoading = false
		console.log('Script finished loading')
	}

	function showFeature() {
		if (scriptLoaded) {
			console.log('Feature showed')
		} else {
			console.log('Script is not loaded yet')
		}
	}
}
