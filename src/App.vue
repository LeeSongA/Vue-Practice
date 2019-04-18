<template>
  <div id="app">
    <div id="bg">
      <img alt="background" src="./assets/background.png">
    </div>
    <div id="loginlogout">
      <span id="login">로그인</span>
      <span id="logout">로그아웃</span>
    </div>
    <img alt="logo" src="./assets/logo2.png">
    <div id="openclass">
      <h1>오픈클래스</h1>
    </div>
    <div id="code">
      <span id="enter">
        <input combobox type="number" placeholder="방코드" autocomplete="off" role="combobox" />
        <button class="btn btn-primary">입장</button>
      </span>
    </div>
    <HelloWorld/>
     
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
#loginlogout {
  text-align: right;
}
#login {
  margin-right: 5%;
}
#openclass h1 {
  margin-top: 5%
}
#code {
  width: 100%;
  height: 60px;
  background-color: white;
  border-radius: 30px;
  padding: 15px 10px 15px 20px;
}
#enter button {
  margin-left: 2%;
}
</style>
