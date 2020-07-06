import { fetchNewsList,
     fetchJobsList, 
     fetchAskList, 
     fetchList,

     fetchUserInfo, 
     fetchCommentItem } 
from '../api/index.js';


export default {
    
    // promise
    // FETCH_NEWS(context) {
    //         return fetchNewsList()
    //         .then(response => {
    //             // console.log(response.data);
    //             // this.state.news = response.data;
    //             // console.log(this.state.news);
    //             context.commit('SET_NEWS', response.data);
    //             return response;
    //         })
    //         .catch(error => {
    //             console.log(errosr);
    //         });
    // },
    // async
    async FETCH_NEWS({commit}){
        try {
            const response = await fetchNewsList();
            commit('SET_NEWS', response.data);
            return response;
        } catch (error) {
            console.log(error);
        }
        
    },

    // promise
    // FETCH_JOBS({ commit }){
    //         return fetchJobsList()
    //         // .then(response => this.jobs = response.data)
    //         // .catch(error => console.log(error));
    //         .then(({ data }) => {
    //             commit('SET_JOBS', data);
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         });
    // },

    // async
    async FET_JOBS({ commit }) {
        try {
            const response = await fetchJobsList();
            commit('SET_JOBS', response.data);
            return response;
        } catch (error) {
            console.log(error);
        }
        
    },

    // promise
    // FETCH_ASKS(context){
    //     fetchAskList()
    //         .then( response => {
    //             context.commit('SET_ASKS', response.data);
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         });
    // }        
    // FETCH_ASKS({ commit }){
    //     return fetchAskList()
    //         .then(({ data }) => {
    //             commit('SET_ASKS', data);
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         });
    // },

    // async
    async FETCH_ASKS({ commit }){
        const response = await fetchAskList();
        commit('SET_ASKS', response.data);
        return response;
    },
    
    FETCH_USER({ commit }, name){
        return fetchUserInfo(name)
        .then(({ data }) => {
            commit('SET_USER', data);
        })
        .catch(error => {
            console.log(error);
        });
    },

    FETCH_ITEM({ commit }, id){
        return fetchCommentItem(id)
        .then(({ data }) => {
            commit('SET_ITEM', data);
        })
        .catch(error => {
            console.log(error);
        });
    },

    // FETCH_LIST({ commit }, pageName) {
    //     return fetchList(pageName)
    //     .then(({ data }) => commit('SET_LIST', data))
    //     .catch(error => console.log(error));
    // },

    async FETCH_LIST({commit}, pageName) {
        const response = await fetchList(pageName);
        commit('SET_LIST', response.data);
        return response;
    }
}