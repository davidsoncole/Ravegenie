<template>
  <div class="webapp">
    <Sidebaruser />
    
    <v-content style="padding: 0px 0px 0px 0px;">
        <router-view></router-view>
    </v-content>

  </div>
</template>

<script>
import Sidebaruser from '../components/Sidebaruser'

  export default {
    components: { 
    Sidebaruser,

    },

    data: () => ({
        
    }),
  }
</script>

<style scoped>

@media only screen and (max-width: 959px) {
  
}


</style>
