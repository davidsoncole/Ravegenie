<template>
  <div class="advert">
      <v-container>
          <v-row>
              <v-col cols="12">
                  <v-card
                    class="mx-auto"
                    >
                        <v-toolbar elevation="0">
                          <v-card-title class="subtitle-1 font-weight-medium">Place Advert</v-card-title>
                        </v-toolbar>
                        <v-card-text>
                          <v-form>
                            <v-container>
                              <v-row>
                                <v-col cols="12" md="4" lg="4">
                                  <v-select
                                    outlined
                                    label="Select Platform"
                                    persistent-hint="Add the platform you want ad to be shared to"
                                    required
                                  ></v-select>
                                </v-col>
                                <v-col cols="12" md="4" lg="4">
                                  <v-select
                                    outlined
                                    label="Select Day"
                                    persistent-hint="Add the numbers of days you want it live"
                                    required
                                  ></v-select>
                                </v-col>
                                <v-col cols="12" md="4" lg="4"></v-col>
                                <v-col cols="12" md="4" lg="4">
                                  <v-text-field
                                    outlined
                                    label="Link"
                                    hint="Add advert links"
                                    required
                                  ></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                  <v-btn text>Submit</v-btn>
                                </v-col>
                              </v-row>
                            </v-container>
                          </v-form>
                        </v-card-text>
                    </v-card>
              </v-col>
          </v-row>
      </v-container>
  </div>
</template>

<script>
  export default {
    data: () => ({

    }),
  }
</script>

<style scoped>

@media only screen and (max-width: 959px) {
  
}

</style>