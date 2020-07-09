<template>

<div class="header">
    <div class="hackernews-icon">
        <i class="fab fa-spin fa-2x fa-hacker-news-square">
        </i>
    </div>
    <span class="routername">
        <router-link to="/news">News</router-link> |
        <router-link to="/ask">Ask</router-link> |
        <router-link to="/jobs">Jobs</router-link>
    </span>
</div>

</template>


<script>

</script>


<style scoped>

.header {
  color: white;
  background-color: #42b883;
  display: flex; 
  padding: 10px;
}

.header .router-link-exact-active {
  color: #35495e;
}

.header a {
  color: white;
}

.routername {
  padding: 10px 0px 0px 23px;
  font-size: 17px;
}

.hackernews-icon {
    padding-left: 18px;
}

</style>