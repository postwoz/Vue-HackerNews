<template>
  <div>
    <list-item></list-item>
    <!-- <ul class="news-list">
      <li v-for="(job, jobs) in this.$store.state.jobs" :key="jobs" class="post">
      <div class="points">
        {{ job.points || 0 }}
      </div>
      <div>
        <p class="news-title">    
          <a href="job.url">{{ job.title }}</a>
        </p>
        <small class="link-text">
          {{ job.time_ago }} by
          <router-link :to="`/user/${job.user}`" class="link-text">
          {{ job.domain }}</router-link> 
          <a :href="job.url">
            {{ job.domain }}
          </a>
          </small>        
      </div>    
     </li>
    </ul>   -->

    <!-- <div v-for="(jobs, job) in this.$store.state.jobs" v-bind:key="job" >{{ jobs.title }}</div> -->
    <!-- <p v-for="(job, jobs) in this.$store.state.jobs" v-bind:key="jobs">
      <a v-bind:href="job.url">{{ job.title }}</a>
      <small>{{ job.time_ago }}, {{ job.domain }}</small>
    </p> -->
  </div>
</template>

<script>
import ListItem from '../components/ListItem.vue';
import bus from '../utils/bus.js';

// import { fetchJobsList } from'../api/index.js';

export default {
    components:{
      ListItem,
    },     
    created() {
    bus.$emit('start:spinner');
    setTimeout(() => {    
      this.$store.dispatch('FETCH_JOBS')
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
    //         jobs: []
    //     }
    // },
    // created(){
      
        // //var vm = this;
        // // //axios.get('https://api.hnpwa.com/v0/news/1.json')
        // fetchJobsList()
        // //  .then(function(response){            
        // //     vm.jobs = response.data;
        // //  }) 
        // //  .catch(function(error){
        // //     console.log(error);
        // // });
        // .then(response => this.jobs = response.data)
        // .catch(error => console.log(error));
        
    //     this.$store.dispatch('FETCH_JOBS');
    // }
}
</script>

<style scoped>
.news-list {
  margin: 0;
  padding: 0;
}
.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}
.points {
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #42b883;
}
.news-title {
  margin: 0;
}
.link-text {
  color: #828282;
}
</style>