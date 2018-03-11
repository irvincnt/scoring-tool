import React, { Component } from 'react'
//import Prospect from './../prospect'

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
  {emoji: '🐵', name: haikunator.haikunate({tokenHex: true}), topics: ['React', 'Frontend', 'JS']},
  {emoji: '🤖', name: haikunator.haikunate({tokenHex: true}), topics: ['Node', 'Drones', 'JS']},
  {emoji: '🐱', name: haikunator.haikunate({tokenHex: true}), topics: ['Design', 'InVision', 'Ilustrator']},
  {emoji: '🐶', name: haikunator.haikunate({tokenHex: true}), topics: ['react', 'frontend', 'JS']},
  {emoji: '👽', name: haikunator.haikunate({tokenHex: true}), topics: ['react', 'frontend', 'JS']},
  {emoji: '🦊', name: haikunator.haikunate({tokenHex: true}), topics: ['react', 'frontend', 'JS']},
  {emoji: '💩', name: haikunator.haikunate({tokenHex: true}), topics: ['react', 'frontend', 'JS']},
  {emoji: '🐷', name: haikunator.haikunate({tokenHex: true}), topics: ['react', 'frontend', 'JS']},
  {emoji: '🐼', name: haikunator.haikunate({tokenHex: true}), topics: ['react', 'frontend', 'JS']},
  {emoji: '🐰', name: haikunator.haikunate({tokenHex: true}), topics: ['react', 'frontend', 'JS']},
  {emoji: '🐔', name: haikunator.haikunate({tokenHex: true}), topics: ['react', 'frontend', 'JS']},
  {emoji: '🦄', name: haikunator.haikunate({tokenHex: true}), topics: ['react', 'frontend', 'JS']}
]

const emoji = {
  fontSize: '70px',
  marginBottom: '0px',
  textAlign: 'center'
};

const cardProspect = {
  marginBottom: '15px',
  paddingleft: '0px',
  paddingLight: '0px'
};

class ProspectList extends Component {
  render () {

    const Prospect = PROPSPECTS.map( p => {
      return <div class="col-sm" style={cardProspect}>
        <div class="card" style={{width: '18rem'}}>
          <p class="card-img-top" style={emoji}>{p.emoji}</p>
          <div class="card-body">
            <p class="card-text">{p.name}</p>
              {
                p.topics.map( t => {
                  return <a href="#" class="badge badge-primary" style={{marginRight: '5px'}}>{t}</a>
                })
              }
          </div>
        </div>
      </div>
    })

    return (
      <div class="container">
        <p class="text-left font-weight-bold">List of candidates to recruit</p>
        <div class="row">
          {Prospect}
        </div>
      </div>
    )
  }
}

export default ProspectList