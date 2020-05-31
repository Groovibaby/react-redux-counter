import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';

class CounterComponent extends Component {
    
    render() {
        const { counter, dispatch } = this.props;
        return (
            <div class="text-center mt-5">
                <h1>Redux Counter</h1>
                <p>{counter}</p>
                <Button variant="success" onClick={() => dispatch({ type: 'ADD_ONE' })}>+1</Button>
                <Button variant="success" onClick={() => dispatch({ type: 'ADD_TEN' })}>+10</Button>
                <Button variant="warning" onClick={() => dispatch({ type: 'REMOVE_ONE' })}>-1</Button>
                <Button variant="warning" onClick={() => dispatch({ type: 'REMOVE_TEN' })}>-10</Button>
                <Button Button variant="dark" onClick={() => dispatch({ type: 'RESET' })}>reset</Button>
            </div>
        )
    }
}

const mapDispatchToProps = state => ({
    counter: state
});

const CounterContainer = connect(mapDispatchToProps)(CounterComponent);

export default CounterContainer;