<template>
	<div>Index Page</div>
</template>

<script>
	export default {
		name: 'IndexPage',
		computed: {
			user() {
				return this.$store.state.auth.user
			},
			isLoggedIn() {
				return this.$store.state.auth.isLoggedIn
			}
		}
	}
</script>
