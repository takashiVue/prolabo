import firebase from '~/plugins/firebase'
import 'firebase/storage';
const firestorage = firebase.storage()

export const state = () => ({
    folderlist: [],
    filelist: [],
})

export const getters = {
    folderlist: state => state.folderlist,
    filelist: state => state.filelist,
}

export const mutations = {
    setFolderlist(state,folderlist){
        state.folderlist = folderlist
    },
    setFilelist(state, filelist) {
        state.filelist = filelist
    },
}

export const actions = {
    async upload({ commit }, { payload }) {
        return new Promise((resolve, reject) => {
            // firestorage にファイルをアップロード
            const uploadTask = firestorage.ref('projects/kinakomochi/' + payload.name).put(payload.file).then(snapshot => {
                // アップロード完了処理。URLを取得し、呼び出し元へ返す。
                snapshot.ref.getDownloadURL().then(url => {
                    resolve(url)
                })
            })
        })
    },
    async getlist({ commit }, ) {
        var listRef = firestorage.ref('projects/kinakomochi');
        // Fetch the first page of 100.
        var firstPage = await listRef.list({ maxResults: 50 });
        console.log(firstPage)
        var files = firstPage.items
        var folders = firstPage.prefixes
        var filelist =[];
        var folderlist = [];
        files.forEach(element => {
            filelist.push({name:element.name,path:element.fullPath})
        });
        folders.forEach(element => {
            folderlist.push({name:element.name,fullPath:element.fullPath})
        });
        console.log(filelist)
        console.log(folderlist)
        commit('setFolderlist',folderlist)
        commit('setFilelist',filelist)
    }
}