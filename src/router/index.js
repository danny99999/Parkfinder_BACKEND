import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Rojc from "@/views/Rojc.vue";
import Karolina from "@/views/Karolina.vue";
import Trznica from "@/views/Trznica.vue";
import Dobriceva from "@/views/Dobriceva.vue";
import Drosina from "@/views/Drosina.vue";
import Karta from "@/views/Karta.vue";
import Kalkulator from "@/views/Kalkulator.vue";
import Obavijesti from "@/views/Obavijesti.vue";
import Sign_up from "@/views/Sign_up.vue";
import Sign_in from "@/views/Sign_in.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "Home",
    component: Home
  },

  {
    path: "/rojc",
    name: "Rojc",
    component: Rojc
  },
  {
    path: "/karolina",
    name: "Karolina",
    component: Karolina
  }, 
  {
    path: "/trznica",
    name: "Trznica",
    component: Trznica
  },
  {
    path: "/dobriceva",
    name: "Dobriceva",
    component: Dobriceva
  },  
  {
    path: "/drosina",
    name: "Drosina",
    component: Drosina
  },  
  {
    path: "/karta",
    name: "Karta",
    component: Karta
  },  
  {
    path: "/kalkulator",
    name: "Kalkulator",
    component: Kalkulator
  },  
  {
    path: "/obavijesti",
    name: "Obavijesti",
    component: Obavijesti
  },  
  {
    path: "/sign_up",
    name: "Sign_up",
    component: Sign_up
  },
{
  path: "/",
  name: "Sign_in",
  component: Sign_in
},
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
