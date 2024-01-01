import React, { Component } from "react";
import NewsUpdate from "../components/NewsUpdate" 
import PropTypes from "prop-types"
export class News extends Component {
  static defaultProps={
    category:"General",
  }

  static propTypes={
    category:PropTypes.string,
  }
  constructor() {
    super();
    this.state = {
      articles: [],
      page: 1,
    };
  }

  async updateNews(){
    const url=`https://newsapi.org/v2/top-headlines?language=en&category=${this.props.category}&apiKey=04f5562b327147498f1f0619c1071fac&page=${this.state.page}&pageSize=12`;
    let data=await fetch(url);
    let parsedData = await data.json()
    this.setState({
      page:this.state.page,
      articles:parsedData.articles,
      totalResults:parsedData.totalResults
    })
  }

  async componentDidMount() {
   this.updateNews();
  } 

  nextclick = async () => {
   this.setState({page:this.state.page+1});
   this.updateNews();
  };
  previousclick = async () => {
    this.setState({page:this.state.page-1});
   this.updateNews();
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
        <div className="row">
          {
            this.state.articles.map((element)=>{
              return<div className="col-md-4" key={element.url}>
                <NewsUpdate title={element.title} newsUrl={element.url} description={element.description} imageUrl={element.urlToImage} source={element.source.name} author={element.author}/>
              </div>
            })}
        </div>
        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.previousclick}>Previous</button>
          <h5>Total News Results:{this.state.totalResults}</h5>
          <button type="button" className="btn btn-dark" onClick={this.nextclick}>Next</button>
        </div>
      </div>
    );
  }
}

export default News;
