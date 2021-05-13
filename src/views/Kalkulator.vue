<template>
<div class="bgkalkus">
  <div class="accordion" role="tablist">
    <Navbar></Navbar>
    <br>
    <br>
    <br>
    <br>
    
    <h4 style="padding-top:10px">Odaberite jedan od parkinga</h4>
    <p>*Napomena: zadržavanje više od 5 sati na određenom parkingu smatra se dnevnom kartom čija cijena je ista za svaki parking</p>

    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-1 variant="info">Parking 1</b-button>
      </b-card-header>
      <b-collapse id="accordion-1" accordion="my-accordion" role="tabpanel">
        <b-card-body>
         <b-card-text>Cijena: 6 Kn/h  <br> Radno vrijeme: 12:00 - 22:00 </b-card-text>
          <b-card-text>Ovdje odaberite vrijeme provedeno na parkingu: </b-card-text>
            <b-form-select v-model="selected" :options="options">
            <template #first>
            <b-form-select-option :value="null" disabled>-- Molimo odaberite jednu od opcija --</b-form-select-option>
            </template>
            </b-form-select>
            <div class="mt-3">Konacna cijena: <strong>{{ selected }}  Kn </strong></div>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-2 variant="info">Parking 2</b-button>
      </b-card-header>
      <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
        <b-card-body>
        <b-card-text>Cijena: 5 Kn/h  <br> Radno vrijeme: 09:00 - 19:00 </b-card-text>
          <b-card-text>Ovdje odaberite vrijeme provedeno na parkingu: </b-card-text>
            <b-form-select v-model="selected2" :options="options2">
            <template #first>
            <b-form-select-option :value="null" disabled>-- Molimo odaberite jednu od opcija --</b-form-select-option>
            </template>
            </b-form-select>
            <div class="mt-3">Konacna cijena: <strong>{{ selected2 }}  Kn </strong></div>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-3 variant="info">Parking 3</b-button>
      </b-card-header>
      <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
        <b-card-body>
         <b-card-text>Cijena: 4 Kn/h  <br> Radno vrijeme: 8:00 - 20:00 </b-card-text>
          <b-card-text>Ovdje odaberite vrijeme provedeno na parkingu: </b-card-text>
            <b-form-select v-model="selected3" :options="options3">
            <template #first>
            <b-form-select-option :value="null" disabled>-- Molimo odaberite jednu od opcija --</b-form-select-option>
            </template>
            </b-form-select>
            <div class="mt-3">Konacna cijena: <strong>{{ selected3 }}  Kn </strong></div>
        </b-card-body>
      </b-collapse>
    </b-card>

        <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-4 variant="info">Parking 4</b-button>
      </b-card-header>
      <b-collapse id="accordion-4" accordion="my-accordion" role="tabpanel">
        <b-card-body>
         <b-card-text>Cijena: 6 Kn/h  <br> Radno vrijeme: 11:00 - 21:00 </b-card-text>
          <b-card-text>Ovdje odaberite vrijeme provedeno na parkingu: </b-card-text>
            <b-form-select v-model="selected4" :options="options4">
            <template #first>
            <b-form-select-option :value="null" disabled>-- Molimo odaberite jednu od opcija --</b-form-select-option>
            </template>
            </b-form-select>
            <div class="mt-3">Konacna cijena: <strong>{{ selected4 }}  Kn </strong></div>
        </b-card-body>
      </b-collapse>
    </b-card>

        <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-5 variant="info">Parking 5</b-button>
      </b-card-header>
      <b-collapse id="accordion-5" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>Cijena: 7 Kn/h  <br> Radno vrijeme: 10:00 - 20:00 </b-card-text>
          <b-card-text>Ovdje odaberite vrijeme provedeno na parkingu: </b-card-text>
            <b-form-select v-model="selected5" :options="options5">
            <template #first>
            <b-form-select-option :value="null" disabled>-- Molimo odaberite jednu od opcija --</b-form-select-option>
            </template>
            </b-form-select>
            <div class="mt-3">Konacna cijena: <strong>{{ selected5 }}  Kn </strong></div>
        </b-card-body>
      </b-collapse>
    </b-card>

    <hr>
     
        <div class="kalkulator">
           <strong>Ovdje se nalazi kalkulator za izračun cijene boravka ako ostajete dulje od jednoga dana</strong><br><br>
            <label for="quantity">Unesite broj dana:</label>
            <br>
            <input value="form.quantity" type="number" id="quantity" placeholder="Dani" max="365" />
            <button @click='updateQuantity'>Izračunaj</button>
            <br>
            <br>
            <p>Ukupna cijena: <strong> {{form.total}} Kn {{form.quantity}} </strong></p>
        </div>
    </div>
</div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';

  export default {
    components: {
      Navbar,
    },
    data() {
      return {
        form: {
        quantity: null,
        total: null,
      },
        selected: null,
        options: [
          { value: '6', text: '1 sat' },
          { value: '12', text: '2 sata' },
          { value: '18', text: '3 sata' },
          { value: '24', text: '4 sata' },
          { value: '30', text: '5 sati' },
          { value: '40', text: 'Dnevna' },
        ],
        selected2: null,
        options2: [
          { value: '5', text: '1 sat' },
          { value: '10', text: '2 sata' },
          { value: '15', text: '3 sata' },
          { value: '20', text: '4 sata' },
          { value: '25', text: '5 sati' },
          { value: '40', text: 'Dnevna' },
        ],
        selected3: null,
        options3: [
          { value: '4', text: '1 sat' },
          { value: '8', text: '2 sata' },
          { value: '12', text: '3 sata' },
          { value: '16', text: '4 sata' },
          { value: '20', text: '5 sati' },
          { value: '40', text: 'Dnevna' },
        ],
        selected4: null,
        options4: [
          { value: '6', text: '1 sat' },
          { value: '12', text: '2 sata' },
          { value: '18', text: '3 sata' },
          { value: '24', text: '4 sata' },
          { value: '30', text: '5 sati' },
          { value: '40', text: 'Dnevna' },
        ],
        selected5: null,
        options5: [
          { value: '7', text: '1 sat' },
          { value: '14', text: '2 sata' },
          { value: '21', text: '3 sata' },
          { value: '28', text: '4 sata' },
          { value: '35', text: '5 sati' },
          { value: '40', text: 'Dnevna' },
        ]
      }
    },
     methods: {
    updateQuantity: function() {
        var unos=document.getElementById("quantity").value
        if(unos>0) {
          if(unos==1 || unos>365) 
            {alert('Krivi unos, molimo Vas unesite broj između 2 i 365.')}
          else 
            { this.form.total = unos * 40}
        }
        else {{alert('Krivi unos, usesen je negativan broj ili 0')}}
  }
}
}
</script>

<style lang="scss">
.bgkalkus{
  background-color: aqua;
}
</style>