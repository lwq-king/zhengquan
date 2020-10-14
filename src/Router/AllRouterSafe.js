
import Cookies from 'vue-cookies'
let fun = (router) => {
    router.beforeEach((to, from, next) => {
        //读取缓存   
        let data = Cookies.get("status");
        if (data) {
            next();
        }
        else {
            if (to.name != "Login") {
                next('/Login');
            }
        }
        next();
    });
};
export default fun;