<template>
  <div class="login">
    <Navbar />
        <v-container class="login_content">
            <v-row>
                <v-col cols="12" md="4" lg="4"></v-col>
                <v-col cols="12" md="4" lg="4">
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
                        <v-btn large block dark>Login</v-btn>
                    </v-form>
                    <br>
                    <div class="text-center">
                        <p class="caption">Forgot your password?</p>
                        <div>
                            <p class="font-weight-medium">Don't have an account?</p>
                            <v-btn large block>Register</v-btn>
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
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default {
  components: { 
    Navbar,
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
  
}

.login_content {
    padding-top: 10vh;
}

</style>
