import React, { Component } from 'react'

const RECLUITED = [ 
  {emoji: '🐵', name: 'Omar Carlos Gomez', topics: ['React', 'Frontend', 'JS']},
  {emoji: '🤖', name: 'Karla Rodriguez', topics: ['Node', 'Drones', 'JS']},
  {emoji: '🐱', name: 'Karen Gonzalez', topics: ['Design', 'InVision', 'Ilustrator']},
  {emoji: '🐶', name: 'Luis Barragan', topics: ['react', 'frontend', 'JS']},
  {emoji: '👽', name: 'Carlos Ballarta', topics: ['react', 'frontend', 'JS']},
  {emoji: '🦊', name: 'Luis Sanchez', topics: ['react', 'frontend', 'JS']},
  {emoji: '💩', name: 'Julieta Garcia', topics: ['react', 'frontend', 'JS']}
]

class Recluited extends Component {
  render () {

    const Recruited = RECLUITED.map( r => { 
      return <li class="media" style={{paddingBottom: '10px'}}>
        <p class="mr-3" style={{fontSize: '70px'}}>{r.emoji}</p>
        <div class="media-body">
          <h5 class="mt-0 mb-1" >{r.name}</h5>
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          <br/>
          {
            r.topics.map( t => {
              return <a href="#" class="badge badge-primary" style={{marginRight: '5px'}}>{t}</a>
            })
          }
        </div>
      </li>
    })

    return (
      <div>
        <p class="text-left font-weight-bold">Llist of candidates recruited</p>
        <ul class="list-unstyled">
          {Recruited}
        </ul>
      </div>
    )
  }
}

export default Recluited

