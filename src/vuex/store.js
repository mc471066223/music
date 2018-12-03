import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);

const state = {
    recommendList: [

    ],
    detailList: [

    ],
    searchList: [

    ],
    searchSave: [

    ],
    player:''
}

const mutations = {
    GET_RECOMMENDLIST(state) {
        // this.$http({
        //     method : 'get',
        //     url : 'http://api.apiopen.top/musicBroadcasting'
        // }).then(data => {
        //     console.log(data)
        //     state.recommendList = data.result
        // }).then(data => {
        //     console.log(data)
        // })
        axios.get('http://api.apiopen.top/musicBroadcasting').then(data => {

            state.recommendList = data.data.result[0].channellist;

        });

    },
    DETAIL_INFORMATION(state, which) {
        axios.get(which).then(data => {

            // state.detailPic
            state.detailList = data.data.result.songlist

        })
    },
    SEARCH(state, search) {
        axios.get('http://api.apiopen.top/searchMusic?name=' + search).then(data => {
            state.searchList = data.data.result;
            console.log(state.searchList)
        })
    },
    SEARCH_SAVE(state, obj) {
        var oName = { 'name': obj.title ,'url': obj.url ,'id':obj.songid}
        console.log(oName)
        state.searchSave.push(oName);
        localStorage.setItem('searchHistory', JSON.stringify(state.searchSave));
    },
    READ_SEARCH_HISTORY(state) {
        if (localStorage.getItem('searchHistory') != null) {
            state.searchSave = JSON.parse(localStorage.getItem('searchHistory'));
            console.log(state.searchSave)
        }
    },
    DELETE_THIS_HISTORY(state, oIndex) {
        state.searchSave.splice(oIndex ,1);
        console.log(oIndex)
        localStorage.setItem('searchHistory', JSON.stringify(state.searchSave));
    },
    PLAYER_INFORMATION(state,oId){
        axios.get('http://api.apiopen.top/searchMusic?name=' + oId).then(res =>{
            state.player = res.data.result[0];
            console.log(state.player)
        })
    }
}

const getters = {

}

const actions = {
    getRecommendList({ commit }) {
        commit('GET_RECOMMENDLIST');
    },
    getDetailInformation({ commit }, which) {
        commit('DETAIL_INFORMATION', which);
    },
    search({ commit }, search) {
        commit('SEARCH', search);
    },
    searchHistoryList({ commit }, obj) {
        commit('SEARCH_SAVE', obj);
    },
    readSearchHistory({ commit }) {
        commit('READ_SEARCH_HISTORY')
    },
    deleteHistory({commit} , oIndex){
        commit('DELETE_THIS_HISTORY', oIndex)
    },
    playerInformation({commit} , oId){
        commit('PLAYER_INFORMATION',oId)
    }
}

export default new Vuex.Store({
    state, mutations, actions, getters
})