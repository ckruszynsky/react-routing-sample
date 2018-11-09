import React, { Component } from "react";
import { Route } from "react-router-dom";

import axios from "../../../axios";
import FullPost from "../FullPost/FullPost";
import Post from "../../../components/Post/Post";
import styles from "./Posts.module.css";

class Posts extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    console.log("[POSTS]: Component Did Mount Fired!");
    axios
      .get("/posts")
      .then(response => {
        const posts = response.data.slice(0, 4);
        const updatedPosts = posts.map(post => {
          return {
            ...post,
            author: "Max"
          };
        });
        this.setState({ posts: updatedPosts });
        // console.log( response );
      })
      .catch(error => {
        // console.log(error);
        this.setState({ error: true });
      });
  }

  postSelectedHandler = id => {
    //this.setState({ selectedPostId: id });
    this.props.history.push({ pathname: "/posts/" + id });
  };

  render() {
    let posts = <p style={{ textAlign: "center" }}>Something went wrong!</p>;
    if (!this.state.error) {
      posts = this.state.posts.map(post => {
        return (
          <Post
            key={post.id}
            title={post.title}
            author={post.author}
            clicked={() => this.postSelectedHandler(post.id)}
          />
        );
      });
    }
    return (
      <div>
        <section style={{ marginTop: "30px" }} className={styles.Posts}>
          {posts}
        </section>
        <Route path={this.props.match.url + "/:id"} component={FullPost} />
      </div>
    );
  }
}

export default Posts;
