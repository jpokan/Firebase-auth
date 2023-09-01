<template>
	<div class="grid place-items-center">
		<div class="w-72 border rounded-md p-4">
			<AuthAccess v-if="!isLoggedIn" />
			<AuthLogout v-else />
		</div>
	</div>
</template>

<script>
	import { getAuth } from 'firebase/auth'
	import app from '~/plugins/firebase/app.client.js'
	const auth = getAuth(app)

	export default {
		name: 'AccessPage',
		// layout: 'clean',
		// middleware({ store, route, redirect }) {
		// 	if (store.state.auth.isLoggedIn && route.name === 'access') {
		// 		return redirect('/')
		// 	}
		// },
		computed: {
			isLoggedIn() {
				return this.$store.state.auth.isLoggedIn
			}
		},
		mounted() {}
	}
</script>
