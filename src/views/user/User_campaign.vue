<template>
  <div class="campaign">
      <v-container>
          <v-row>
              <v-col cols="12">
                  <v-card
                    class="mx-auto"
                    >
                        <v-toolbar elevation="0" dark color="cyan">
                          <v-card-title class="subtitle-1 font-weight-medium">Campaign Lists</v-card-title>
                          <v-spacer></v-spacer>
                          <v-btn route to="/publisher/my_campaign" text>
                            view campaign
                          </v-btn>
                        </v-toolbar>
                        <v-card-text>
                            <v-simple-table>
                                <template v-slot:default>
                                <thead>
                                    <tr>
                                    <th class="text-left">Name</th>
                                    <th class="text-left">Calories</th>
                                    <th></th>
                                    <th class="text-left"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="item in desserts" :key="item.name">
                                    <td>{{ item.name }}</td>
                                    <td>{{ item.calories }}</td>
                                    <td class="text-right"></td>
                                    <td class="text-right"><v-btn text>view</v-btn> <v-btn text>share</v-btn></td>
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
      }
    },
  }
</script>

<style scoped>

@media only screen and (max-width: 959px) {
  
}

</style>