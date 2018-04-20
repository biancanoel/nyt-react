import React from 'react';


export const ResultArticle = (props) => {
    

    return (
        <li className="list-group-item" id={props.id}>
            <div className="container">
                <div className="row">
                    <a href={props.url}> {props.headline} </a>
                    <button onClick={props.btnfunction}> {props.button} </button>
                </div>
                <div className="row">
                    {props.byline}
                </div>
                <div className="row">
                    {props.pub_date}
                </div>
            </div>

            <div id="article-chat">
                <div id="chat-window">
                    <div id="output"></div>
                </div>
                <input id="handle" type="text" placeholder="Handle" />
                <input id="message" type="text" placeholder="Message" />
                <button id="send"> Send </button>
            </div>
        </li>
    )
}

