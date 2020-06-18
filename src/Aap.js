import React from 'react'

import Cm from './vottingPoll'
class Aap extends React.Component {

    render() {
        console.log('Aap2222222222222222222222222222222222222222222222222222222222222 calling')
        return (<>
            <h1>Votting {this.props.voteFor}for AAP Candiate name :{this.props.name}</h1>
            <h2 onMouseOver={this.props.voteCouter}>theTotalCount:{this.props.voteCountValue}</h2>

        </>)
    }
}
export default Cm(Aap, 5)