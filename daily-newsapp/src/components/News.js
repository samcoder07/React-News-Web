import React, { Component } from "react";
import NewsUpdate from "../components/NewsUpdate" 
import Spinner from "./Spinner"
export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=04f5562b327147498f1f0619c1071fac&page=1&pageSize=12"
    let data = await fetch(url)
    let parsedData = await data.json()
    this.setState({ articles: parsedData.articles })
  } 

  nextclick = async () => {
    let url =
      `https://newsapi.org/v2/everything?domains=wsj.com&apiKey=04f5562b327147498f1f0619c1071fac&page=${this.state.page+1}&pageSize=12`
    this.setState({ loading: true })
    let data = await fetch(url)
    let parsedData = await data.json()
    this.setState({
      page: this.state.page + 1,
      articles: parsedData.articles,
      loading: false,
    });
  };
  previousclick = async () => {
    let url = `https://newsapi.org/v2/everything?domains=wsj.com&apiKey=04f5562b327147498f1f0619c1071fac&page=${
      this.state.page - 1
    }&pageSize=12`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.setState - 1,
      articles: parsedData.articles,
      loading: false,
    });
  };
  render() {
    return (
      <div className="container my-3">
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.previousclick}
          >
            Previous
          </button>
          <button
            type="button"
            className="btn btn-dark"
            onClick={this.nextclick}
          >
            Next
          </button>
        </div>
        <h2 className="text-center text-uppercase">top headlines</h2>
        {this.state.loading && <Spinner/>}
        <div className="row gy-3">
          {
            this.state.articles.map((element)=>{
              return<div className="col-md-4" key={element.url}>
                <NewsUpdate title={element.title.slice(0,50)} description={element.description.slice(0,100)} imageUrl={element.urlToImage}/>
              </div>
            })}
        </div>
        {this.state.loading && <Spinner/>}
        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.previousclick}>Previous</button>
          <button type="button" className="btn btn-dark" onClick={this.nextclick}>Next</button>
        </div>
      </div>
    );
  }
}

export default News;
