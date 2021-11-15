import React, { useEffect, useState, useRef } from "react";
import "./assets/css/style.css"
import Images from "./components/Images";

// class App extends React.Component {
//     // constructor(props) {
//     //     console.log('App Class');
//     //     super(props);
//     //     this.state = { title: 'Hello react 2', isShowing: false }
//     //     // this.handleClick = this.handleClick.bind(this);
//     // }
//     // states are Immutable

//     componentDidMount() {
//         console.log('App ComponentDidMount');
//         // this.setState({ title: "lorem ispum" })
//     }

//     componentWillUnmount() {
//         console.log('app unmounted')
//     }

//     componentDidUpdate() {
//         console.log(`App updated`)
//     }

//     // TODO: use always arrow function normal function this keyword not scope then bind 
//     handleClick = () => {
//         this.setState({ isShowing: !this.state.isShowing })
//     }

//     // handleClick() {
//     //     this.setState({ isShowing: !this.state.isShowing })
//     // }



//     render() {
//         console.log('App Render');
//         return <section className="flex justify-center">
//             <div className="w-1/2">
//                 <div className="my-4">{this.state.title}</div>
//                 <div>
//                     <button className="p-1 bg-blue-700 text-white" onClick={this.handleClick}>Toggle Image</button>
//                     {
//                         this.state.isShowing ?
//                             <Images /> : null
//                     }
//                 </div>
//             </div>
//         </section >;
//     }
// }

function App() {
    const [title, setTitle] = useState("hello react");
    const [isShowing, setIsShowing] = useState(false);
    const [didMount, setDidMount] = useState(false);
    const mountRef = useRef(null);

    // component Did Mount only when empty []
    useEffect(() => {
        setDidMount(true);
        console.log('App Mounted')
    }, [])

    // for component update
    useEffect(() => {
        if (mountRef.current)
            console.log(`App updated`);
        else
            mountRef.current = true;
    }, [isShowing]);

    function handleClick() {
        setIsShowing(!isShowing);
    }

    return <section className="flex justify-center">
        {console.log(`reRender`)}
        <div className="w-1/2">
            <div className="my-4">{title}</div>
            <div>
                <button className="p-1 bg-blue-700 text-white" onClick={handleClick}>Toggle Image</button>
                {
                    isShowing ?
                        <Images /> : null
                }
            </div>
        </div>
    </section >;
}



export default App;