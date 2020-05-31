<template>
  <div>
    <v-toolbar flat>
      <v-toolbar-title>
          <h5>LOGO</h5>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items>
        <v-btn v-for="link in links" :key="link.text" text>{{ link.text}}</v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>

export default {
    data() {
        return {
            links: [
                {text: 'Home', route: '/'},
                {text: 'About', route: '/about'},
                {text: 'Services', route: '/services'},
                {text: 'Contact', route: '/contact'},
                {text: 'Signup', route: '/Signup'}
            ]
        }
    }
  
};
</script>
