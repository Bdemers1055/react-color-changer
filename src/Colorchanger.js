import React, { Component } from 'react';

class Colorchanger extends Component {
    constructor(props){
        super(props);
        this.state = {
            color: '#ffff00',
            firstColor: '#fff555',
            secondColor: '#ff4555'
        };
    }
    changeFirstColor(e){
        this.setState({
            firstColor: e.target.value
        });
    }
    changeSecondColor(e){
        this.setState({
            secondColor: e.target.value
        });
    }
    changeColor(e){
        this.setState({
            color: e.target.value
        })
    }
    render() {
        const styles = { backgroundColor: this.state.color } 
        return (
            <div className = "center" >
            {this.props.title? <h1 className= "Color-title">{this.props.title}</h1> : null}
            <div className = "box" style = { styles } ></div>
            <button className = "first" onClick = {this.changeColor.bind(this)}>First</button>
            <button className = "second" onClick = {this.changeColor.bind(this)}>Second</button>
            <input 
            type="text" 
            min="7"
            max="7"
            name="firstfield"
            placeholder="#000000"
            value={this.state.firstColor}
            onChange={this.changeFirstColor.bind(this)}
            />
            <input 
            type="text" 
            min="7"
            max="7"
            name="firstfield"
            placeholder="#000000"
            value={this.state.secondColor}
            onChange={this.changeSecondColor.bind(this)}
            />
            </div>
        )
    }
}

export default Colorchanger;