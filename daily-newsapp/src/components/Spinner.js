import React, { Component } from 'react'
import loading from "../components/loading.gif"
export class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={loading}/>
      </div>
    )
  }
}

export default Spinner
