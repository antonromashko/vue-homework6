import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import P404 from "@/views/P404.vue";
import List from "@/views/List.vue";
import Item from "@/views/Item.vue";
import About from "@/views/About.vue";
import Contacts from "@/views/Contacts.vue";
import Artists from "@/components/task2/Artists.vue";
import Albums from "@/components/task2/Albums";
import Songs from "@/components/task2/Songs";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    components: {
      Content: Home
    },
    meta: {
      mainNav: true
    }
  },
  {
    path: '/list',
    name: 'List',
    components: {
      Content: List
    },
    meta: {
      mainNav: true
    }
  },
  {
    path: '/item/:itemid?',
    name: 'Item',
    components: {
      Content: Item
    },
    meta: {
      mainNav: true
    }

  },
  {
    path: '/contacts',
    name: 'Contacts',
    components: {
      Content: Contacts
    },
    meta: {
      mainNav: true
    }
  },
  {
    path: '/artists',
    name: 'Artists',
    components: {
      Content: Artists
    },
    meta: {
      mainNav: true
    }
  },
  {
    path: '/artists/:id',
    name: 'Albums',
    components: {
      Content: Artists,
      Albums: Albums
    },
    props: {
      Content: false,
      Albums: true
    },
    meta: {
      mainNav: false
    },
    children: [
            {
                path: ':name',
                name: 'Songs',
                props: {
                    Content: false,
                    Albums: true,
                    Songs: true
                },
                components: {
                    Content: Artists,
                    Albums: Albums,
                    Songs: Songs
                },
                meta: {
                    mainNav: false
                }
            }
        ]

  },
  {
    path: '/about',
    name: 'About',
    components: {
      Content: About
    },
    meta: {
      mainNav: true
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
