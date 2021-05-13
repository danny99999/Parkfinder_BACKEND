<template>

<div class="nav1">
    
    <Navbar></Navbar>
    <br>
    <br>
    <br>
    <b-container class="bv-example-row" fluid="md">
     
        <b-col>
            <Kartica v-for="Kartica in kartice" :key="Kartica" :info="Kartica"></Kartica>
        </b-col>
    </b-container>
</div>
</template>

<script>
let kartice = []

kartice = [
  { 
  url: 'https://storage.glasistre.hr/MediaServer/Photos/Download/81904?Format=1',
  naslov: 'Parking Rojc',
  router: '/rojc'
  },
  {url: 'https://storage.glasistre.hr/MediaServer/Photos/Download/90513?Format=1',
  naslov: 'Parking Karolina',
  router: '/karolina'
  },
  {url: 'https://www.maris.hr/site_media/media/realestate/watermarked/Veruda_igralisteimmobilien_in_croatia1-4.jpg.1280x800_q92.jpg',
  naslov: 'Parking Tržnica',
  router: '/trznica'
  },
  {url: 'https://cdn.discordapp.com/attachments/465282681622757399/806587488574505000/unknown.png',
  naslov: 'Parking Dobrićeva',
  router: '/dobriceva'
  },
  {url: 'https://storage.glasistre.hr/MediaServer/Photos/Download/196799?Format=1',
  naslov: 'Parking Drosina',
  router: '/drosina'
  }
]

import Kartica from '@/components/Kartica.vue';
import Navbar from '@/components/Navbar.vue';

export default {
    name: "Home",
    components: {
        Kartica,
        Navbar,
    },
    data: function() {
        return {
        kartice,
        };
    },
};
</script>

<style>

.nav1 {
    max-width: 100%;
    
}
</style>