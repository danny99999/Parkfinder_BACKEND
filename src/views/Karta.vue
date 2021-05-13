<template>
<div class="Mapa">
    <Navbar></Navbar>
    <br>
    <br>
    <br>
    <br>
    <br>
    <h1>Mapa stranica</h1>
    <br>
    <br>
    <center>
    <b-row class="proba">
        <b-col>
        <b-text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi reiciendis fuga error. Excepturi mollitia aspernatur, aliquid aut alias voluptate reprehenderit?</b-text>
        </b-col>
        </b-row>
    </center>    
</div>   
</template>

<script>
import Navbar from '@/components/Navbar.vue';

export default {
    name: "Mapa",
    components: {
        Navbar
    },
};
</script>
<style>
.Mapa {
    background-color: turquoise;
}
.proba {
    color: black;
    font-weight: bold;
}
</style>