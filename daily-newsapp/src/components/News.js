import React, { Component } from "react";
import NewsUpdate from "../components/NewsUpdate";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
export class News extends Component {
  static defaultProps = {
    category: "General",
  };

  static propTypes = {
    category: PropTypes.string,
  };
  constructor() {
    super();
    this.state = {
      articles: [],
      page: 1,
      totalResults: 0,
    };
  }

  async updateNews() {
    this.props.setProgress(5);
    const url = `https://newsapi.org/v2/top-headlines?language=en&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=30`;
    let data = await fetch(url);
    this.props.setProgress(30);
    let parsedData = await data.json();
    this.props.setProgress(50);
    this.setState({
      page: this.state.page,
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
    });
    this.props.setProgress(100);
  }

  async componentDidMount() {
    this.updateNews();
  }

  // nextclick = async () => {
  //  this.setState({page:this.state.page+1});
  //  this.updateNews();
  // };

  // previousclick = async () => {
  //  this.setState({page:this.state.page-1});
  //  this.updateNews()
  // }

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });
    const url = `https://newsapi.org/v2/top-headlines?language=en&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=30`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page,
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
    });
  };
  render() {
    return (
      <div className="container my-5">
        <hr/>
        <h5 className="container m-1">Total News Results:{this.state.totalResults}</h5>
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<h3>Loading...</h3>}
        >
          <div className="row">
            {this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsUpdate
                    title={element.title}
                    newsUrl={element.url}
                    description={element.description}
                    imageUrl={element.urlToImage}
                    source={element.source.name}
                    author={element.author}
                  />
                </div>
              );
            })}
          </div>
        </InfiniteScroll>
      </div>
    );
  }
}

export default News;  
