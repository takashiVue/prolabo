export const state = () => ({
    isLogin: false,
})

export const getters = {
    isLogin: state => state.isLogin,
}

export const mutations = {
    setIsLogin(state,val) {
        state.isLogin = val
    },
}

export const actions = {
    async login({ commit },{payload}) {
        const url = `/api/login_user?id=${payload.id}&password=${payload.password}`;
        const urlencode = encodeURI(url);//これで2時間積んだ日本語をURLリクエストに使えるようにエンコードしないとらしい
        const result = await this.$axios.$get(urlencode)//日本語でエラー吐いたらだいたいutf8設定してない
        if(result == 0){
            return 'IDまたはパスワードが間違っています'
        }
        const val = true;
        commit('setIsLogin',val);
    },
}