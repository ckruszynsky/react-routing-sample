import React, { Component } from "react";
import styles from "./Blog.module.css";
import Posts from "./Posts/Posts";
import NewPost from "./NewPost/NewPost";
import FullPost from "./FullPost/FullPost";
import { Route, NavLink, Switch } from "react-router-dom";

class Blog extends Component {
  render() {
    console.log(this.props);
    return (
      <div className={styles.Blog}>
        <header className={styles.Nav}>
          <nav>
            <ul>
              <li>
                <NavLink to="/" exact activeClassName={styles.activeNav}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  activeClassName={styles.activeNav}
                  exact
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
          <Route path="/" exact component={Posts} />
          <Route path="/new-post" component={NewPost} />
          <Route path="/:id" component={FullPost} />
        </Switch>
      </div>
    );
  }
}

export default Blog;
