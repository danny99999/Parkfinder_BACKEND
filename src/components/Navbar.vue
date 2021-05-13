<template>
<div>
    <b-navbar toggleable="lg" type="dark" class="stil" fixed="top">
    <img src=@/assets/P.png id="navbarP">
    <b-navbar-brand href="/home">Park Finder</b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    
    <b-collapse id="nav-collapse" is-nav>
     
   
      <b-navbar-nav>
        <b-nav-item href="/karta">Karta</b-nav-item>
        <b-nav-item-dropdown text="Lista Parkinga">
          <b-dropdown-item href="/rojc">Rojc</b-dropdown-item>
          <b-dropdown-item href="/karolina">Karolina</b-dropdown-item>
          <b-dropdown-item href="/trznica">Tržnica</b-dropdown-item>
          <b-dropdown-item href="/dobriceva">Dobrićeva</b-dropdown-item>
          <b-dropdown-item href="/drosina">Drosina</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item href="/kalkulator">Kalkulator</b-nav-item>
      </b-navbar-nav>
      <!-- Desna strana navbara -->
      <b-navbar-nav class="ml-auto">
        <hr>
        <b-nav-item class="Item-1" href="/obavijesti" img>Obavijesti</b-nav-item>
        <b-nav-item-dropdown class="jezik" text="Jezik" right>
          <b-dropdown-item href="#">HRV</b-dropdown-item>
          <b-dropdown-item href="#">ENG</b-dropdown-item>
          <b-dropdown-item href="#">ITA</b-dropdown-item>
          <b-dropdown-item href="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Question_mark_%28black%29.svg/1200px-Question_mark_%28black%29.svg.png">???????</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item class="Item-2" href="#" @click="logout()">Odjava</b-nav-item>

      </b-navbar-nav>
     
    </b-collapse>
   
  </b-navbar>
</div>
</template>

<script>
import {firebase} from '@/firebase';
export default {
  name: "Navbar",
  methods: {
    logout() {
      firebase.auth().signOut().then(()=>{
        this.$router.push({name: "Sign_in"});
      })
    },
  },  
};

</script>

<style scoped>

#navbarP{
  height: 50px;
  padding-right:20px
}



.stil{
  background-color:#044ca4 !important;
  width: 100%;
  height: 7%;

}

hr {
  clear: both;
  display: block;
  width: 100%;               
  background-color: white;
  height: 1px;
}
.Item-1 {
  padding-right:0 ;
  
  
}
.Item-2 {
  padding-right:0 ;
  
}
.ml-auto {
  padding-right: 5%;
}

#nav-collapse {

  background-color: #044ca4;
}

</style>
