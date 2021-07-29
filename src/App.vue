<template>
  <div id="app">
    <NavBar> </NavBar>
    <router-view/>
  </div>
</template>

<script>
import NavBar from './components/NavBar'
export default {
  components:{
    NavBar
  }
  
}
</script>
<style>

@import url('https://fonts.googleapis.com/css2?family=Vollkorn&display=swap');

*{
    font-family: 'Vollkorn', serif;
}

</style>
