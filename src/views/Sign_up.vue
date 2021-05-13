<template>

        <div class="form_group1">
           <Navsignup></Navsignup>
           <div class="form_group2">
            <b-card>
            <h2>Registracija</h2>
            <br>
            <div class="form-group3">
                <input 
                    type="email"
                    v-model="username"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp" 
                    placeholder="Email"/>
                    <br>
                    <label for="exampleInputEmail1">Email</label>
            </div>
            <br>
    
            <div class="form-group4">
                <input 
                    type="password"
                    v-model="password" 
                    class="form-control" 
                    id="exampleInputPassword1"
                    placeholder="Lozinka" />
                    <password-meter :password="password" @score="onScore" />
                    <span v-if="score === 0">Lozinka je slaba</span>
                    <br>
                    <label for="exampleInputPassword1">Lozinka</label>

            </div>
            <br>
       
            <div class="form-group5">
      
                
                <input 
                    type="password"
                    v-model="passwordRepeat" 
                    class="form-control"
                    id="exampleInputPassword2"
                    placeholder="Ponovite lozinku"/>
                    <strong><label class="usporedba" for="passwordnotmatching">{{comparePasswords}}</label></strong>
                    <br>
                    <label class="label1" for="exampleInputPassword2">Ponovite lozinku</label>   
                                   
            </div>
          
            <b-button class="btn" variant="danger" @click="signup">Registriraj se</b-button>
            <br>
            <br>
            <br>
            
            <b-button class="btn2" href="/">Već imam račun</b-button>
            <br>
            <br>
            <br>
            <br>
            </b-card>
            
           </div>

        </div>

</template>

<script>

import passwordMeter from "vue-simple-password-meter";
import { firebase } from '@/firebase';
import Navsignup from '../components/Navsignup.vue';

export default {
    name2: 'Sign_up',
    components: {
        Navsignup,
        passwordMeter
    
    },
 
  data() {
        return {
            username: '',
            password: '',
            passwordRepeat:'',
            score: null
           
        };
    },
    methods: {
        signup() {
            firebase.auth().createUserWithEmailAndPassword(this.username, this.password)
            .then(function() {
                console.log('Uspješna registracija');
                alert("Uspješno ste se registrirali!");
                }
            )
            .catch(function(error) {
                console.error("Došlo je do greške", error),
                alert('Niste upisali dobru lozinku ili e-mail adresu!');
            });
            
            console.log('Nastavak');

        },

        onScore({ score, strength }) {
            console.log(score); // from 0 to 4
            console.log(strength); // one of : 'risky', 'guessable', 'weak', 'safe' , 'secure' 
            this.score = score;
    }
    },

    computed: {
        comparePasswords () {
            return this.password !== this.passwordRepeat ? 'Lozinka se ne podudara' : ''
        }
    },
};
</script>


<style>


div.form_group1 {
    
    border: none;
    background-color:rgb(63, 60, 60);
    height: 800px
    
}

.form_group2 {
   margin-left: 30%;
   margin-right: 30%;


}


div.card {
    background-color: #044ca4;
    color: aliceblue;
    border-radius: 10px;
    max-width:1000%;
    height: 600px;
    
}
 .col {
    padding-left: 0%;

 }

.signup {
    color: aliceblue;
}

.form-group3 {
    margin-left: 30%;
    margin-right: 30%;

}

.form-group5 {
    margin-left: 12%;
    margin-right: 12%;

}
.usporedba {
    color: red;
    font-size: 15px;
    text-align: right;
    margin-left: 60%;
    
}
.label1 {
    margin-left: 0%;
}

.po-password-strength-bar {
  border-radius: 2px;
  transition: all 0.2s linear;
  height: 5px;
  margin-top: 8px;
}

.po-password-strength-bar.risky {
  background-color: #f95e68;
}

.po-password-strength-bar.guessable {
  background-color: #fb964d;
}

.po-password-strength-bar.weak {
  background-color: #fdd244;
}

.po-password-strength-bar.safe {
  background-color: #b0dc53;
}

.po-password-strength-bar.secure {
  background-color: #35cc62;
}



</style>