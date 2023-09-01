<template>
	<button
		class="flex-none w-10 grow-0 bg-gray-100 rounded-r-md hover:bg-gray-200"
		type="button"
		@click="$emit('toggle')"
	>
		<span class="grid place-items-center">
			<img v-if="visible" class="w-4" src="~/assets/svgs/eye.svg" />
			<img v-else class="w-4" src="~/assets/svgs/eye-slash.svg" />
		</span>
	</button>
</template>

<script>
	export default {
		props: {
			visible: false
		},
		method() {}
	}
</script>

<style scoped></style>
