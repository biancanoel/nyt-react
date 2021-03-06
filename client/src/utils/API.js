import axios from 'axios';

export default {
    getArticles : function (query) {
        return axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json?q=new+york+times&page=1&sort=newest&fq="+query+"&api-key=d51d3d36cad340b0a24d832c52ab06d6")
    },

    saveArticle: function (articleData) {
        return axios.post("/api/articles", articleData);
    },

    getSavedArticles: function () {
        return axios.get('api/articles')
    },

    deleteArticle: function (id) {
        return axios.delete('api/articles/'+id)
    },
};