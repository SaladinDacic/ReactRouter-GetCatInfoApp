import React, { Component } from 'react';
import {Redirect} from "react-router-dom";
import "./Card.css";

class Card extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        this.props.history.goBack();
        console.log(this.props.history)
    }
    render() {
        let catName = this.props.match.params.catname;
        catName = this.props.cats.find(val=>{
            return val.name === catName;
        })
        console.log(catName)
        return (
            <div className="Card-component-body">
                {catName === undefined
                ?<Redirect to="/cats"/>
                :<div className="card-holder">
                    <div className="card" /* style={{width: "25rem"}} */>
                        <img src={catName.src} className="card-img-top" alt={catName.name}/>
                        <div className="card-body">
                            <h5 className="card-title">{catName.name}</h5>
                            {[...catName.facts].map(val=>{
                                    return <p className="card-text">{val}</p>
                            })}
                            <button className="btn btn-primary" onClick={this.handleClick}>Go Back</button>
                        </div>
                    </div>
                </div>}
            </div>
        )
    }
}

export default Card