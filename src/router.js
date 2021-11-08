import Vue from 'vue'
import Router from 'vue-router';
import Welcome from "./components/Welcome"

Vue.use(Router)

const routes =
    [
        {
            path: '',
            redirect: '/welcome',
        },
        {
            path: '/welcome',
            name: 'welcome',
            component: Welcome
        },
        {
            path: '/repos-list/:username',
            name: 'repos-list',
            component: () => import('./components/ReposList.vue'),
            props: true
        },
        {
            path: '/repo-details/:username/:reponame',
            name: 'repo-details',
            component: () => import('./components/RepoDetails.vue'),
            props: true
        },
    ];

export default new Router({
    linkExactActiveClass: 'active',
    mode: "history",
    routes: routes

})
