import React from "react";
import "./assets/css/style.css"
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
    Link,
    Outlet,
    useParams,
    NavLink,
    useNavigate,
    useLocation,
} from 'react-router-dom'
import routes from "./utils/routes";
import Header from "./components/Header";

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
    return (
        <Router>
            <Header />
            <Routes>
                {routes.map(route => {
                    return <Route path={route.path} element={route.component} />;
                })}
            </Routes>
        </Router>
    )

}



export default App;