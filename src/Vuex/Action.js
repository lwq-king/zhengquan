let actions = {
    getBack({ state, commit }) {
        console.log(state.loginStatus);
        return state.meta.allowBack;
    },
    getPageData({ state, commit }, data) {
        let current = data.current;
        let pagenum = data.pagenum;
        let all = null;
        switch (state.actionType) {
            case "ALL_DATA":
                all = [...state.sysmenu.result];
                break;
            case "FILTER_DATA":
                all = [...state.filterData];
                break;
        }

        commit("pageData", all.splice((current - 1) * pagenum, pagenum));
    },
    getActorPageData({ state, commit }, data) {
        let current = data.current;
        let pagenum = data.pagenum;
        let all = null;
        switch (state.actionType) {
            case "ALL_DATA":
                all = [...state.ActorData.result];
                break;
            case "FILTER_DATA":
                all = [...state.filterData];
                break;
        }
        commit("pageData", all.splice((current - 1) * pagenum, pagenum));
    }
}
export default actions;