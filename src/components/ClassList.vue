<template>

  <div id="row">
    <component-m title = 'Class 1' message = "Test" Icon = 'far fa-address-card fa-2x'></component-m>
    <component-m title = 'Class 2' message = "Test" Icon = 'far fa-bell fa-2x'></component-m>
    <component-m title = 'Class 3' message = "Test" Icon = 'far fa-calendar-alt fa-2x'></component-m>
  </div>

</template>

<script type="text/x-template" id="component-m">
  <div class='card'>
    <div class='card-header'>
      <h1 class = 'card-header-title'>{{title}}</h1>
      <i class = 'icon' v-bind></i>
    </div>
    <div class = 'card-content'>
      <p class = 'card-content-text'>{{message}}</p>
    </div>
  </div>
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div.card{
  font-family: 'Open Sans', sans-serif;
  width:330px;
  height:270px;

  margin-left:20px;
  margin-right:20px;

  display:flex;
  flex-direction:column;
}

div.card:nth-chile(1) {
  background-color:#3498db;
}

div.card:nth-chile(2) {
  background-color:#34495e;
}

div.card:nth-child(3){
	background-color:#9b59b6;
}

div.row{
	display:flex;
	justify-content:center;
	margin-top:100px;
}
</style>
