<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>OpenClass</span>
        <span class="font-weight-light"> username </span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        flat
        href="https://github.com/sweetcapston"
        target="_blank"
      >
        <span class="mr-2">logout</span>
      </v-btn>
    </v-toolbar>

    <v-content>
      <span>
        <input v-model="classCode" placeholder="클래스코드">
        <v-btn dark @click="test">입장하기</v-btn>
        <v-if >
          <v-btn dark @click="createClass">클래스 생성하기</v-btn>
        </v-if>
      </span>
    
      <v-sheet
        class="d-flex"
      >
        <ClassList :classcode="'1234'" :classname="'SW캡스톤디자인'" :professorname="'윤대균교수님'" :classtime="'월F목F'" id='Class1'/>
        <ClassList :classcode="'5678'" :classname="'인공지능'" :professorname="'김민구교수님'" :classtime="'월B목B'" id='Class2'/>
        <ClassList :classcode="'1111'" :classname="'웹시설'" :professorname="'A교수님'" :classtime="'수D금D'" id='Class3'/>
        <ClassList :classcode="'6789'" :classname="'임베디드'" :professorname="'B교수님'" :classtime="'월C수E'" id='Class4'/>
      </v-sheet>
    </v-content>
  </v-app>
</template>

<script>
import ClassList from './components/ClassList'
export default {
  name: 'App',
  components: {
    ClassList
  }
}
</script>

<style>

</style>

