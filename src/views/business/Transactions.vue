<template>
  <div class="transactions">
      <v-container>
          <v-row>
              <v-col cols="12">
                  <v-card
                    class="mx-auto"
                    >
                        <v-toolbar elevation="0">
                          <v-card-title class="subtitle-1 font-weight-medium">Transactions</v-card-title>
                        </v-toolbar>
                        <v-card-text>
                          <v-row>
                            <v-col cols="12" md="3" lg="3">
                              <v-card
                              class="mx-auto"
                              >
                                  <v-card-text>
                                  <p class="display-1 font-weight-bold">
                                      $ 4000
                                  </p>
                                  <span>Main Balance</span>
                                  </v-card-text>
                                  <v-card-actions>
                                  </v-card-actions>
                              </v-card>
                            </v-col>
                            <v-col cols="12" md="3" lg="3">
                              <v-card
                              class="mx-auto"
                              >
                                  <v-card-text>
                                  <p class="display-1 font-weight-bold">
                                      $ 400
                                  </p>
                                  <span>Bonus Balance</span>
                                  </v-card-text>
                                  <v-card-actions>
                                      <v-spacer></v-spacer>
                                      <v-btn small depressed>Redeem</v-btn>
                                  </v-card-actions>
                              </v-card>
                            </v-col>
                            <v-col cols="12" md="6" lg="6"></v-col>
                          </v-row>
                            <v-simple-table>
                                <template v-slot:default>
                                <thead>
                                    <tr>
                                    <th class="text-left">Name</th>
                                    <th class="text-left">Calories</th>
                                    <th class="text-left">Name</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="item in desserts" :key="item.name">
                                    <td>{{ item.name }}</td>
                                    <td>{{ item.calories }}</td>
                                    <td>{{ item.name }}</td>
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