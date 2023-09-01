# How this plugin works?

It uses firebase SDKs and is tightly coupled to the auth namespace of the vuex store.

- app.client.js
  initializes the firebase app and exports the app
- auth.client.js
  imports the app, checks the current authenticated user and sets the default state in vue
  it commits and sets the current user and flow when loaded, here you can also set a cookie to persist some user information
- google.client.js
  exports the Google Provider to allow Sign Up and Sign In flow

For this plugin to work properly, copy the "auth" folders in components, store and middleware directories.
