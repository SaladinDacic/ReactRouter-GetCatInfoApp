import React, { Component } from 'react';
import { withRouter} from "react-router-dom";
import "./ShowCards.css"
class ShowCards extends Component {
    constructor(props) {
        super(props);
        this.handleClick=this.handleClick.bind(this);
    }
    
    handleClick(evt){
        this.props.history.push(`/cats/${evt.target.name}`)
    }
    render() {
        let cats = this.props.cats.map((val,i)=>{
            return <div key={i} onClick={this.handleClick} className="ShowCard-CatBox">
                <img alt={val.name} name={val.name} key={i} src={val.src}/>
                <h2>{val.name}</h2>
            </div>
        })
        return (
            <div>
           
            <div className="ShowCard-body">
                <h1>Click a Cat!</h1>
                <br/>
                <div className="ShowCard-CatContainer">
                    {cats}
                </div>
            </div>
            </div>
        )
    }
}
export default withRouter(ShowCards) ;