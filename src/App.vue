<template>
  <div id="app">
    <div class="upperapp"> 
    </div>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>

import Footer from './components/Footer.vue';
import {firebase} from '@/firebase';
//import router from '@/router';


firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    console.log("***", user.email);
  } else {
    console.log('*** No user');

    //if (router.name !== "Sign_in",  router.name !=="Sign_up") {
      //router.push({name: 'Sign_in'});


      
    //}
    
  }
});


export default {
  name: "App.vue",
  components: {
    Footer,
    
  },
};
</script>

<style>
#app {
  width: 100%;
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}

.upperapp
{
  background-color: #044ca4;
}
</style>
