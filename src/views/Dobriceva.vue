<template>
<div class="Dobriceva">
    <Navbar></Navbar>
    <br>
    <br>
    <br>
    <br>
    <br>
    <h1>Dobriceva stranica</h1>
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
    name: "Dobriceva",
    components: {
        Navbar
    },
};
</script>
<style>
.Titov {
    background-color: orange;
}
.proba {
    color: black;
    font-weight: bold;
}
</style>