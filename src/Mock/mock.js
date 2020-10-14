
import MockInfo from 'mockjs'
import Store from '@/Vuex/Store'
import url from 'url'
let BaseUrl = "http://www.maodou.com";
MockInfo.mock(BaseUrl + '/userlogin', 'post', (config) => {
    let jsonpase = JSON.parse(config.body);
    let id = jsonpase.id;
    let pwd = jsonpase.pwd;
    if (id == "admin" && pwd == "123456") {
        return {
            status: 'OK'
        }
    }
    else {
        return {
            status: 'error'
        }
    }

});
MockInfo.mock(BaseUrl + "/gsinfo", "post", () => {
    return {
        result: {
            logo:
                "http://www.maodou.com/static/image/u=3839800234,563381289&fm=26&gp=0.jpg",
            name: "御金汇公司",
            detail: "公司负责东南亚市场, 分管黑马证券、传智证券",
            gsnum: 3,
            xsp: 12,
            synum: 10,
            sydec: 8,
            syasc: 9,
            sykfc: 3
        }
    }
});
MockInfo.mock(BaseUrl + "/geteachartsinfo", "post", () => {
    return {
        result: [
            { value: 335, name: "撤单" },
            { value: 310, name: "待成交" },
            { value: 234, name: "部分成交" },
            { value: 135, name: "完成成交" }
        ]
    }
});
MockInfo.mock(BaseUrl + "/geteachartstable", "post", () => {
    return {
        result: [
            { value: 10, name: "2020年3月" },
            { value: 20, name: "2020年4月" },
            { value: 30, name: "2020年5月" },
            { value: 40, name: "2020年6月" },
            { value: 17, name: "2020年7月" }
        ]
    }
});
MockInfo.mock(BaseUrl + "/api/message", (config) => {
    let jsonpase = JSON.parse(config.body);
    let id = jsonpase.id;
    return {
        result: "系统维护"
    };
});
MockInfo.mock(BaseUrl + "/api/sysmessage", () => {
    return 2;
});
MockInfo.mock(BaseUrl + "/api/syshelp", () => {
    return 3;
});

let sysdata = MockInfo.mock({
    'result|200': [
        {
            id: '@increment()',
            menuid: "@protocol()",
            menuname: "@cname()",
            'menutype|1': ["交易商", "运营中心", "顶层公司/集团"],
            menuurl: "@url()",
            'menulevel|1': ["一级菜单", "二级菜单", "三级菜单"],
            parmenuid: "@protocol()",
            parname: "@cname()"
        }
    ]
});
Store.commit("saveAlldate", sysdata);
//BaseUrl+"/getSyspageinfo"
MockInfo.mock(/http:\/\/www.maodou.com\/getSyspageinfo?[\s\S]*/, (config) => {
    let jsonpase = url.parse(config.url, true).query;
    Store.dispatch('getPageData', jsonpase);

    let array = Store.getters.pageData;
    return {
        result: array
    };
});

let actor = MockInfo.mock({
    'result|200': [
        {
            actorid: "@increment()",
            actorname: "@cname()",
            'type|1': ["交易商", "运营中心", "顶层公司/集团"],
            'name|1': ["开源证券", "于晋惠证券", "默多克证券"],
            'isguan|1': ["是", "否"],
            beizhu: "@protocol()",
        }
    ]
});
Store.commit("saveActordate", actor);
MockInfo.mock(/http:\/\/www.maodou.com\/getActorinfo?[\s\S]*/, (config) => {
    let jsonpase = url.parse(config.url, true).query;
    Store.dispatch('getActorPageData', jsonpase);

    let array = Store.getters.pageData;
    return {
        result: array
    };
});
export default MockInfo;