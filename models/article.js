const mongoose = require ('mongoose');
const Schema = mongoose.Schema; 

const articleSchema = new Schema ({
    headline: {type: String}, 
    byline: {type: String},
    url: {type: String},
    pub_date: {type: String},
});

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;
