<template>
<div>
    <b-navbar toggleable="lg" type="dark" class="stil">
    <img src=@/assets/P.png id="navbarP">
    <b-navbar-brand href="/sign_in">Park Finder</b-navbar-brand>
  
    

    <b-collapse id="nav-collapse" is-nav>
      
      <!-- Desna strana navbara -->
      <b-navbar-nav class="ml-auto">
        <hr>
        <b-nav-item-dropdown class="jezik" text="Jezik" right>
          <b-dropdown-item href="#">HRV</b-dropdown-item>
          <b-dropdown-item href="#">ENG</b-dropdown-item>
          <b-dropdown-item href="#">ITA</b-dropdown-item>
          <b-dropdown-item href="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Question_mark_%28black%29.svg/1200px-Question_mark_%28black%29.svg.png">???????</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
export default {
  name: "Navsignup",  
};

</script>

<style scoped>

#navbarP{
  height: 50px;
  padding-right:20px
}

.stil{
  background-color:#044ca4 !important;
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

h2 {
    color: aliceblue;
}

</style>