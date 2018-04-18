import React, { Component } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import {ResultsList, ResultArticle} from "../Results";


class Search extends Component {
    state = {
        searchTerm: "",
        startDate: "",
        endDate: "",
        articles: []
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.searchTerm)
        console.log('form submit running')
        this.setState({
            searchTerm: "",
            articles: [],
            startDate: "",
            endDate: ""
        })
    }

    render() {

        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2> Search New York Times</h2>
                        </div>
                        <div className="col-8">
                            <form>
                                <Input
                                    name={"searchTerm"}
                                    value={this.state.searchTerm}
                                    onChange={this.handleInputChange}
                                    placeholder={"Enter search term (required)"}
                                />
                                <Input
                                    name={"startDate"}
                                    value={this.state.startDate}
                                    onChange={this.handleInputChange}
                                    placeholder={"Enter start date in YYYYMMDD (optional)"}
                                />
                                <Input
                                    name={"endDate"}
                                    value={this.state.endDate}
                                    onChange={this.handleInputChange}
                                    placeholder={"Enter end date in YYYYMMDD (optional)"}
                                />

                                {this.state.searchTerm !== "" ? (<Button
                                    onClick={this.handleFormSubmit} >
                                    SEARCH!
                            </Button>) : null}

                            </form>

                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            {!this.state.articles.length ? (<h2> No Results yet... </h2>) : (
                                <ResultsList >
                                    {this.state.articles.map(article => {
                                        return (
                                            <ResultArticle 
                                            headline = {article.headline}
                                            byline = {article.byline}
                                            pubdate = {article.pub_date}
                                            url = {article.web_url}
                                            />
                                        )
                                    })}
                                </ResultsList>
                            )}

                        </div>
                    </div>


                </div>
            </div>
        )
    }
}

export default Search;