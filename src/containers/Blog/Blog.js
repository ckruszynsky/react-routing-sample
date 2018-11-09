import React, { Component } from "react";
import styles from "./Blog.module.css";
import Posts from "./Posts/Posts";
import NewPost from "./NewPost/NewPost";
import { Route, NavLink, Switch, Redirect } from "react-router-dom";

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
            <Route path="/new-post" component={NewPost} />
          ) : null}
          <Route path="/posts" component={Posts} />
          <Redirect from="/" to="/posts" />
        </Switch>
      </div>
    );
  }
}

export default Blog;
