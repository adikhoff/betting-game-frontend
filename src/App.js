import React, {Component} from 'react';
import './App.css';
import ApiClient from './ApiClient';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            greeting: 'waiting...',
        };

    }

    componentDidMount() {
        const client = new ApiClient();
        const fetchGreeting = () => {
            client.httpGet("public")
                .then(response => response.json())
                .then(responseJson => {
                    console.log(responseJson);
                    this.setState({
                        greeting: responseJson.message,
                    })
                });
        };
        fetchGreeting();
    }

    render() {
        return (
            <div className="App">
                <h1>Welkom in de familie app</h1>
                <div>response: {this.state.greeting} </div>
                <div id="login-form">
                    <form>
                        <input id="username"/>
                        <input id="password"/>
                        <button id="login-btn">Inloggen</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default App;
