import React, { Component } from 'react'

export default class images extends Component {
    constructor(props) {
        super(props);
        this.state = { interval: null }
    }

    componentDidMount() {
        console.log('Images comp Mounted');
        this.setState({
            interval: setInterval(() => {
                console.log('Hello');
            }, 1000),
        })
    }

    componentWillUnmount() {
        console.log('Images Component unmounted')
        clearInterval(this.state.interval);
    }
    render() {
        return (
            <div>
                <img src="https://images.unsplash.com/photo-1636224358189-182d4886cf14?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8" alt="error" />

            </div>
        )
    }
}
