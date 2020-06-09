<template>
  <div class="settings">
      <v-container>
          <v-row>
              <v-col cols="12">
                  <v-card
                    class="mx-auto"
                    >
                        <v-toolbar elevation="0" dark color="cyan">
                          <v-card-title class="subtitle-1 font-weight-medium">Settings</v-card-title>
                        </v-toolbar>
                        <v-card-text>
                          <v-container>
                            <v-row>
                              <v-col cols="12">
                                <v-expansion-panels focusable accordion>
                                    <v-expansion-panel>
                                        <v-expansion-panel-header>User Profile</v-expansion-panel-header>
                                        <v-expansion-panel-content>
                                        <br>
                                        <h5>Details</h5>
                                        <v-avatar style="width: 100px; height: 100px;">
                                            <img
                                                class="user_img"
                                                src=""
                                                alt=""
                                                style="border-radius: 5px; margin-left: auto;"
                                            >
                                        </v-avatar>
                                        <h4>Unogu Davidson</h4>
                                        <span>example@yahoo.com</span>
                                        <v-row>
                                            <v-col cols="12" md="6" lg="6">
                                                <h5>Balance</h5>
                                            </v-col>
                                            <v-col cols="12" md="3" lg="3">
                                                <p>$4000.00</p>
                                            </v-col>
                                            <v-col cols="12" md="3" lg="3">
                                                <v-btn small text>withdraw</v-btn>
                                            </v-col>
                                            <v-col cols="12" md="6" lg="6">
                                                <h5>Bonus Credits</h5>
                                            </v-col>
                                            <v-col cols="12" md="3" lg="3">
                                                <p>$400.00</p>
                                            </v-col>
                                            <v-col cols="12" md="3" lg="3">
                                                <v-btn small text>Redeem</v-btn>
                                            </v-col>
                                            <v-col cols="12" md="6" lg="6">
                                                <h5>Bank</h5>
                                            </v-col>
                                            <v-col cols="12" md="3" lg="3">
                                            </v-col>
                                            <v-col cols="12" md="3" lg="3">
                                                <h5>United Bank Of Africa (UBA)</h5>
                                            </v-col>
                                        </v-row>
                                    </v-expansion-panel-content>
                                  </v-expansion-panel>
                                  <v-expansion-panel>
                                    <v-expansion-panel-header>Bank Details</v-expansion-panel-header>
                                    <v-expansion-panel-content>
                                      <br>
                                      <h5>Payment Method</h5>
                                      <v-form>
                                        <v-row>
                                          <v-col cols="12" md="4" lg="4">
                                            <v-text-field
                                              outlined
                                              label="Card Number"
                                              hint="Add advert links"
                                              required
                                            ></v-text-field>
                                          </v-col>
                                          <v-col cols="12" md="4" lg="4">
                                            <v-text-field
                                              outlined
                                              label="Cardholder Name"
                                              hint="Add advert links"
                                              required
                                            ></v-text-field>
                                          </v-col>
                                          <v-col cols="12" md="4" lg="4"></v-col>
                                          <v-col cols="12" md="3" lg="3">
                                            <v-text-field
                                              outlined
                                              label="Expiration Date"
                                              hint="Add advert links"
                                              required
                                            ></v-text-field>
                                          </v-col>
                                          <v-col cols="12" md="3" lg="3">
                                            <v-text-field
                                              outlined
                                              label="CVV"
                                              hint="Add advert links"
                                              required
                                            ></v-text-field>
                                          </v-col>
                                          <v-col cols="12" md="6" lg="6"></v-col>
                                          <v-col cols="12">
                                            <v-btn text>Fund</v-btn>
                                          </v-col>
                                        </v-row>
                                      </v-form>
                                    </v-expansion-panel-content>
                                  </v-expansion-panel>
                                  <v-expansion-panel>
                                    <v-expansion-panel-header>Referral</v-expansion-panel-header>
                                    <v-expansion-panel-content>
                                      <br>
                                      <h5>Link</h5>
                                      <v-text-field
                                        v-model="link"
                                        readonly
                                        outlined
                                      ></v-text-field>
                                    </v-expansion-panel-content>
                                  </v-expansion-panel>
                                </v-expansion-panels>
                              </v-col>
                            </v-row>
                          </v-container>
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
      link: "http://donec-suspendisse_ligula-pulvinar%libero_024vulputate"
    }),
  }
</script>

<style scoped>

@media only screen and (max-width: 959px) {
  
}

</style>