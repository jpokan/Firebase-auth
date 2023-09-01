export default {
	// Target: https://go.nuxtjs.dev/config-target
	target: 'static',
	server: {
		host: '0.0.0.0' // default: localhost
	},

	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: 'Firebase-Auth',
		htmlAttrs: {
			lang: 'en'
		},
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: '' },
			{ name: 'format-detection', content: 'telephone=no' }
		],
		link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: ['@/assets/css/main.css', '@/assets/fonts/Outfit.css'],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [
		// '~/plugins/custom-script.client.js',
		// '~/plugins/three/index.client.js',
		'~/plugins/firebase/app.client.js',
		'~/plugins/firebase/google.client.js',
		'~/plugins/firebase/auth.client.js'
		// '~/plugins/vuex-persist/index.client.js'
	],
	// Router middleware
	router: {
		// middleware: ['auth']
	},
	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	publicRuntimeConfig: {},

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
		// https://go.nuxtjs.dev/tailwindcss
		'@nuxt/postcss8'
	],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [],

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {
		postcss: {
			plugins: {
				tailwindcss: {},
				autoprefixer: {}
			}
		}
	}
}
