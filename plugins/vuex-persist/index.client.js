import VuexPersistence from 'vuex-persist'
export default ({ store }) => {
	new VuexPersistence({
		key: 'firebase-auth-vuex'
		/* your options */
	}).plugin(store)
}
