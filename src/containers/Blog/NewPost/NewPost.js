import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

import "./NewPost.css";

class NewPost extends Component {
  state = {
    title: "",
    content: "",
    author: "Max",
    submitted: false
  };

  componentDidMount() {}
  postDataHandler = () => {
    const data = {
      title: this.state.title,
      body: this.state.content,
      author: this.state.author
    };
    axios.post("/posts", data).then(response => {
      this.setState({ submitted: true });
    });
  };

  redirectElement = () => {
    return this.state.submitted && <Redirect to="/posts" />;
  };

  render() {
    let redirectElement = this.redirectElement();
    return (
      <div className="NewPost">
        {redirectElement}
        <h1>Add a Post</h1>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            value={this.state.title}
            onChange={event => this.setState({ title: event.target.value })}
          />
        </div>
        <div className="form-group">
          <label>Content</label>
          <textarea
            rows="4"
            value={this.state.content}
            onChange={event => this.setState({ content: event.target.value })}
          />
        </div>
        <div className="form-group">
          <label>Author</label>
          <select
            value={this.state.author}
            onChange={event => this.setState({ author: event.target.value })}
          >
            <option value="Max">Max</option>
            <option value="Manu">Manu</option>
          </select>
        </div>
        <div className="form-group">
          <button onClick={this.postDataHandler}>Add Post</button>
        </div>
      </div>
    );
  }
}

export default NewPost;
