<template>
  <div id="app">
    <div id="bg">
      <img alt="background" src="./assets/background.png">
    </div>
    <img alt="logo" src="./assets/logo2.png">
    <HelloWorld msg="오픈클래스"/>
    <div id="code">
      <input combobox type="number" placeholder="방코드" autocomplete="off" role="combobox" />
    </div>
    <button class="btn btn-primary">입장</button>
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#app img {
  margin-top: 10%;
}
#bg {
  position: fixed;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
}
#bg img {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  min-width: 50%;
  min-height: 50%;
}
#code {
  width: 100%;
  height: 60px;
  background-color: white;
  border-radius: 30px;
  padding: 15px 10px 15px 20px;
}
</style>
