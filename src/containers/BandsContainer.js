import React, { Component } from 'react'
import { connect } from 'react-redux'
import BandInput from '../components/BandInput'

class BandsContainer extends Component {
  addNewBand = (band) => {
    this.props.dispatch({type: 'ADD_BAND', payload: band})
  }
  
  render() {
    return(
      <div>
        <BandInput addBand={this.addNewBand} />
        <ul>
          {this.props.bands.map((band, index) => <li key={index}>{band.name}</li>)}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    bands: state.bands
  }
}

export default connect(mapStateToProps)(BandsContainer)
