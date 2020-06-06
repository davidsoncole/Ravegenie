<template>
  <div class="webapp">
    <Sidebar />
    
    <v-content style="padding: 0px 0px 0px 0px;">
        <router-view></router-view>
    </v-content>

  </div>
</template>

<script>
import Sidebar from '../components/Sidebar'

  export default {
    components: { 
    Sidebar,

    },

    data: () => ({
        
    }),
  }
</script>

<style scoped>

@media only screen and (max-width: 959px) {
  
}


</style>
