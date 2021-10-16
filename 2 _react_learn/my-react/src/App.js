import React from "react";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'Hello react'
        }
    }
    render() {
        return <div>{this.state.title}</div>;
    }
}

// function App() {
//     return <div>Hello React</div>;
// }

export default App;