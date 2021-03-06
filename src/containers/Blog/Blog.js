import React, { Component } from "react";
import { Route, NavLink, Switch, Redirect } from "react-router-dom";

import styles from "./Blog.module.css";
import Posts from "./Posts/Posts";
//import NewPost from "./NewPost/NewPost";
import asyncComponent from "../../hoc/asyncComponent";

const AsyncNewPost = asyncComponent(() => {
  return import("./NewPost/NewPost");
});

class Blog extends Component {
  state = {
    auth: true
  };

  render() {
    console.log(this.props);
    return (
      <div className={styles.Blog}>
        <header className={styles.Nav}>
          <nav>
            <ul>
              <li>
                <NavLink to="/posts" activeClassName={styles.activeNav}>
                  Posts
                </NavLink>
              </li>
              <li>
                <NavLink
                  exact
                  activeClassName={styles.activeNav}
                  activeStyle={{
                    color: "#fa923f",
                    textDecoration: "underline"
                  }}
                  to={{
                    pathname: "/new-post",
                    search: "?quick-submit=true"
                  }}
                >
                  New Post
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        {/*
          Render good to use for messages
           <Route path="/" exact render={() => <h1>Home 1</h1> />
           <Route path="/" exact render={() => <h1>Home</h1>} />
        */}
        <Switch>
          {/* Guards against the route being available to unauthenticated users */}
          {this.state.auth ? (
            <Route path="/new-post" component={AsyncNewPost} />
          ) : null}
          <Route path="/posts" component={Posts} />
          {/* <Redirect from="/" to="/posts" /> */}
          <Route render={() => <h1>Not Found</h1>} /> {/* Handles 404 */}
          {/* Alternative 404 handling */}
          {/* <Route component={NotFound} /> */}
        </Switch>
      </div>
    );
  }
}

export default Blog;
