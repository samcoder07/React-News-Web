import './App.css';

import React, { Component } from 'react'
import {Navbar} from "./components/Navbar"
import {News} from "./components/News"
import {Routes,Route} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

export default class App extends Component {
  apikey="04f5562b327147498f1f0619c1071fac"
  state={
    progress:0
  }
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
  render() {
    return (
      <div>
        <Navbar/>
        <LoadingBar color="#f11946" progress={this.state.progress}/>
        <Routes>
          <Route path='/' element={<News key="general"setProgress={this.setProgress} apikey={this.apikey} category="general"/>}></Route>
          <Route path='/business' element={<News key="business" apikey={this.apikey} setProgress={this.setProgress}  category="business"/>}></Route>
          <Route path='/entertainment' element={<News key="entertainment" setProgress={this.setProgress} apikey={this.apikey} category="entertainment"/>}></Route>
          <Route path='/health' element={<News key="health" apikey={this.apikey} setProgress={this.setProgress} category="health"/>}></Route>
          <Route path='/science' element={<News key="science" apikey={this.apikey} setProgress={this.setProgress} category="science"/>}></Route>
          <Route path='/sports' element={<News key="sports" apikey={this.apikey} setProgress={this.setProgress} category="sports"/>}></Route>
          <Route path='/technology' element={<News key="technology" apikey={this.apikey} setProgress={this.setProgress} category="technology"/>}></Route>
        </Routes>
      </div>
    )
  }
}
