import React, { Component } from 'react'
//import Prospect from './../prospect'

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

    const Prospect = this.props.prospects.map( p => {
      return <div class="col-sm" style={cardProspect}>
        <div class="card" style={{width: '18rem'}}>
          <p class="card-img-top" style={emoji}>{p.emoji}</p>
          <div class="card-body">
            <p class="card-text">{p.name}</p>
          </div>
        </div>
      </div>
    })

    return (
      <div class="container">
        <div class="row">
          {Prospect}
        </div>
      </div>
    )
  }
}

export default ProspectList