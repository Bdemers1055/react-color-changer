import React, { Component } from 'react';

class Colorchanger extends Component {
    constructor(props){
        super(props);
        this.state = {
            color: '#ffff00',
            inputLeftColor: '#000678',
            inputRightColor: '#455678'
        };
    }
    changeInputLeftColor(e){
        this.setState({
            inputLeftColor: e.target.value
        });
    }
    changeInputRightColor(e){
        this.setState({
            inputRightColor: e.target.value
        });
    }
    changeBoxToLeftColor(e){
        this.setState({
            color: this.state.inputLeftColor,
        })
    }
    changeBoxToRightColor(e){
        this.setState({
            color: this.state.inputRightColor,
        })
    }
    render() {
        const styles = { backgroundColor: this.state.color } 
        return (
            <div className = "center" >
            {this.props.title? <h1 className= "Color-title">{this.props.title}</h1> : null}
            <div className = "box" style = { styles } ></div>
                <div className= "left">
                    <input 
                    type="text" 
                    name="leftfield"
                    placeholder="#000000"
                    value={this.state.inputLeftColor}
                    onChange={this.changeInputLeftColor.bind(this)}
                    />
                    <button className = "leftbtn" onClick = {this.changeBoxToLeftColor.bind(this)}>Left</button>
                </div>
                <div className= "right">
                    <input 
                    type="text" 
                    name="rightfield"
                    placeholder="#000000"
                    value={this.state.inputRightColor}
                    onChange={this.changeInputRightColor.bind(this)}
                    />
                    <button className = "rightbtn" onClick = {this.changeBoxToRightColor.bind(this)}>Right</button>
                </div>
            </div>
        )
    }
}

export default Colorchanger;