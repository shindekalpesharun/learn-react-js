import React from "react";
import "./assets/css/style.css"

// class App extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             title: 'Hello react'
//         }
//     }
//     render() {
//         return <div>{this.state.title}</div>;
//     }
// }

function App({ title }) {
    return <div>
        <div className="box">
            {title}
        </div>
    </div >;
}



export default App;