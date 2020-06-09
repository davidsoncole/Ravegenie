<template>
  <div>
    <v-toolbar flat dark color="transparent">
      <v-toolbar-title>
          <h5>LOGO</h5>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items>
        <v-btn v-for="link in links" :key="link.text" route :to="link.route"  text>{{ link.text}}</v-btn>
      </v-toolbar-items>
    </v-toolbar>

  </div>
</template>

<script>

export default {
    data() {
        return {
          drawer: null,

          links: [
              {text: 'Sign up', route: '/signup'},
              {text: 'Login', route: '/Login'}
          ]
        }
    }
  
};
</script>
