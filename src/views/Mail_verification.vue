<template>
  <div class="mail">
        <v-container class="mail_content">
            <v-row>
                <v-col cols="12" md="4" lg="4"></v-col>
                <v-col cols="12" md="4" lg="4" class="text-center">
                    <img class="mail_img" src="../assets/img/mail_sent.svg" alt="mail sent">
                    <br> <br>
                    <h2>Verification e-mail sent</h2>
                    <p>Please check your email and click on the verification link to start enjoy all the benefit Rave genie has to offer.</p>
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
    },

    created() {
      this.$store.dispatch('retrieveAdvertiser')
    },
  
};
</script>

<style scoped>

@media only screen and (max-width: 959px) {
    
  
}

.mail_content {
    padding-top: 10vh;
}

.mail_img {
    width: 200px;
    margin-top: 5vh;
}

</style>
