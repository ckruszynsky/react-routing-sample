import React, { Component } from "react";
import styles from "./Blog.module.css";
import Posts from "./Posts/Posts";
import NewPost from "./NewPost/NewPost";
import { Route, Link } from "react-router-dom";

class Blog extends Component {
  render() {
    return (
      <div className={styles.Blog}>
        <header className={styles.Nav}>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link
                  to={{
                    pathname: "/new-post",
                    search: "?quick-submit=true"
                  }}
                >
                  New Post
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        {/*
          Render good to use for messages
           <Route path="/" exact render={() => <h1>Home 1</h1> />
           <Route path="/" exact render={() => <h1>Home</h1>} />
        */}
        <Route path="/" exact component={Posts} />
        <Route path="/new-post" component={NewPost} />
      </div>
    );
  }
}

export default Blog;
