import React, { Component } from "react";
import axios from "axios";

import "./FullPost.css";

class FullPost extends Component {
  state = {
    loadedPost: null
  };

  componentDidMount() {
    console.log("[FullPost]: Component Did Mount Fired!");
    let id = +this.props.match.params.id;
    const { loadedPost } = this.state;
    if (id && (!loadedPost || (loadedPost && loadedPost.id !== id))) {
      this.loadData(id);
    }
  }

  /* Handles changing nested route to ensure component
  re-renders 
  */
  componentDidUpdate() {
    console.log("[FullPost]: Component Did Update Fired!");
    let id = +this.props.match.params.id;
    const { loadedPost } = this.state;
    if (id && (!loadedPost || (loadedPost && loadedPost.id !== id))) {
      this.loadData(id);
    }
  }

  loadData = id => {
    axios.get("/posts/" + id).then(response => {
      // console.log(response);
      this.setState({ loadedPost: response.data });
    });
  };

  deletePostHandler = () => {
    let id = this.props.match.params.id;
    axios.delete("/posts/" + this.props.id).then(response => {
      console.log(response);
    });
  };

  render() {
    let post;
    if (this.props.match.params.id) {
      post = <p style={{ textAlign: "center" }}>Loading...!</p>;
    }
    if (this.state.loadedPost) {
      post = (
        <div className="FullPost">
          <h1>{this.state.loadedPost.title}</h1>
          <p>{this.state.loadedPost.body}</p>
          <div className="Edit">
            <button onClick={this.deletePostHandler} className="Delete">
              Delete
            </button>
          </div>
        </div>
      );
    }
    return post;
  }
}

export default FullPost;
