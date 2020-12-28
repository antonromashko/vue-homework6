import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import P404 from "@/views/P404.vue";
import List from "@/views/List.vue";
import Item from "@/views/Item.vue";
import About from "@/views/About.vue";
import Contacts from "@/views/Contacts.vue";
import Artists from "@/components/task2/Artists.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    components: {
      default: Home,
      Menu: Home
    }
  },
  {
    path: '/list',
    name: 'List',
    components: {
      default: List,
      Menu: List
    }
  },
  {
    path: '/item/:itemid?',
    name: 'Item',
    components: {
      default: Item,
      Menu: Item
    }

  },
  {
    path: '/contacts',
    name: 'Contacts',
    components: {
      default: Contacts,
      Menu: Contacts
    }
  },
  {
    path: '/artists/:id',
    name: 'Artists',
    components: {
      default: Artists,
      Menu: Artists
    }
  },
  {
    path: '/about',
    name: 'About',
    components: {
      default: About,
      Menu: About
    }
  },
  {
    path: '*',
    component: P404
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
