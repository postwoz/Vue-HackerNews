<template>
    <div>
      <list-item></list-item>

    <!-- <ul class="news-list">      
      <li v-for="(item, ask) in fetchedAsk" :key="ask" class="post">
      <div class="points">
        {{ item.points }}
      </div>
      
      <div>
        <p class="news-title">          
        <router-link :to="`item/${item.id}`">
            {{ item.title }}
        </router-link>
        </p>
        <small class="link-text">
          {{ item.time_ago }} by
          <router-link :to="`/user/${item.user}`" class="link-text">
          {{ item.user }}</router-link> 
          </small>        
      </div>    
     </li>
    </ul>   -->

</div>
  
</template>

<script>
import ListItem from '../components/ListItem.vue';
import bus from '../utils/bus.js';
// import { fetchAskList } from'../api/index.js';
// import { mapGetters } from 'vuex';
// import { mapState } from 'vuex';

export default {
  components:{
    ListItem
  },  
  created() {
    bus.$emit('start:spinner');
    setTimeout(() => {    
      this.$store.dispatch('FETCH_ASKS')
        .then(() => {
          console.log('fetched');
          bus.$emit('end:spinner');
        })
        .catch((error) => {
          console.log(error);
        });
      }, 2000);    
    }
    // data(){
    //     return{
    //         asks: []
    //     }
    // },
    // computed: {        
        // #1
        // ask(){
        //     return this.$store.state.asks;
        // }
        // #2
        // ...mapState({
        //     ask: state => state.asks
        // })


    //     ...mapGetters([      
    //         'fetchedAsk'
    //     ])
    // },
    // created(){
    //     this.$store.dispatch('FETCH_ASKS');


        // var vm = this;
        //axios.get('https://api.hnpwa.com/v0/news/1.json')
        // fetchAskList()
        //  .then(function(response){            
        //     vm.asks = response.data;
        //  })
        //  .catch(function(error){
        //     console.log(error);
        // });
        // .then(response => console.log(response))
        // .catch()
    // }
}
</script>

<style scoped>

</style>