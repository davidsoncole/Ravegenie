<template>
  <div class="details">
      <v-container>
          <v-row>
              <v-col cols="12">
                  <v-card
                    class="mx-auto"
                    >
                        <v-toolbar elevation="0">
                          <v-card-title class="subtitle-1 font-weight-medium">Campaign Details</v-card-title>
                        </v-toolbar>
                        <v-card-title>
                            <v-breadcrumbs :items="items">
                              <template v-slot:divider>
                                <v-icon>mdi-chevron-right</v-icon>
                              </template>
                            </v-breadcrumbs>
                          </v-card-title>
                        <v-card-text>
                            <v-row>
                                <v-col cols="12" md="4" lg="4">
                                    <h4>Topic</h4>
                                    <p>Coke Cole's new bottle</p>
                                </v-col>
                                <v-col cols="12" md="8" lg="8">
                                    <h4>Link</h4>
                                    <p>http://interdum_mattis-eget20%nulla-duis_ultricies04consectetuer-tellus_justovel-odiovolutpat-nec-sodales-luctus_torquent</p>
                                </v-col>
                                <v-col cols="12" md="4" lg="4">
                                    <h4>Date</h4>
                                    <p>09-05-2020</p>
                                </v-col>
                                <v-col cols="12" md="8" lg="8">
                                    <h4>Platform</h4>
                                    <p>Facebook</p>
                                </v-col>
                            </v-row>
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
          {
            text: 'Campaign details',
            disabled: false,
            to: '/publisher/details',
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