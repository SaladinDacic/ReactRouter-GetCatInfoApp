import React, { Component } from 'react'
import "./GrayScale.css";
class GrayScale extends Component {
    render() {
        return (
            <div className="GrayScale-it">
                {/* <h1>radi li</h1> */}
                {this.props.children}
            </div>
        )
    }
}
export default  GrayScale;