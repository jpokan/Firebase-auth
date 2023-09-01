<template>
	<div>
		<p class="p-2 my-2">Logged in as {{ user }}</p>
		<AuthButton type="button" action="logout" @logout="logout">Log Out</AuthButton>
		<p class="text-center my-2"><nuxt-link to="/">Go to home</nuxt-link></p>
	</div>
</template>

<script>
	export default {
		computed: {
			user() {
				return this.$store.state.auth.user.name
			}
		},
		methods: {
			logout() {
				this.$store.dispatch('auth/logout')
			}
		}
	}
</script>
