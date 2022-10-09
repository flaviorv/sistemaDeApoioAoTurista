import { createRouter, createWebHashHistory } from "vue-router";
import Emergencia from "@/views/Emergencia.vue";
import Entretenimento from "@/views/Entretenimento.vue";
import Gastronomia from "@/views/Gastronomia.vue";
import Outros from "@/views/Outros.vue";
import Home from "@/views/Home.vue";
import Logup from "@/views/Logup.vue";
import Login from "@/views/Login.vue";
import Carreira from "@/views/Carreira.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/emergencia",
    component: Emergencia,
  },
  {
    path: "/entretenimento",
    component: Entretenimento,
  },
  {
    path: "/gastronomia",
    component: Gastronomia,
  },
  {
    path: "/outros",
    component: Outros,
  },
  {
    path: "/logup",
    component: Logup,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/carreira",
    component: Carreira,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
