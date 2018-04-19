import React, { Component } from "react";
import { ResultsList, ResultArticle } from "../Results";
import API from "../../utils/API";

class Saved extends Component {
    state = {
        articles: []
    }

    componentDidMount() {
        this.getSavedArticles()
    }

    getSavedArticles = () => {
        API.getSavedArticles({}).then(res => {
            console.log(res.data);
            this.setState({
                articles: res.data
            })
        })
    }

    removeArticle = (id) => {
        API.deleteArticle(id)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                <h1> this is the saved Component </h1>
                {this.state.articles.length ?
                    <ResultsList >
                        {this.state.articles.map(article => {
                            return (
                                <ResultArticle 
                                headline = {article.headline}
                                byline = {article.byline}
                                pubdate = {article.pub_date}
                                url = {article.url}
                                key = {article._id}
                                button = {"Remove"}
                                btnfunction = {() => this.removeArticle(article._id)}
                                />
                            )
                        })}

                    </ResultsList>    : <h1> no saved articles yet </h1>
                }

            </div>

        )
    }


}

export default Saved;