import React, { Component } from 'react';
import { Button, Container } from 'reactstrap';
//import Nav from './../nav'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ProspectList from './../prospects-list'
import Recluited from './../recruited'
import Grafics from './../grafics'


// var Haikunator = require('haikunator')

// var haikunator = new Haikunator({
//   adjectives: ['custom', 'adjectives'],
//   nouns: ['custom', 'nouns'],
//   seed: 'custom-seed',
//   defaults: { // class defaults 
//       tokenLength: 8,
//       tokenChars: 'HAIKUNATOR',
//       // ... 
//   }
// })

const divMargin = {
  margin: '15px 0px 15px 0'
};


// const PROPSPECTS = [ 
//   {emoji: '🐵', name: haikunator.haikunate({tokenHex: true})},
//   {emoji: '🤖', name: haikunator.haikunate({tokenHex: true})},
//   {emoji: '🐱', name: haikunator.haikunate({tokenHex: true})},
//   {emoji: '🐶', name: haikunator.haikunate({tokenHex: true})},
//   {emoji: '👽', name: haikunator.haikunate({tokenHex: true})},
//   {emoji: '🦊', name: haikunator.haikunate({tokenHex: true})},
//   {emoji: '💩', name: haikunator.haikunate({tokenHex: true})},
//   {emoji: '🐷', name: haikunator.haikunate({tokenHex: true})},
//   {emoji: '🐼', name: haikunator.haikunate({tokenHex: true})},
//   {emoji: '🐰', name: haikunator.haikunate({tokenHex: true})},
//   {emoji: '🐔', name: haikunator.haikunate({tokenHex: true})},
//   {emoji: '🦄', name: haikunator.haikunate({tokenHex: true})}
// ]

class App extends Component {
  render() {
    return (
      <Container>
        <Router>
          <div>
          <nav class="navbar navbar-expand-lg navbar-light bg-light" style={divMargin}>
            <a class="navbar-brand" href="#">genderX</a>
            <div class="collapse navbar-collapse" id="navbarText">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                  <a class="nav-link" href="#"><Link to="/">Prospects</Link></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#"><Link to="/recruited">Recruited</Link></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#"><Link to="/grafics">Grafics</Link></a>
                </li>
              </ul>
            </div>
          </nav>
          <Route exact path="/" component={ProspectList} />
          <Route exact path="/recruited" component={Recluited} />
          <Route exact path="/grafics" component={Grafics} />
          </div>
        </Router>
      </Container>
    );
  }
}

export default App;
