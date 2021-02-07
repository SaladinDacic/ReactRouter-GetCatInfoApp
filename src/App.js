import './App.css';
import ShowCards from "./ShowCards";
import Card from "./Card";
import SearchCatForm from "./SearchCatForm";
import GrayScale from "./GrayScale";
import React, { Component } from 'react';
import {Switch, NavLink, Route, Redirect} from "react-router-dom";

class App extends Component {
  static defaultProps = {
    cats: [
      {
        name: "Quki",
        age: 5,
        src: "https://jngnposwzs-flywheel.netdna-ssl.com/wp-content/uploads/2019/05/Transparent-OrangeWhiteCat-764x1024.png",
        facts: [
          "Quki loves eating popcorn.",
          "Quki is a adorable cat.",
          "Quki wants to cuddle with you!"
        ]
      },
      {
        name: "Hazel",
        age: 3,
        src: "https://assets-global.website-files.com/5eec3c1c4f68093fae5f1f37/5f2c1aa0ed4f42cdc8a2b2e6_cat-with-mirror_optimized-fl.png",
        facts: [
          "Hazel has soooo much energy!",
          "Hazel is highly intelligent.",
          "Hazel loves people more than other cats."
        ]
      },
      {
        name: "Tubby",
        age: 4,
        src: "https://assets-global.website-files.com/5eec3c1c4f68093fae5f1f37/5f2baea09a37ec67b7032906_cat-with-fishbowl-on-it%27s-head_optimized-fl.png",
        facts: [
          "Tubby is not the brightest cat",
          "Tubby does not like walks or exercise.",
          "Tubby loves eating food."
        ]
      }
    ]
  }

  
  render() {
    return (
      <div>
        <div>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            {/* <a className="navbar-brand" href="#">Navbar</a> */}
            <NavLink className="navbar-brand" to="/cats">Cats</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                  <NavLink exact activeClassName="nav-item active" className="nav-link" to="/cats">Home</NavLink>
                  {this.props.cats.map(val=>{
                    return <NavLink exact activeClassName="nav-item active" className="nav-link" to={`/cats/${val.name}`}>{val.name}</NavLink>
                  })}
              </ul>
              {/* <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
              </form> */}
              <SearchCatForm/>
            </div>
          </nav>
        </div>
        <GrayScale/>
        <Switch>
          <Route exact path="/" render={()=><Redirect to="/cats"/>}/>
          <Route exact path="/cats" render={()=>
          <GrayScale>
            <ShowCards cats={this.props.cats}/>
          </GrayScale>
          }/>
          <Route exact path="/cats/:catname" render={(params)=><GrayScale><Card {...params} cats={this.props.cats}/></GrayScale>}/>
        </Switch>
      </div>
    )
  }
}


export default App;
