import React, { Component } from 'react';
import {withRouter} from "react-router-dom";

class SearchCatForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name : ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    handleChange(evt){
        this.setState({name: evt.target.value})
    }
    handleClick(evt){
        evt.preventDefault();
        this.props.history.push(`/cats/${this.state.name.charAt(0).toUpperCase() + this.state.name.slice(1)}`)
    }
    render() {
        return (
            <div>
                <form className="form-inline my-2 my-lg-0">
                    {/* <label htmlFor="catName"> Name Of Cat</label> */}
                    <input className="form-control mr-sm-2" 
                    aria-label="Search"
                    type="search" 
                    placeholder="Search cat by name" 
                    value = {this.state.name}
                    name="catName"
                    id="catName"
                    onChange={this.handleChange}/>
                    <button onClick={this.handleClick} className="btn btn-outline-success my-2 my-sm-0" >Search</button>
                </form>
            </div>
        )
    }
}

export default withRouter(SearchCatForm);