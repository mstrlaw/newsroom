import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  actions: {
    getClusters: async () => {
      const dateObj = new Date();
      const date = `${dateObj.getFullYear()}-${dateObj.getMonth() + 1}-${dateObj.getDate()}`;
      return axios.get(`https://api.thoro.news/api/topics/${date}/all/all/%7B%22sort%22:%22score%22%7D`);
    },
    getArticle: async (_, articleId) => axios.get(`https://api.thoro.news/api/article/${articleId}`),
  },
  modules: {
  },
});
