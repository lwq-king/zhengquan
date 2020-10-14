import Vue from 'vue'
import VueRouter from 'vue-router'
import allSafe from './AllRouterSafe'
Vue.use(VueRouter);

let Home = () => import('@/Components/Home.vue');
let Login = () => import('@/Components/Login.vue');
let SysIndex = () => import("@/Components/Admin/Child/Index");
let SysjigouCai = () => import("@/Components/Admin/Child/JiGouMenu");
let SyMessage = () => import("@/Components/Admin/Child/Symessage");
let SyActor = () => import("@/Components/Admin/Child/Actor");

const router = new VueRouter({
    routes: [
        {
            path: '/',
            // name: 'Home',
            component: Home,
            children: [
                {
                    path: "index",
                    component: SysIndex
                }, {
                    path: "jigoumenu",
                    component: SysjigouCai
                },
                {
                    path:"jigoujuese",
                    component:SyActor
                },
                {
                    path: "Message",
                    component: SyMessage
                },
                {
                    redirect: "/index",
                    path: "/",
                    component: SysIndex
                },

            ]
        },
        {
            path: '/Login',
            name: "Login",
            component: Login
        }
    ],
    mode: "hash"
});
allSafe(router);

export default router;