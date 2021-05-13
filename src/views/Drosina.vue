<template>
<div class="Drosina">
    <Navbar></Navbar>
    <br>
    <br>
    <br>
    <h1>Drosina stranica</h1>
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
    name: "Drosina",
    components: {
        Navbar
    },
};
</script>
<style>
.Drosina {
    background-color:yellow;
}
.proba {
    color: black;
    font-weight: bold;
}
</style>