<template>
  <div class="about">
    <!--<v-container fluid></v-container>-->
      <Navbar />

      <header class="header_container">
        <v-container>
          <v-row>
            <v-col cols="12" md="6" lg="6">
              <h1>GIVE YOUR BRAND - BUSINESS - EVENTS AND PERSONALITY AN INCREDIBLE REACH.</h1>
              <br>
              <p>Become a Rave Genie influencer. Help brands reach a very wide online media market by sharing viraland Targeted Ads on social media and get paid.</p>
              
              <br>
              <v-btn dark >Get started</v-btn>
            </v-col>
            <v-col cols="12" md="6" lg="6"></v-col>
          </v-row>
        </v-container>
      </header>

      <section class="about">
        <v-container>
          <div class="line"></div>
          <v-row>
            <v-col cols="12" md="2" lg="2"></v-col>
            <v-col cols="12" md="8" lg="8" class="text-center">
              <h2 class="about_title">Let everyone interact with your 'hustle'. RaveGenie gives your brand and business a soul this why we here.</h2>
              <br>
              <p>As a leading on line advertising and internet marketing network, we are committed to providing top quality viral and targeted advertising and marketing 
                services that ensureour clients and users get the best results out of each ad campaign whether they are leveraging on our vast social media reach to boost 
                their brands and businesses or signing up to our totally easy and hassle free In fluencer platform.</p>
            </v-col>
            <v-col cols="12" md="2" lg="2"></v-col>
          </v-row>
        </v-container>
      </section>

      <section>
        <v-container>
          <v-row>
            <v-col cols="12" md="6" lg="6"></v-col>
            <v-col cols="12" md="6" lg="6">
              <h3>...Check out our connects</h3>
              <br>
              <p>Tap into our vast online ad network marketing force and efficient social media marketing tools to grow your brand and business. Join our online marketing
                 force a daily growing online community of people known as Influencers and earn up to $20e veryweek.</p>
              <p>Facebook - 1.7billion active daily Facebook users and a growing Rave Geniead network says there is no limit to how far you can reach. Let's do all the work for you.</p>
              <p>Instagram - Don't just do it for the gram. Make sure it pays you a swell.</p>
              <p>Twitter - Go viral, become the trend. Get more points with every tweet.</p>
            </v-col>
          </v-row>
        </v-container>
      </section>

      <section>
        <v-container>
          <v-row>
            <v-col cols="12" md="6" lg="6">
              <h3>How to place ads in very simple steps</h3>
              
              <p>To place ads in 60 seconds - </p>
              <p>Click on the boost your brand button. Input your information and setup your campaign parameters. Select a social pack. Upload your ads file 
                (image, video or text) with a landing page, pay and then run your campaign.</p>
              <h3>How to become a Rave Genie Influencer in simple steps</h3>
              <p>To become an Influencer - </p>
              <p>Click on the Sign Up button and provide your basic information. Selectany influencer category that you wish to subscribe to 
                (you can subscribe to all the influencer categories). Select a service plan from the price band, pay and start influencing.</p>
              <p>Rave Genie provides you some of the easiest ways to make money online. Tell your friends about our growing community and earn 
                some extra money weekly when they subscribe. Passive income at its best, yeah?</p>
            </v-col>
            <v-col cols="12" md="6" lg="6"></v-col>
          </v-row>
        </v-container>
      </section>

      <section class="dark">
        <v-container>
          <v-row>
            <v-col cols="12" md="6" lg="6"></v-col>
            <v-col cols="12" md="6" lg="6">
              <h3>What we are known for</h3>
              <br>
              <p>We give you control over your hustle. we designed a process that is simple for both influencers and advertisers. 
                All you need to do is get started with us, select a social pack that suits your needs, pay and get down to your business.</p>
              <p>Increase Conversion - The chances of increased conversion are higher when your ads are constantly being shared.</p>
              <p>Product Analysis - Analyze your performance rate and determine how to do better with our track and - report (TAR) tool.</p>
            </v-col>
          </v-row>
        </v-container>
      </section> 

      <section>
        <v-container class="text-center">
          <h3>We know what makes you happy</h3>
          <v-row>
            <v-col cols="12" md="3" lg="3" class="pins">
              <h4>CustomerCareSupport</h4>
              <p>you're never alone. Our team of social experts are readily available to assist you in the best way possible. Were solve your queries in quick-time.</p>
            </v-col>
            <v-col cols="12" md="3" lg="3" class="pins">
              <h4>Track and Report (TAR)</h4>
              <p>we employ modern technology to track how well your ads are doing and give you real-time reports. You'll get suggestions on how to get your ads to do even better.</p>
            </v-col>
            <v-col cols="12" md="3" lg="3" class="pins">
              <h4>Effective Payment Options</h4>
              <p>get paid to your local bank account. Payment settlements are instant and take no more than 24hours.</p>
            </v-col>
            <v-col cols="12" md="3" lg="3" class="pins">
              <h4>The Juicy Stuff</h4>
              <p>enjoy extra perks, bonuses and price reductions when you signup with us. We have something for everyone and a little more.</p>
            </v-col>
          </v-row>
          <p>For complaints and assistance, hit us up at <a href="#">heythere@ravegenie.com</a></p>
        </v-container>
      </section>

      <section>
        <v-container>
          <v-row>
            <v-col cols="12" md="2" lg="2"></v-col>
            <v-col cols="12" md="8" lg="8" class="text-center">
              <h2>This is why people choose us</h2>
              <br>
              <p>Rave Genie gives you control over your hustle. Our process is designed to be simple for both influencers and advertisers. 
                All you need to do is signup, select a social pack that suits your needs, pay and get down to your business.</p>
              <br>
              <v-btn dark >Signup Now</v-btn>
            </v-col>
            <v-col cols="12" md="2" lg="2"></v-col>
          </v-row>
        </v-container>
      </section>

      <Footerbar />
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import Footerbar from '../components/Footerbar'

export default {
  components: { 
    Navbar,
    Footerbar },
  
};
</script>

<style scoped>

@media only screen and (max-width: 959px) {
  section {
    padding-left: 5vh;
    padding-right: 5vh;
  }
}

.header_container {
  padding: 20vh 0;
}

section {
  padding: 10vh 0;
}

.line {
  height: 1px;
  background-color: gray;
  width: 30vw;
  margin: auto;
}

.about_title {
  margin-top: 5vh;
}

.pins {
  margin: 5vh 0;
}

</style>
