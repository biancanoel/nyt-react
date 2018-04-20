import React from 'react';
import io from 'socket.io-client'


class ResultArticle extends React.Component {
    componentDidMount() {
        //Make connection on front end for socket io





        //Emit events
        // btn.addEventListener('click', function () {
        //     //client emits a message to the server, which is a chat. the message is inside the obj (value insdie the message and handle fields)
        //     socket.emit('chat', {
        //         message: message.value,
        //         handle: handle.value
        //     })
        // })

        //Listen for events
    }

    handleSendChat = () => {
        var socket = io.connect('http://localhost:3001/')
        //Query DOM

        var message = document.getElementById('message');
        var handle = document.getElementById('handle');
        var btn = document.getElementById('send');
        var output = document.getElementById('output');

        socket.emit('chat', {
            message: message.value,
            handle: handle.value
        })
    }

    render() {

        return (
            <li className="list-group-item" id={this.props.id}>
                <div className="container">
                    <div className="row">
                        <a href={this.props.url}> {this.props.headline} </a>
                        <button onClick={this.props.btnfunction}> {this.props.button} </button>
                    </div>
                    <div className="row">
                        {this.props.byline}
                    </div>
                    <div className="row">
                        {this.props.pub_date}
                    </div>
                </div>

                <div id="article-chat">
                    <div id="chat-window">
                        <div id="output"></div>
                    </div>
                    <input id="handle" type="text" placeholder="Handle" />
                    <input id="message" type="text" placeholder="Message" />
                    <button id="send" onClick={this.handleSendChat}> Send </button>
                </div>
            </li>
        )
    }
}

export default ResultArticle;

