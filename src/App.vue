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
  margin: 0;
  padding: 0;
  font-family: '微软雅黑';
  list-style: none;
  -webkit-tap-highlight-color: rgba(0,0,0,0);
  -webkit-user-select: none;
}
a, a:visited {
    color: #333;
}
</style>
