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
		script.src = 'http://localhost:3000/custom-script.js'
		script.async = true
		document.head.appendChild(script)
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
