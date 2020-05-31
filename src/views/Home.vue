<template>
  <div class="about">
    <!--<v-container fluid></v-container>-->
      <Navbar />

      <header class="header_container">
        <v-container>
          <v-row>
            <v-col cols="12" md="6" lg="6">
              <h1>Massa wisi tellus pellentesque tortor eget leo pellentesque.</h1>
              <br>
              <p>Nibh eleifend duis amet consequat mauris facilisis blandit fusce, odio sit curabitur nonummy leo sit id pulvinar est diam nulla.</p>
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
              <h2 class="about_title">Duis a, interdum vitae elit sunt, vehicula pretium vitae donec suspendisse ligula, pulvinar libero vulputate sem.</h2>
              <br>
              <p>Amet est at sit vitae maecenas, lacus vehicula, est sed, lectus vel donec, voluptas wisi leo quam imperdiet vestibulum. Eget proin nec velit posuere ligula, gravida nisl elit lobortis tortor, consequat sodales fermentum tortor, libero aliquam vestibulum purus est suspendisse.</p>
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
              <h3>Duis a, interdum vitae elit sunt, vehicula pretium vitae donec suspendisse ligula, pulvinar libero vulputate sem.</h3>
              <br>
              <p>Cum nec phasellus arcu erat tincidunt, non tincidunt interdum malesuada vestibulum amet, ac in elit, porttitor purus nam ipsum justo adipiscing culpa amet per imperdiet, consequat amet enim erat maecenas massa purus, mi vitae et.</p>
              <p>Montes ante blandit ad, sit id pulvinar est diam nulla. Nunc ac elementum ac dui sollicitudin. Eu lacus vel malesuada sed elit cras. Amet est at sit vitae maecenas, lacus vehicula, est sed, lectus vel donec, voluptas wisi leo quam imperdiet vestibulum.</p>
            </v-col>
          </v-row>
        </v-container>
      </section>

      <section>
        <v-container>
          <v-row>
            <v-col cols="12" md="6" lg="6">
              <h3>Duis a, interdum vitae elit sunt, vehicula pretium vitae donec suspendisse ligula, pulvinar libero vulputate sem.</h3>
              <br>
              <p>Cum nec phasellus arcu erat tincidunt, non tincidunt interdum malesuada vestibulum amet, ac in elit, porttitor purus nam ipsum justo adipiscing culpa amet per imperdiet, consequat amet enim erat maecenas massa purus, mi vitae et.</p>
              <p>Montes ante blandit ad, sit id pulvinar est diam nulla. Nunc ac elementum ac dui sollicitudin. Eu lacus vel malesuada sed elit cras. Amet est at sit vitae maecenas, lacus vehicula, est sed, lectus vel donec, voluptas wisi leo quam imperdiet vestibulum.</p>
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
              <h3>Duis a, interdum vitae elit sunt, vehicula pretium vitae donec suspendisse ligula, pulvinar libero vulputate sem.</h3>
              <br>
              <p>Cum nec phasellus arcu erat tincidunt, non tincidunt interdum malesuada vestibulum amet, ac in elit, porttitor purus nam ipsum justo adipiscing culpa amet per imperdiet, consequat amet enim erat maecenas massa purus, mi vitae et.</p>
              <p>Montes ante blandit ad, sit id pulvinar est diam nulla. Nunc ac elementum ac dui sollicitudin. Eu lacus vel malesuada sed elit cras. Amet est at sit vitae maecenas, lacus vehicula, est sed, lectus vel donec, voluptas wisi leo quam imperdiet vestibulum.</p>
            </v-col>
          </v-row>
        </v-container>
      </section>

      <section class="six">
        <v-container>
          <v-row>
            <v-col cols="12" md="2" lg="2"></v-col>
            <v-col cols="12" md="8" lg="8" class="text-center">
              <h2>Duis a, interdum vitae elit sunt, vehicula pretium vitae donec suspendisse ligula, pulvinar libero vulputate sem.</h2>
              <br>
              <p>Amet est at sit vitae maecenas, lacus vehicula, est sed, lectus vel donec, voluptas wisi leo quam imperdiet vestibulum. Eget proin nec velit posuere ligula, gravida nisl elit lobortis tortor, consequat sodales fermentum tortor, libero aliquam vestibulum purus est suspendisse.</p>
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

</style>
