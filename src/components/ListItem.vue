<template>
  <div>
    <ul class="news-list">
      
      <li v-for="(item, user) in listItems" :key="user" class="post">
      
      <!-- 포인트 영역 -->
      <div class="points">
        {{ item.points || 0 }}
      </div>

      <!-- 기타 정보 영역 -->
      <div>
          <!-- 타이틀 영역 -->
        <p class="news-title">
            <template v-if="item.domain">
                <a :href="item.url">
                    {{ item.title }}
                </a>
            </template>
            <template v-else>
                <router-link :to="`item/${item.id}`">
                    {{ item.title }}
                </router-link>
            </template>
        </p>
        <small class="link-text">
          {{ item.time_ago }} by             
          <router-link 
          v-if="item.user"
          :to="`/user/${item.user}`" class="link-text">
          {{ item.user }}</router-link> 
          <a :href="item.url" v-else>
              {{ item.domain }}
          </a>
        </small>
      </div>
      
      <!-- 
      <a v-bind:href="item.url">{{ item.title }}</a>       
      <small>
      {{ item.time_ago }} by 
      <router-link v-bind:to="'/user' + item.user">{{ item.user }}</router-link> -->
      <!-- <router-link v-bind:to="`/user/${item.user}`">{{ item.user }}</router-link>        
      </small>  -->
        </li>
    </ul>
      
      <!-- 
        <div v-for="(user, use) in this.$store.state.news" v-bind:key="use" >
        <a v-bind:href="user.url">{{ user.title }}</a>
        </div> -->
      
      <!-- <p v-for="(item, user) in this.$store.state.news" v-bind:key="user">
       <a v-bind:href="item.url">{{ item.title }}</a>       
      <small>
        {{ item.time_ago }} by  -->
        <!-- <router-link v-bind:to="'/user' + item.user">{{ item.user }}</router-link> -->
        <!-- <router-link v-bind:to="`/user/${item.user}`">{{ item.user }}</router-link>        
        </small>
      </p> -->

  </div>
</template>

<script>


// import axios from 'axios';// import { fetchNewsList } from'../api/index.js'; 

export default {
    // data(){
    //     return{
    //         ListItems: []            
    //     }        
    // },
    // created() {            
    //         const name = this.$route.name;
    //         if(name === 'news'){
    //             this.$store.dispatch('FETCH_NEWS');
    //         } 
    //         else if(name === 'ask'){
    //             this.$store.dispatch('FETCH_ASKS');
    //         } 
    //         else if(name === 'jobs'){
    //             this.$store.dispatch('FETCH_JOBS');                
    //         }            
    //     },

        
        computed: {
            
            listItems()  
            {         
                return this.$store.state.list;       
                // const name = this.$route.name;                
                // if (name === 'news') {
                //     return this.$store.state.news;
                // } 
                // else if (name === 'ask') {
                //     return this.$store.state.asks;
                // } 
                // else{
                //     return this.$store.state.jobs;
                // }                                            
            }         
        }
        
        
        
        // var vm = this;
        // axios.get('https://api.hnpwa.com/v0/news/1.json')
        // console.log('호출 전: ', this);
        // fetchNewsList()
        //  .then(function(){
        //     console.log('호출 후 :', this);
        //     // vm.users = response.data;
        //  })
        //  .catch(function(error){
        //     console.log(error);
        // });
        
        
        // 1
        // .then(response=> {
        //     //console.log('호출 후: ', this.users)
        //     // 2
        //     this.users = response.data;
        // })
        // .catch(function(error){
        //     console.log(error);
        // });
    
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