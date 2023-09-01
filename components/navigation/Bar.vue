<template>
	<nav class="flex bg-gray-100 items-center">
		<nuxt-link class="mx-2" to="/">Home</nuxt-link>
		<div class="grow"></div>
		<span class="mx-2">
			<AuthLoadingPulse v-if="isLoggedIn === null" class="w-8 h-4" />
			<button v-else-if="isLoggedIn" @click.prevent="logout">Log Out</button>
			<nuxt-link v-else to="/access">Access</nuxt-link>
		</span>
	</nav>
</template>

<script>
	import { mapActions } from 'vuex'
	export default {
		computed: {
			isLoggedIn() {
				return this.$store.state.auth.isLoggedIn
			}
		},
		methods: {
			...mapActions({
				logout: 'auth/logout'
			})
		}
	}
</script>
