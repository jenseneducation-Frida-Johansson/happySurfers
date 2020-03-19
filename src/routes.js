import Menu from './views/Menu.vue';
import About from './views/About.vue';
import Order from './views/Order.vue';

export const routes = [
    { path: '/', component: Menu },
    { path: '/about', component: About },
    { path: '/order', component: Order }
];
