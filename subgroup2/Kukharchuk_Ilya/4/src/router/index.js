import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import FormOne from '../components/FormOne.vue';
import FormTwo from '../components/FormTwo.vue';
import FormThree from '../components/FormThree.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/form-one', component: FormOne },
  { path: '/form-two', component: FormTwo },
  { path: '/form-three', component: FormThree }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
