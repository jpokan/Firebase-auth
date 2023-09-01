<template>
	<div>
		<form v-if="flow">
			<section class="grid grid-cols-1 gap-2 my-2">
				<label class="text-xs" for="email">Email Address</label>
				<input class="rounded-md" v-model="email" name="email" id="email" type="email" />
				<label class="text-xs" for="password">Password</label>
				<div class="flex">
					<input class="w-full rounded-l-md" v-model="password" name="password" id="Password" :type="type" />
					<AuthEye @toggle="toggle" :visible="visible" />
				</div>
			</section>
			<section class="error">{{ error }}</section>
			<section v-if="flow === 'login'">
				<AuthButton type="submit" action="login" @login="login">Log In</AuthButton>
				<AuthButton type="button" action="google" @google="google">
					<div class="flex gap-6 justify-center">
						<img src="~/assets/svgs/google.svg" alt="" /><span>Log in with Google</span>
					</div>
				</AuthButton>
				<div class="text-center my-2">
					<nuxt-link to="" class="text-xs font-semibold">Forgot password?</nuxt-link>
					<span class="text-xs">or</span>
					<button @click.prevent="signupFlow" class="text-xs font-semibold">Sign Up</button>
				</div>
			</section>
			<section v-if="flow === 'signup'">
				<AuthButton type="submit" action="signup" @signup="signup">Sign Up</AuthButton>
				<AuthButton type="button" action="google" @google="google">
					<div class="flex gap-6 justify-center">
						<img src="~/assets/svgs/google.svg" alt="" />
						<span>Sign Up with Google</span>
					</div>
				</AuthButton>
				<div class="text-center my-2">
					<p class="text-xs">
						By clicking Sign Up or Sign Up with Google, you agree to our
						<nuxt-link to="/terms-and-conditions" class="font-semibold underline">Terms and Conditions</nuxt-link> and
						<nuxt-link to="/privacy-statement" class="font-semibold underline">Privacy Statement</nuxt-link>.
					</p>
					<p class="my-2">
						<span class="text-xs">Already have an account?</span>
						<button @click.prevent="loginFlow" class="text-xs font-semibold">Log In</button>
					</p>
				</div>
			</section>
		</form>
		<div v-else>
			<AuthLoading />
		</div>
	</div>
</template>

<script>
	import { onAuthStateChanged, getAuth } from 'firebase/auth'
	import app from '~/plugins/firebase/app.client.js'
	const auth = getAuth(app)

	export default {
		data() {
			return {
				email: '',
				password: '',
				visible: false
			}
		},
		computed: {
			flow() {
				return this.$store.state.auth.flow
			},
			type() {
				if (!this.visible) {
					return 'password'
				}
				return 'text'
			},
			error() {
				return this.$store.state.auth.error
			}
		},
		methods: {
			redirectToHome() {
				onAuthStateChanged(auth, (user) => {
					if (user) {
						// Check if user email is verified
						// if(user.emailVerified){
						// 	console.log('user email is verified');
						// }

						// Redirect after successful login or signup
						return this.$router.push('/')
					}
				})
			},
			toggle() {
				this.visible = !this.visible
			},
			signupFlow() {
				this.$store.commit('auth/SET_FLOW', 'signup')
			},
			loginFlow() {
				this.$store.commit('auth/SET_FLOW', 'login')
			},
			login() {
				this.$store.dispatch('auth/emailSignIn', { email: this.email, password: this.password })
				// .then(() => this.redirectToHome())
			},
			signup() {
				this.$store.dispatch('auth/emailCreateUser', { email: this.email, password: this.password })
				// .then(() => this.redirectToHome())
			},
			google() {
				this.$store.dispatch('auth/google')
				// .then(() => this.redirectToHome())
			}
		}
	}
</script>

<style lang="postcss" scoped>
	/* Reload manually to see changes https://github.com/tailwindlabs/tailwindcss/issues/4962 */
	input {
		@apply p-2 bg-gray-100;
	}
	.error {
		@apply text-xs text-red-500 my-2 text-right min-h-[1rem];
	}
</style>
