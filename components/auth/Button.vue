<template>
	<button
		@click.prevent="$emit(action)"
		class="border p-2 rounded-md w-full transition-colors duration-300 outline outline-2 outline-offset-2 focus:outline-black outline-transparent"
		:class="custom"
	>
		<slot></slot>
	</button>
</template>

<script>
	/**
	 * Set an attribute to action="someAction"
	 * and emits this action back to the "parent" component so that you can do stuff there...
	 */
	export default {
		props: {
			action: String
		},
		computed: {
			custom() {
				if (this.action === 'google') {
					return 'google'
				} else {
					return 'normal'
				}
			}
		}
	}
</script>

<style lang="postcss" scoped>
	.google {
		@apply bg-white text-black border-gray-200 my-2 hover:bg-gray-100;
	}
	.normal {
		@apply bg-black border-black text-white;
	}
</style>
