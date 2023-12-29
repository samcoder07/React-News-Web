import React, { Component } from "react";

export class NewsUpdate extends Component {
  render() {
    let { title, description,imageUrl,newsUrl } = this.props;
    return (
      <div>
        <div className="card" style={{ width: "18rem" }}>
          <img src={imageUrl} className="card-img-top object-fit-cover" alt="..." height="200px" />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a target="_blank" href={newsUrl} className="btn btn-primary">
              Read
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsUpdate;
