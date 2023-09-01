<template>
	<div>
		<NavigationBar class="nav" />
		<Nuxt class="nuxt" />
	</div>
</template>

<style lang="postcss">
	:root {
		--nav-height: 30px;
	}
	.nav {
		height: var(--nav-height);
	}
	.nuxt {
		min-height: calc(100vh - var(--nav-height));
	}
</style>
