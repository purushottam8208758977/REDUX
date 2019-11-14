import React, { Component } from 'react';

class Counter extends Component {
    // state = { count: 0 }; // remove this
    increment = () => {
        /*
        // Remove this
        this.setState({
        count: this.state.count + 1
        });
        */
    };

    decrement = () => {
        /*
        // Also remove this
        this.setState({
        count: this.state.count - 1
        });
        */
    };
    render() {
        return (
            <div className="counter" >
                <h2> Counter </h2>
                <div>
                    <button onClick={this.decrement} > - </button>
                    <span className="count" > {
                        // Replace state:
                        //// this.state.count
                        // With props:
                        this.props.count
                    } </span>
                    <button onClick={this.increment} > + </button>
                </div>
            </div>
        );}}