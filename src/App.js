import React, {Component} from 'react';
import './App.css';
import List from "./List.js";


class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="row">
                    <div className="column side">

                    </div>
                    <div className="column middle">
                        <h1 className="Table-header"> List of participants </h1>

                        <div>
                            <List/>
                        </div>

                    </div>

                    <div className="column.side">
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
