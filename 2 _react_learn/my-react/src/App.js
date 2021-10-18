import React from "react";

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
        <div style={{
            padding: '2rem', border: '1px solid green', backgroundColor: "gray", color: 'white'
        }}>
            {title}
        </div>
    </div >;
}



export default App;