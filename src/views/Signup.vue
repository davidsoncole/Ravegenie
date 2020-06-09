<template>
  <div class="signup">
    <v-toolbar flat light color="transparent">
      <v-toolbar-title>
          <h5>LOGO</h5>
      </v-toolbar-title>
    </v-toolbar>
        <v-container class="signup_content">
            <v-row>
                <v-col cols="12" md="4" lg="4"></v-col>
                <v-col cols="12" md="4" lg="4"  class="sign_form">
                    <div class="text-center">
                        <h2>Hi there! Sign up</h2>
                        <span>Tell us a bit about you, let help you get started</span>
                    </div>
                    <br>
                    
                    <v-row>
                        <v-col cols="12">
                            <span>What would you like to be?</span>
                        </v-col>
                        <v-col cols="12" md="6" lg="6">
                            <v-btn @click="Advertiser = true; Publisher = false"  large block light outlined color="orange">Advertiser</v-btn>
                        </v-col>
                        <v-col cols="12" md="6" lg="6">
                            <v-btn @click="Publisher = true; Advertiser = false" active-class large block light outlined color="orange">Publisher</v-btn>
                        </v-col>
                    </v-row>
                    <v-form @submit.prevent="signup_form">
                        <v-text-field
                            v-model="firstName"
                            label="First Name"
                            :rules="[rules.required]"
                            outlined
                            required
                        ></v-text-field>
                        <v-text-field
                            v-model="lastName"
                            label="Last Name"
                            :rules="[rules.required]"
                            outlined
                            required
                        ></v-text-field>
                        <v-text-field
                            v-model="email"
                            label="Email"
                            :rules="[rules.required, rules.email]"
                            type="email"
                            outlined
                            required
                        ></v-text-field>

                        <v-text-field
                            v-model="password"
                            label="Password"
                            :rules="[rules.required, rules.min]"
                            type="password"
                            name="password"
                            hint="At least 8 characters"
                            outlined
                            required
                        ></v-text-field>
                        <br>
                        <v-btn @click="Advertiser_form" v-if="Advertiser" large block dark color="orange">Become an Advertiser</v-btn>
                        <v-btn @click="Publisher_form" v-if="Publisher" large block dark color="orange">Become a Publisher</v-btn>
                    </v-form>
                    <br>
                    <div class="text-center">
                        <router-link style="text-decoration: none;" to="/login">
                            <p class="caption">Already got an account!</p>
                        </router-link>
                    </div>
                    
                </v-col>
                <v-col cols="12" md="4" lg="4"></v-col>
            </v-row>
        </v-container>
    <Footer />
  </div>
</template>

<script>
import Footer from '../components/Footer'

export default {
  components: {
    Footer

    },

    data() {
        return {
            Advertiser: true,
            Publisher: false,

            firstName: '',
            lastName: '',
            password: '',
            email: '',

            rules: {
                required: value => !!value || 'Required.',
                email: value => {
                    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                    return pattern.test(value) || 'Invalid e-mail.'
                },
                min: v => v.length >= 8 || 'Minimum of 8 characters',
            },

        }
    },

    methods: {
    Advertiser_form() {
      this.$store
        .dispatch("register_advertiser", {
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          password: this.password,
        })
        .then(success => {
            this.$router.push('/Mail_verification')
        });
    },

    Publisher_form() {
      this.$store
        .dispatch("register_publisher", {
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          password: this.password,
        })
        .then(success => {
            this.$router.push('/Verify_mail')
        });
    },
    
  },
  
};
</script>

<style scoped>

@media only screen and (max-width: 959px) {
  .sign_form {
      padding-left: 10vw !important;
      padding-right: 10vw !important;
  }
}

.signup_content {
    padding-top: 10vh;
    padding-bottom: 20vh;
}

</style>
