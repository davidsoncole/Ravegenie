<template>
  <div class="foot">
    <v-footer
      padless
      absolute
    >
      <v-card
        flat
        tile
        class="text-center dark"
        width="100%"
      >
        <div>
            <v-row>
                <v-col cols="12" md="3" lg="3"></v-col>
                <v-col cols="12" md="6" lg="6" class="text-center footer_text">
                    <p class="caption">Lacus aenean turpis diam nulla nunc lacus. Morbi arcu sed suscipit nec, tortor sem massa dui dui vitae magna consectetuer massa mauris egestas, lectus vulputate scelerisque, tortor et dui fermentum, commodo molestie sed wisi viverra sociosqu.</p>
                    <v-btn
                        v-for="icon in icons"
                        :key="icon"
                        class="mx-2"
                        icon
                    >
                        <v-icon size="24px">{{ icon }}</v-icon>
                    </v-btn>
                </v-col>
                <v-col cols="12" md="3" lg="3"></v-col>
            </v-row>
          
        </div>

        <v-card-text class="social_icon">
          
        </v-card-text>
      </v-card>
    </v-footer>
  </div>
</template>

<script>
  export default {
    data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }),
  }
</script>

<style scoped>

@media only screen and (max-width: 959px) {
  .footer_text {
    padding-left: 5vh;
    padding-right: 5vh;
  }
}

.foot {
    margin-top: 30vh;
}

.social_icon {
  padding: 0 !important;
}

.dark {
  background-color: rgba(29, 172, 214, .1) !important;
  padding-top: 5vh;
}

</style>