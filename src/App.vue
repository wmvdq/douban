<template>
  <div id="app">
    
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
    *{
      padding:0px;
      margin:0px;
    }
    div{
      font-size: 0;
    }
    html{
      font-size:26.67vw;
    }
    ul,li{
      list-style: none;
    }
    a{
      text-decoration: none;
    }
</style>
