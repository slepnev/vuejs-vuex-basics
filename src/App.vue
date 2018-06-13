<template>
  <div id="app">
    <div class="menu">
      <router-link :to="'/'">Home</router-link>
      <hr>
      <router-link :to="'/users'">Users</router-link>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
      }
    },
    computed: {
    },
    methods: {
    },
    components: {
    }
  }
</script>

<style>
  #app {
    margin-top: 60px;
    margin-left: 50px;
    margin-right: 50px;
  }
  .menu{
    float: left;
    width: 100px;
  }
  .content{
    float: left;
    margin-left: 50px;
  }
</style>
