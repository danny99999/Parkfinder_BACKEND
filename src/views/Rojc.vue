<template>
<div class="Rojc">
    <Navbar></Navbar>
    <br>
    <br>
    <h1>Rojc stranica</h1>
    <center>
    <b-row class="proba">
        <b-col>
        <b-text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi reiciendis fuga error. Excepturi mollitia aspernatur, aliquid aut alias voluptate reprehenderit?</b-text>
        </b-col>
        </b-row>
    </center>
        <br>
        <br>
        <br>
        <br>
</div>   
</template>

<script>
import Navbar from '@/components/Navbar.vue';

export default {
    name: "Rojc",
    components: {
        Navbar
    },
};
</script>
<style>
.Rojc {
    background-color: brown;
}
.proba {
    color: black;
    font-weight: bold;
}
</style>