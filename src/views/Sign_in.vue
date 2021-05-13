<template>
<div>
        <div class="form_group1">
           <Navsignup></Navsignup>
           <div class="form_group2">
            <b-card id="sign">
            <h2>Prijava</h2>
            <br>
            <br>

            <div class="form-group3">
                <input 
                    type="email" 
                    v-model="username" 
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp" 
                    placeholder="Email"/>
                <label for="exampleInputEmail1">Email</label>
            </div>
            <br>
           <br>
            <div class="form-group4">
                <input 
                    type="password"
                    v-model="password"
                    class="form-control" 
                    id="exampleInputPassword1"
                    placeholder="Lozinka" />
                    <label for="exampleInputPassword1">Lozinka</label>
            </div>
            <br>

            <br>
            <br>
            
          

            <b-button class="btn" type="submit" variant="danger" @click="login">Prijava</b-button>
            <br>
            <br>
            <br>
            <b-button href="/sign_up">Nemate račun? Registrirajte se.</b-button>
            </b-card>
           </div>
        </div>
</div>
</template>

<script>



import Navsignup from '../components/Navsignup.vue';
import {firebase} from '@/firebase';

export default {
    name1: 'Sign_in',
    components: {
        Navsignup,
    
    },
    
    data() {
        return {
            username:"",
            password:""
        }
    },
    methods: {
        login() {
            console.log("login..." + this.username);
            console.log(this.$router);
            firebase.auth().signInWithEmailAndPassword(this.username, this.password)
            .then((result)=> {
                console.log('Uspješna prijava', result);
                this.$router.replace({name: 'Home'});
            })
            .catch(function(e) {
                console.error('Greška', e);
                var errorCode = e.code;
                var errorMessage = e.message;
                if (errorCode === 'auth/wrong-password') {
                    alert('Kriva lozinka.');
                } else {
                 alert(errorMessage);
                }
                console.log(e);
            });
        },
    },
    
};
</script>


<style>
div.form_group1 {
    
    border: none;
    background-color:rgb(63, 60, 60);
    height: 666px;
    
}

.form_group2 {
   margin-left: 30%;
   margin-right: 30%;

}

#sign {
    background-color: #044ca4;
    color: aliceblue;
    height: 600px;
    border-radius: 10px;
}

div.card {
   
    border-radius: 10px;
    max-width:100%;
    
}

.signin {
    color: aliceblue;
}

.form-group4 {
    margin-left: 12%;
    margin-right: 12%;
}
.form-group3 {
    margin-left: 12%;
    margin-right: 12%;
}


 
</style>