import React, { Component } from 'react';
import { Button, Container } from 'reactstrap';
import Nav from './../nav'
import ProspectList from './../prospects-list'

var Haikunator = require('haikunator')

var haikunator = new Haikunator({
  adjectives: ['custom', 'adjectives'],
  nouns: ['custom', 'nouns'],
  seed: 'custom-seed',
  defaults: { // class defaults 
      tokenLength: 8,
      tokenChars: 'HAIKUNATOR',
      // ... 
  }
})


const PROPSPECTS = [ 
  {emoji: '🐵', name: haikunator.haikunate({tokenHex: true})},
  {emoji: '🤖', name: haikunator.haikunate({tokenHex: true})},
  {emoji: '🐱', name: haikunator.haikunate({tokenHex: true})},
  {emoji: '🐶', name: haikunator.haikunate({tokenHex: true})},
  {emoji: '👽', name: haikunator.haikunate({tokenHex: true})},
  {emoji: '🦊', name: haikunator.haikunate({tokenHex: true})},
  {emoji: '💩', name: haikunator.haikunate({tokenHex: true})},
  {emoji: '🐷', name: haikunator.haikunate({tokenHex: true})},
  {emoji: '🐼', name: haikunator.haikunate({tokenHex: true})},
  {emoji: '🐰', name: haikunator.haikunate({tokenHex: true})},
  {emoji: '🐔', name: haikunator.haikunate({tokenHex: true})},
  {emoji: '🦄', name: haikunator.haikunate({tokenHex: true})}
]

class App extends Component {
  render() {
    return (
      <Container>
          <Nav />
          <p class="text-left font-weight-bold">Lista de candidatos a reclutar</p>
          <ProspectList prospects={PROPSPECTS}/>
      </Container>
    );
  }
}

export default App;
