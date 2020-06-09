<template>
  <div class="campaign">
      <v-container>
          <v-row>
              <v-col cols="12">
                  <v-card
                    class="mx-auto"
                    >
                        <v-toolbar elevation="0">
                          <v-card-title class="subtitle-1 font-weight-medium">My Campaign</v-card-title>
                        </v-toolbar>
                        <v-card-subtitle>
                            <v-breadcrumbs :items="items">
                              <template v-slot:divider>
                                <v-icon>mdi-chevron-right</v-icon>
                              </template>
                            </v-breadcrumbs>
                          </v-card-subtitle>
                        <v-card-text>
                            <v-simple-table>
                                <template v-slot:default>
                                <thead>
                                    <tr>
                                    <th class="text-left">Name</th>
                                    <th class="text-left">Calories</th>
                                    <th class="text-left">Name</th>
                                    <th class="text-left"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="item in desserts" :key="item.name">
                                    <td>{{ item.name }}</td>
                                    <td>{{ item.calories }}</td>
                                    <td>{{ item.name }}</td>
                                    <td class="text-right"><v-btn route to="/publisher/details" text>View</v-btn></td>
                                    </tr>
                                </tbody>
                                </template>
                            </v-simple-table>
                        </v-card-text>
                    </v-card>
              </v-col>
          </v-row>
      </v-container>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        desserts: [
          {
            name: 'Frozen Yogurt',
            calories: 159,
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
          },
          {
            name: 'Eclair',
            calories: 262,
          },
        ],

        items: [
          {
            text: 'Campaign',
            disabled: false,
            to: 'user_campaign',
          },
          {
            text: 'My campaign',
            disabled: false,
            to: 'my_campaign',
          },
        ],

      }
    },
  }
</script>

<style scoped>

@media only screen and (max-width: 959px) {
  
}

</style>