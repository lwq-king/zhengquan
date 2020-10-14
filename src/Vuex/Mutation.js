let mutations = {
    //存储总数据的
    saveAlldate(state, arr) {
        state.sysmenu = arr;
    },
    //存储当前页的数据
    pageData(state, arr) {
        state.pageNow = arr;
    },
    //过滤数据
    filterData(state, info) {
        let type = info.type;
        let arr = info.msg;
        let all = [...info.data];
        let filter = [];
        let bool = false;
        for (let key in arr) {
            if (arr[key] != "") {
                bool = true;
                filter = all.filter((val, index) => {
                    return val[key] == arr[key];
                });
                all = filter;
            }
        }
        if (!bool) {
            filter = [...info.data];
        }
        state.filterData = filter;
        state.actionType = type;//记录当前的动作
    },
    //数据增加
    pushSysData(state, obj) {
        let list = {
            id: "",
            menuid: obj.menuid,
            menuname: obj.menuname,
            menutype: obj.menutype,
            menuurl: obj.menuurl,
            menulevel: obj.menulevel,
            parmenuid: "",
            parname: obj.parname
        };
        state.sysmenu.result.push(list);
        //数据操作的状态
        state.updateData = true;
    },
    //修改操作状态
    updateStat(state) {
        state.updateData = false;
    },
    //修改原数据
    updateAllData(state, obj) {
        state.sysmenu.result[obj.index] = {
            id: obj.data.index,
            menuid: obj.data.menuid,
            menuname: obj.data.menuname,
            menutype: obj.data.tymenutypepe,
            menuurl: obj.data.menuurl,
            menulevel: obj.data.menulevel,
            parmenuid: obj.data.parid,
            parname: obj.data.parname
        };
        //数据操作的状态
        state.updateData = true;
    },
    saveActordate(state, arr) {
        state.ActorData = arr;
    },
    //数据增加
    pushActorData(state, obj) {
        let list = {
            actorid: obj.actorid,
            actorname: obj.name,
            type: obj.type,
            name: obj.forGou,
            isguan: "否",
            beizhu: obj.bei,
        };
        state.ActorData.result.push(list);
        console.log(state.ActorData.result);
        //数据操作的状态
        state.updateData = true;
    },
    //修改原数据
    updateActorData(state, obj) {
        state.ActorData.result[obj.index] = {
            actorid: obj.data.actorid,
            actorname: obj.data.actorname,
            type: obj.data.type,
            name: obj.data.name,
            isguan: obj.data.isguan,
            beizhu: obj.data.beizhu
        };
        //数据操作的状态
        state.updateData = true;
    },
}
export default mutations;