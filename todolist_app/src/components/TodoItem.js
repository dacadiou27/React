import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItems extends Component {

    getStyle = () => {
        /*
        if (this.props.todo.completed) {
            return {
                textDecoration: 'line-through'
            }
        }
        else {
            return {
                textDecoration: 'none'
            } 
        }*/

        // using ternary operator
        return {
            backgroundColor: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }



    render() {

        //Destructuring
        const { id, title } = this.props.todo;

        return (
            //inline style
            //<div style={{backgroundColor:'#f4f4f4'}}> 

            //style define as an object - see bellow for commneted object
            //<div style={itemStyle}>   

            // style define as a function - see function above
            <div style={this.getStyle()}>
                <p>
                    {/* <input type="checkbox" onChange={this.props.markComplete.bind(this, this.props.todo.id)} /> */}
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} />
                    {' '}
                    {/* {this.props.todo.title} */}
                    {title}
                    <button style={btnStyle} onClick={this.props.markDelete.bind(this,id)} >x</button>
                </p>
            </div>
        )
    }
}

//PropTypes
TodoItems.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    markDelete:PropTypes.func.isRequired
}

const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    boder: 'none',
    padding: '5px 10px',
    borderRadius: '50%',
    cursor: 'pointer',
    float:'right'
}

/*
const itemStyle = {
    backgroundColor : '#f4f4f4'
}*/


export default TodoItems
