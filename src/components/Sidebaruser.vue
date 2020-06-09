<template>
  <div>
    <v-toolbar dense elevation="0">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-toolbar>

    <v-navigation-drawer permanent app dark>
      <v-list-item>
          <v-list-item-content>
          <v-list-item-title class="title">
              LOGO
          </v-list-item-title>
          </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
          dense
          nav
      >
          <v-list-item
          v-for="item in items"
          :key="item.title"
          router :to="item.route"
          link
          color="orange"
          >
          <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
          </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
  export default {
    data: () => ({
        items: [
          { title: 'Dashboard', route: '/publisher/user_dashboard', icon: 'mdi-view-dashboard' },
          { title: 'Transactions', route: '/publisher/user_transactions', icon: 'mdi-cash-multiple' },
          { title: 'Campaign', route: '/publisher/user_campaign', icon: 'mdi-elevation-rise' },
          { title: 'Tasks', route: '/publisher/user_tasks', icon: 'mdi-file-image' },
          { title: 'Settings', route: '/publisher/user_settings', icon: 'mdi-brightness-7' },
          { title: 'Logout', route: '/Logout', icon: 'mdi-close-box' },
        ],
    }),
  }
</script>

<style scoped>

@media only screen and (max-width: 959px) {
  
}


</style>
