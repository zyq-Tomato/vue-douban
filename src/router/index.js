import Vue from 'vue'
import Router from 'vue-router'

import PagesView from '../views/PagesView'
import HomeView from '../views/HomeView'
import MovieView from '../views/MovieView'
import LoginView from '../views/LoginView'
import RegisterView from '../views/RegisterView'
import BookView from '../views/BookView'
import StatusView from '../views/StatusView'
import GroupView from '../views/GroupView'
import SubjectView from '../views/SubjectView'
import DetailView from '../views/DetailView'
import SearchView from '../views/SearchView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/pages/'
    },
    {
      path: '/pages',
      component: PagesView,
      children: [
        {
          path: '',
          redirect: '/pages/home'
        },
        {
          path: 'home',
          name: 'HomeView',
          component: HomeView
        },
        {
          path: 'movie',
          name: 'MovieView',
          component: MovieView
        },
        {
          path: 'book',
          name: 'BookView',
          component: BookView
        },
        {
          path: 'status',
          name: 'StatusView',
          component: StatusView
        },
        {
          path: 'group',
          name: 'GroupView',
          component: GroupView
        },
        {
          path: 'detail',
          name: 'DetailView',
          component: DetailView
        }
      ]
    },
    {
      path: 'login',
      name: 'LoginView',
      component: LoginView
    },
    {
      path: 'register',
      name: 'RegisterView',
      component: RegisterView
    },
    {
      path: '/search',
      name: 'SearchView',
      components: {
        default: PagesView,
        search: SearchView
      }
    },
    {
      path: 'subject',
      name: 'SubjectView',
      component: SubjectView
    },
    {
      path: '*',
      redirect: '/pages/'
    }
  ]
})
