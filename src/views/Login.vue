<template>
  <div class="login">
        <v-container class="login_content">
            <v-row>
                <v-col cols="12" md="4" lg="4"></v-col>
                <v-col cols="12" md="4" lg="4" class="log_form">
                    <div class="text-center">
                        <h2>LOGO</h2>
                    </div>
                    <br>
                    <v-form>
                        <v-text-field
                            label="Enter Email"
                            outlined
                        ></v-text-field>

                        <v-text-field
                            label="Password"
                            outlined
                        ></v-text-field>
                        <br>
                        <v-btn large block dark color="orange">Login</v-btn>
                    </v-form>
                    <br>
                    <div class="text-center">
                        <p class="caption">Forgot your password?</p>
                        <div>
                            <p class="font-weight-medium">Don't have an account?</p>
                            <v-btn to="/signup" large block>Register</v-btn>
                        </div>
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

        }
    }
  
};
</script>

<style scoped>

@media only screen and (max-width: 959px) {
  .log_form {
      padding-left: 10vw !important;
      padding-right: 10vw !important;
  }

}

.login_content {
    padding-top: 10vh;
}

</style>
