import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from './actions';

class Counter extends Component {
    state = { count: 0 };
    // state = { count: 0 }; // remove this
    increment = () => {
        /*
        // Remove this
        this.setState({
        count: this.state.count + 1
        });
        */
        this.props.increment();


    };

    decrement = () => {
        /*
        // Also remove this
        this.setState({
        count: this.state.count - 1
        });
        */
        this.props.decrement();
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
        );
    }
}

function mapStateToProps(state) {
    return {
        count: state.count
    };
}

const mapDispatchToProps = {
    increment,
    decrement
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter); // counter component connected to redux and the connection is exported

//export default connect(mapStateToProps)(Counter); // counter component connected to redux and the connection is exported
/**It’s written this way because connect is a higher-order function, which is a fancy way of saying it returns
a function when you call it. And then calling that function with a component returns a new (wrapped)
component.**/