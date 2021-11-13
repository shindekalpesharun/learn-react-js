import React from "react";
import "./assets/css/style.css"

class App extends React.Component {
    constructor(props) {
        console.log('App Class');
        super(props);
        this.state = { title: 'Hello react 2', isShowing: false }
        // this.handleClick = this.handleClick.bind(this);
    }
    // states are Immutable

    componentDidMount() {
        console.log('App ComponentDidMount');
        this.setState({ title: "lorem ispum" })
    }

    // TODO: use always arrow function normal function this keyword not scope then bind 
    handleClick = () => {
        this.setState({ isShowing: !this.state.isShowing })
    }

    // handleClick() {
    //     this.setState({ isShowing: !this.state.isShowing })
    // }



    render() {
        console.log('App Render');
        return <section className="flex justify-center">
            <div className="w-1/2">
                <div className="my-4">{this.state.title}</div>
                <div>
                    <button className="p-1 bg-blue-700 text-white" onClick={this.handleClick}>Toggle Image</button>
                    {
                        this.state.isShowing ?
                            <img src="https://images.unsplash.com/photo-1636224358189-182d4886cf14?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8" />
                            : null
                    }
                </div>
            </div>
        </section >;
    }
}

// function App({ title }) {
//     return <div>
//         <div className="bg-gray-600 text-white p-5 border">
//             {title}
//         </div>
//     </div >;
// }



export default App;