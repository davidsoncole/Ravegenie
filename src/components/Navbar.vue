<template>
  <div>
    <v-toolbar flat>
      <v-toolbar-title>
          <h5>LOGO</h5>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items class="d-none d-sm-flex">
        <v-btn v-for="link in links" :key="link.text"  text>{{ link.text}}</v-btn>
      </v-toolbar-items>

      <v-toolbar-items class="d-sm-none">
        <v-btn
          @click.stop="drawer = !drawer"
          icon
        >
          <v-icon>mdi-menu</v-icon>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>
            <h1>LOGO</h1>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>

        <v-list-item
          v-for="link in links"
          :key="link.text"
          link
        >
          <v-list-item-content>
            <v-list-item-title>{{ link.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

  </div>
</template>

<script>

export default {
    data() {
        return {
          drawer: null,

          links: [
              {text: 'Home', route: '#'},
              {text: 'About', route: '#about'},
              {text: 'Services', route: '#services'},
              {text: 'Contact', route: '#contact'},
              {text: 'Signup', route: '/Signup'}
          ]
        }
    }
  
};
</script>
