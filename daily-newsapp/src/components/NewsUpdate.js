import React, { Component } from "react";

export class NewsUpdate extends Component {
  render() {
    let { title, description,imageUrl,newsUrl,source,author } = this.props;
    return (
      <div className="my-3">
        <div className="card" style={{width:"25rem"}}>
           <div className="card-header bg-warning">
            {source}
           </div>
          <img src={imageUrl} className="card-img-top" alt="..." height="200px" />
          <div className="card-body">
            <div style={{ height:"100px" }}>
            <h5 className="card-title">{title}...</h5>
            </div>
            {/* <p className="card-text">{description}</p> */}
            <a target="_blank" rel="noreferrer" href={newsUrl} className="btn btn-primary">
              Read
            </a>
          </div>
        </div>
        <div className="card-footer text-success">
          <cite title="Source Title">By : {!author?source:author}</cite>
        </div>
      </div>
    );
  }
}

export default NewsUpdate;
