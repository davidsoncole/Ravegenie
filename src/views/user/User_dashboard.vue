<template>
  <div class="dashboard">
      <v-container>
          <v-row>
              <v-col cols="12">
                  <h1>Dashboard</h1>
              </v-col>
              <v-col cols="12" md="4" lg="4">
                <v-card
                class="mx-auto"
                >
                    <v-card-text>
                    <p class="display-1 font-weight-bold">
                        20
                    </p>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <p class="body-2 font-weight-medium">Total Tasks</p>
                    </v-card-actions>
                </v-card>
              </v-col>
              <v-col cols="12" md="4" lg="4">
                  <v-card
                class="mx-auto"
                >
                    <v-card-text>
                    <p class="display-1 font-weight-bold">
                        20
                    </p>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <p class="body-2">Total Campaign</p>
                    </v-card-actions>
                </v-card>
              </v-col>
              <v-col cols="12" md="4" lg="4">
                  <v-card
                    class="mx-auto"
                    >
                        <v-card-text>
                        <p class="display-1 font-weight-bold">
                            $4000
                        </p>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <p class="body-2">Main Balance</p>
                        </v-card-actions>
                    </v-card>
              </v-col>
              <v-col cols="12" md="4" lg="4">
                    <v-card
                    class="mx-auto"
                    >
                        <v-card-title class="subtitle-1 font-weight-medium">Current Subscription</v-card-title>
                        <v-card-text>
                        </v-card-text>
                    </v-card>
              </v-col>
              <v-col cols="12" md="8" lg="8">
                  <v-card
                class="mx-auto"
                >
                    <v-card-title class="subtitle-1 font-weight-medium">Campaign Lists</v-card-title>
                    <v-card-text>
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
              <v-col cols="12" md="5" lg="5">
                  <v-card
                    class="mx-auto"
                    >
                        <v-card-title class="subtitle-1 font-weight-medium">Running Promotions</v-card-title>
                        <v-card-text>
                            <v-simple-table>
                                <template v-slot:default>
                                <thead>
                                    <tr>
                                    <th class="text-left">Name</th>
                                    <th class="text-left">Calories</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="item in desserts" :key="item.name">
                                    <td>{{ item.name }}</td>
                                    <td>{{ item.calories }}</td>
                                    </tr>
                                </tbody>
                                </template>
                            </v-simple-table>
                        </v-card-text>
                    </v-card>
              </v-col>
              <v-col cols="12" md="7" lg="7">
                  <v-card
                    class="mx-auto"
                    >
                        <v-card-title class="subtitle-1 font-weight-medium">Transaction History</v-card-title>
                        <v-card-text>
                            <v-simple-table>
                                <template v-slot:default>
                                <thead>
                                    <tr>
                                    <th class="text-left">Name</th>
                                    <th class="text-left">Calories</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="item in desserts" :key="item.name">
                                    <td>{{ item.name }}</td>
                                    <td>{{ item.calories }}</td>
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