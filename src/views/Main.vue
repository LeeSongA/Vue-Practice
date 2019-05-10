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
        @click="logout"
        target="_blank"
      >
        <span class="mr-2">logout</span>
      </v-btn>
    </v-toolbar>

    <v-content>
      <v-container>
        <v-layout>
          <input v-model="classCode" placeholder="클래스코드를 입력하세요." >
          <v-btn dark @click="enterClass">입장하기</v-btn>
        </v-layout>
        <v-layout>    
          <input v-model="className" placeholder="클래스이름을 입력하세요.">
          <v-btn dark @click="createClass">생성하기</v-btn>
        </v-layout>
      </v-container>
      <v-sheet
        class="d-flex"
      >
        <core-class-list id="Class1" :classname="'SW캡스톤디자인'" :professorname="'윤대균교수님'" :classtime="'월F목F'"/>
        <core-class-list id="Class2" :classname="'인공지능'" :professorname="'김민구교수님'" :classtime="'월F목F'"/>
        <core-class-list id="Class3" :classname="'웹시설'" :professorname="'A교수님'" :classtime="'월F목F'"/>
        <core-class-list id="Class4" :classname="'임베디드'" :professorname="'B교수님'" :classtime="'월F목F'"/>
      </v-sheet>
    </v-content>
  </v-app>
</template>

<script>
export default {
  
}
</script>
