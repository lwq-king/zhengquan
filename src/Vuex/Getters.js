let getter = {
    readData(state) {
        switch (state.actionType) {
            case "ALL_DATA":
                return state.sysmenu.result;
            case "FILTER_DATA":
                return state.filterData;
        }
    },
    pageData(state) {
        return state.pageNow;
    },
    //获取数据操作状态
    getUpdateData(state){
        return state.updateData;
    },
    getAllData(state){
        return state.sysmenu.result;
    },
    getActorData(state){
        return state.ActorData;
    },
    readActorData(state) {
        switch (state.actionType) {
            case "ALL_DATA":
                return state.ActorData.result;
            case "FILTER_DATA":
                return state.filterData;
        }
    },

}
export default getter;