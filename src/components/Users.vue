<template>
  <div id="users">
    <h1>Users</h1>
    <hr>
    <div class="row" v-for="user in users">
      <h4>{{ user.name }}</h4> - <span class="reg">{{ getValue(user.registered) }}</span>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        users: [
          {id: 1, name: 'Max', registered: false},
          {id: 2, name: 'Anna', registered: false},
          {id: 3, name: 'Chris', registered: false},
          {id: 4, name: 'Sven', registered: false}
        ]
      }
    },
    computed: {
    },
    methods: {
      getValue(reg){
        return reg ? 'Зарегестрирован' : 'Не зарегестрирован';
      }
    },
    components: {}
  }
</script>

<style>
  h4{
    display: inline-block;
  }
  .reg{
    display: inline-block;
  }
</style>
